#/bin/bash

set -eu

echo "setup assume role"
sts=$(aws sts get-session-token)
export AWS_ACCESS_KEY_ID=$(echo $sts | jq '.Credentials.AccessKeyId')
export AWS_SECRET_ACCESS_KEY=$(echo $sts | jq '.Credentials.SecretAccessKey')
export AWS_SESSION_TOKEN=$(echo $sts | jq '.Credentials.SessionToken')

echo "copy to s3 bucket"
aws s3 cp --recursive app/dist/ s3://odan.dev/


DISTRIBUTION_ID=$(aws cloudfront list-distributions --query 'DistributionList.Items[?Aliases.Items[0]==`odan.dev`].Id' --output text)
echo "invalidation: $DISTRIBUTION_ID"
aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths '/*'
