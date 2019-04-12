terraform {
  required_version = ">= 0.11.0"

  backend "s3" {
    region = "ap-northeast-1"
  }
}

provider "aws" {
  region = "ap-northeast-1"
}

provider "aws" {
  region = "us-east-1"
  alias  = "us-east-1"
}

variable "domain" {
  type        = "string"
  description = "domain name"
}

data "aws_acm_certificate" "acm" {
  provider = "aws.us-east-1"
  domain   = "*.${var.domain}"
}

data "aws_iam_policy_document" "s3_policy" {
  statement {
    actions   = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.site.arn}/*"]

    principals {
      type        = "AWS"
      identifiers = ["${aws_cloudfront_origin_access_identity.site.iam_arn}"]
    }
  }

  statement {
    actions   = ["s3:ListBucket"]
    resources = ["${aws_s3_bucket.site.arn}"]

    principals {
      type        = "AWS"
      identifiers = ["${aws_cloudfront_origin_access_identity.site.iam_arn}"]
    }
  }
}

resource "aws_s3_bucket" "site" {
  bucket = "${var.domain}"

  website {
    index_document = "index.html"
    error_document = "index.html"
  }
}

resource "aws_s3_bucket_policy" "site" {
  bucket = "${aws_s3_bucket.site.id}"
  policy = "${data.aws_iam_policy_document.s3_policy.json}"
}

resource "aws_cloudfront_distribution" "site" {
  origin {
    domain_name = "${aws_s3_bucket.site.bucket_regional_domain_name}"
    origin_id   = "${aws_s3_bucket.site.id}"

    s3_origin_config {
      origin_access_identity = "${aws_cloudfront_origin_access_identity.site.cloudfront_access_identity_path}"
    }
  }

  enabled             = true
  is_ipv6_enabled     = true
  comment             = "${var.domain} site"
  default_root_object = "index.html"

  aliases = ["${var.domain}"]

  default_cache_behavior {
    allowed_methods  = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "${aws_s3_bucket.site.id}"

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "allow-all"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn = "${data.aws_acm_certificate.acm.arn}"
    ssl_support_method  = "sni-only"
  }
}

resource "aws_cloudfront_origin_access_identity" "site" {
  comment = "${var.domain} origin access identity"
}

data "aws_iam_policy_document" "deploy_policy_document" {
  statement {
    actions = [
      "s3:ListBucket",
    ]

    resources = [
      "${aws_s3_bucket.site.arn}",
    ]
  }

  statement {
    actions = [
      "s3:PutObject",
      "s3:DeleteObject",
    ]

    resources = [
      "${aws_s3_bucket.site.arn}/*",
    ]
  }

  statement {
    actions = [
      "cloudfront:ListDistributions",
      "cloudfront:CreateInvalidation"
    ]

    resources = [
      "*"
    ]
  }
}

resource "aws_iam_user_policy" "deployer_policy" {
  name = "site_${var.domain}_deployer_policy"
  user = "${aws_iam_user.deployer.id}"
  policy = "${data.aws_iam_policy_document.deploy_policy_document.json}"
}

resource "aws_iam_user" "deployer" {
  name = "site_${var.domain}_deployer"
}
