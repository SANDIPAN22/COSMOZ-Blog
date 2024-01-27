import { connectDB } from "@/lib/ConnectMongo";
import { User } from "@/lib/MongoModels";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    connectDB();
    const posts = await User.find();
    return NextResponse.json(posts);
  } catch (err) {
    console.error("Problem to fetch Posts. ", err);
  }
};
