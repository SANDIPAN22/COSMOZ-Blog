"use server";

import { revalidatePath } from "next/cache";
import { connectDB } from "./ConnectMongo";
import { Post, User } from "./MongoModels";
import bcrypt from "bcryptjs";
import { signIn, signOut } from "./auth";
import { redirect } from "next/navigation";

export const deletePost = async (fromData) => {
  const { oldSlug } = Object.fromEntries(fromData);

  // post to mongoDB
  try {
    connectDB();

    await Post.findOneAndDelete({ slug: oldSlug });
    console.log("Succesfully Deleted ....");
    revalidatePath("/blog");
  } catch (err) {
    console.warn("Server action :: addPost Error :: ", err);
  } finally {
    redirect("/blog");
  }
};

export const updatePost = async (fromData) => {
  const { title, desc, image, authorEmail, oldSlug } =
    Object.fromEntries(fromData);

  // post to mongoDB
  try {
    connectDB();
    const newPost = {
      title,
      desc,
      image,
      authorEmail,
    };

    await Post.findOneAndUpdate({ slug: oldSlug }, newPost);
    console.log("Succesfully Updated ....");
    revalidatePath("/blog");
  } catch (err) {
    console.warn("Server action :: addPost Error :: ", err);
  } finally {
    redirect("/blog");
  }
};

export const addPost = async (fromData) => {
  const { title, desc, image, authorEmail } = Object.fromEntries(fromData);

  // post to mongoDB
  try {
    connectDB();
    const newPost = new Post({
      title,
      desc,
      slug: encodeURI(title.slice(0, 10)) + "-" + String(Date.now()),
      image,
      authorEmail,
    });
    await newPost.save();

    console.log("Succesfully Posted ....");
    revalidatePath("/blog");
  } catch (err) {
    console.warn("Server action :: addPost Error :: ", err);
  } finally {
    redirect("/blog");
  }
};

export const handleRegister = async (previousState, formData) => {
  const { username, email, password, rpt_password, avatar } =
    Object.fromEntries(formData);

  if (rpt_password !== password) {
    return { error: "Passwords do not match!!" };
  }
  try {
    connectDB();
    const user = await User.findOne({ $or: [{ username }, { email }] });

    // check whether the user is pre-existing or not
    if (user) {
      return { error: "Same username / email is already present..." };
    } else {
      // encrypting the user's password
      const salt = await bcrypt.genSalt(12);
      const hashedPassword = await bcrypt.hash(password, salt);
      //registering the new user in our db
      const newUser = new User({
        username,
        email,
        password: hashedPassword,
        avatar,
      });
      await newUser.save();
      return { success: "The new user is registered..." };
    }
  } catch (err) {
    console.error("Error to register the user. Reason : ", err);
    return { error: "Failed to Register. Please retry after sometime." };
  }
};

export const handleLogin = async (previousState, formData) => {
  const { email, password } = Object.fromEntries(formData);
  try {
    const user = await signIn("credentials", { email, password });
    console.log("Finally", user);
  } catch (err) {
    if (err.message.includes("CredentialsSignin")) {
      return { error: "Login Failed. Wrong Credentials..." };
    }
    throw err;
  } finally {
    redirect("/");
  }
};

export const handleSignInViaGitHub = async () => {
  await signIn("github");
};

export const handleLogout = async () => {
  await signOut();
  redirect("/");
};
