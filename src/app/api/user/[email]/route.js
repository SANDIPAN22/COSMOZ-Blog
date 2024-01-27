import { connectDB } from "@/lib/ConnectMongo";
import { User } from "@/lib/MongoModels";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  try {
    connectDB();

    const user = await User.findOne({ email: params.email });
    return NextResponse.json(user);
  } catch (err) {
    throw err;
  }
};
