import AWS from "aws-sdk";
import { awsDetails, BYTE_SIZE } from "./data";
import AES from "crypto-js/aes";
import { roundNumbers } from "../hooks/common";

const S3_BUCKET = awsDetails.bucket;
const REGION = awsDetails.region;

// AWS setup
AWS.config.update({
  accessKeyId: awsDetails.accessKeyId,
  secretAccessKey: awsDetails.secretAccessKey,
});

// S3 BUCKET SETUP
const myBucket = new AWS.S3({
  params: { Bucket: S3_BUCKET },
  region: REGION,
});

// ADD NEW FILE TO S#
export const awsUploadFile = (file: File): Promise<string> | undefined => {
  if (!file) return undefined;

  const currentTimeStamp = new Date().toISOString();
  const hashedUniqueFileName = AES.encrypt(
    file.name,
    `${currentTimeStamp} ${file.name} ${file.type}`
  )
    .toString()
    .replace(/[^a-zA-Z0-9]/g, "")
    .slice(0, 30);

  let fileName = `${file.name
    .toString()
    .replace(/[^a-zA-Z0-9]/g, "")}__${hashedUniqueFileName}`;

  const params = {
    Body: file,
    Bucket: S3_BUCKET ?? "",
    Key: fileName,
    ContentType: file.type,
  };

  return new Promise((resolve, reject) => {
    myBucket
      .putObject(params)
      .promise()
      .then(() => {
        resolve(fileName);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};

// REMOVE FROM S3
export const awsDeleteFile = (key: string) => {
  if (!key) return;

  const params = {
    Key: key,
    Bucket: S3_BUCKET ?? "",
  };

  return new Promise((resolve, reject) => {
    myBucket
      .deleteObject(params)
      .promise()
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};

export async function awsGetFileSize({
  key,
  getSizeInMb = false,
  getRoundedValue = false,
}: {
  key: string;
  getSizeInMb?: boolean;
  getRoundedValue?: boolean;
}) {
  if (!key) return 0;

  const params = {
    Key: key,
    Bucket: `${S3_BUCKET}`,
  };

  return myBucket
    .headObject(params)
    .promise()
    .then((res) => {
      if (getSizeInMb && res.ContentLength) {
        let sizeInMb = res.ContentLength / BYTE_SIZE;

        if (getRoundedValue) {
          return roundNumbers(sizeInMb);
        }

        return sizeInMb;
      }

      return res.ContentLength;
    })
    .catch((err) => {
      console.log(err);
    });
}
