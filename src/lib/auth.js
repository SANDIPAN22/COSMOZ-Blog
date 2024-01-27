import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectDB } from "./ConnectMongo";
import { User } from "./MongoModels";
import bcrypt from "bcryptjs";
import authConfig from "./auth.config";

const loginAuthorization = async ({ email, password }) => {
  try {
    connectDB();

    const user = await User.findOne({ email });
    if (user) {
      const isPasswordCorrect = await bcrypt.compare(password, user.password);
      if (isPasswordCorrect) {
        return user;
      } else {
        throw new Error("Wrong Credentials");
      }
    } else {
      throw new Error("Wrong Credentials");
    }
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const authOptions = {
  // unpacking middleware related configuration
  ...authConfig,

  // Configure one or more authentication providers
  providers: [
    // Github provider
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // Credential Provider
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "text", placeholder: "dem@demo.demo" },
        password: { label: "Password", type: "password" },
      },
      // async function for authorization logic
      async authorize(credentials, req) {
        try {
          const user = await loginAuthorization(credentials);

          return user;
        } catch (err) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      // callbacks after a github Oauth operation
      if (account.provider === "github") {
        try {
          connectDB();
          const existingUser = await User.findOne({ email: profile.email });
          if (!existingUser) {
            console.log("GitHub user is new, registering him up!");
            const newUser = new User({
              username: profile.name,
              email: profile.email,
              avatar: profile.avatar_url,
            });
            await newUser.save();
          }
        } catch (err) {
          console.log("Problem while github signing activites...", err);
          return false;
        }
      }
      return true;
    },
    ...authConfig.callbacks,
  },
};

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth(authOptions);
