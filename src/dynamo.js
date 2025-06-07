import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DeleteCommand,
  DynamoDBDocumentClient,
  PutCommand,
  ScanCommand,
} from "@aws-sdk/lib-dynamodb";

const POSTS = "posts";

const client = new DynamoDBClient({
  region: import.meta.env.VITE_AWS_REGION,
  credentials: {
    accessKeyId: import.meta.env.VITE_AWS_ACCESS_ID,
    secretAccessKey: import.meta.env.VITE_AWS_SECRET_KEY,
  },
});

const docClient = DynamoDBDocumentClient.from(client);

//SCAN

export async function scanPosts() {
  const { Items } = await docClient.send(new ScanCommand({ TableName: POSTS }));
  return Items || [];
}

export async function createPosts(post) {
  await docClient.send(new PutCommand({ TableName: POSTS, Item: post }));
}

export async function deletePosts(id) {
  await docClient.send(new DeleteCommand({ TableName: POSTS, Key: { id } }));
}
