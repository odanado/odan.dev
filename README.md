# odan.dev

## init
```bash
$ yarn install
```

## deploy
```bash
$ yarn workspace app generate
$ aws s3 cp --recursive app/dist/ s3://odan.dev/
$ export DISTRIBUTION_ID=$(aws cloudfront list-distributions --query 'DistributionList.Items[?Aliases.Items[0]==`odan.dev`].Id' --output text)
$ aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths '/*'
```