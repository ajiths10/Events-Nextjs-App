export const awsDetails = {
   bucket: process.env.REACT_APP_S3_BUCKET,
   region: process.env.REACT_APP_S3_REGION,
   accessKeyId: process.env.REACT_APP_S3_ACCESS_KEY_ID,
   secretAccessKey: process.env.REACT_APP_S3_SECRET_ACCESS_KEY,
   baseFilePath: `https://${process.env.REACT_APP_S3_BUCKET}.s3.${process.env.REACT_APP_S3_REGION}.amazonaws.com`,
};