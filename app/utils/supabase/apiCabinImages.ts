import supabase from "./client"
// utils/s3Upload.ts
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const s3 = new S3Client({
  region: "ap-south-1",
  endpoint: "https://iiimywcrhwybichlzcyh.supabase.co/storage/v1/s3",
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_SUPABASE_S3_KEY_ID!,
    secretAccessKey: process.env.NEXT_PUBLIC_SUPABASE_S3_SECRET!,
  },
  forcePathStyle: true,
});

export async function uploadFileToS3(file: File, path: string, bucket = "cabin-images") {
  const buffer = await file.arrayBuffer();

  const command = new PutObjectCommand({
    Bucket: bucket,
    Key: path,
    Body: buffer,
    ContentType: file.type,
  });

  return await s3.send(command);
}
