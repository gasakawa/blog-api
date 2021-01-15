module.exports = ({ env }) => ({
  upload: {
    provider: "aws-s3",
    providerOptions: {
      accessKeyId: env("AWS_ACCESS_KEY_ID"),
      secretAccessKey: env("AWS_ACCESS_SECRET"),
      region: "us-east-1",
      params: {
        Bucket: env("AWS_BUCKET_NAME"),
      },
    },
  },

  email: {
    provider: env("EMAIL_PROVIDER"),
    providerOptions: {
      apiKey: env("EMAIL_API_KEY"),
    },
    settings: {
      defaultFrom: env("EMAIL_FROM"),
      defaultReplyTo: env("EMAIL_REPLY_TO"),
    },
  },
});
