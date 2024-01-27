import NextAuth from "next-auth";
import authConfig from "./lib/auth.config";

export default NextAuth(authConfig).auth;

export const config = {
  // matcher solution to skip ==>  public, api, assets and _next
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};
