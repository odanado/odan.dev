#/bin/bash

set -eu

echo "copy to s3 bucket"
aws s3 cp --recursive app/out/ s3://odan.dev/


DISTRIBUTION_ID=$(aws cloudfront list-distributions --query 'DistributionList.Items[?Aliases.Items[0]==`odan.dev`].Id' --output text)
echo "invalidation: $DISTRIBUTION_ID"
aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths '/*'
