import { connectDB } from "@/lib/ConnectMongo";
import { Post, User } from "@/lib/MongoModels";
import { unstable_cache as noCache } from "next/cache";
export const getPosts = async () => {
  try {
    connectDB();
    const allPosts = await Post.find();
    return allPosts;
  } catch (err) {
    console.warn("unable fetch data from the MongoDB. Reason: ", err);
  }
};

export const getPost = async (slug) => {
  try {
    connectDB();
    const post = await Post.findOne({ slug });
    return post;
  } catch (err) {
    console.warn("unable fetch data from the MongoDB. Reason: ", err);
  }
};

export const getUser = async (email) => {
  try {
    noCache();
    connectDB();
    setTimeout(() => {});
    const user = await User.findOne({ email });
    return user;
  } catch (err) {
    console.warn("unable fetch data from the MongoDB. Reason: ", err);
  }
};
