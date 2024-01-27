const authConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {
    async jwt({ token, user }) {
      //   console.log("TTTOOKKENNN", token);
      //   console.log("UUUUSSSEEERR", user);
      if (user) {
        token = { ...token, ...user };
      }

      return token;
    },
    async session({ session, token }) {
      let newSession = {};
      if (token) {
        newSession = { ...session.user };
      }

      return newSession;
    },
    authorized({ auth, request }) {
      ///// Write the authorization allow logic
      const user = auth?.user;
      // condition when session is not active
      console.log("rrrrrrreeeqqqqq", request.nextUrl.href.slice(21));
      if (!user) {
        // deep operation(eg: edit, delete, view) on any particular post - not allowed
        if (request.nextUrl?.href.slice(21).startsWith("/blog/")) {
          return false;
        }
        // logout -not allowed
        if (request.nextUrl?.href.slice(21).startsWith("/logout")) {
          return false;
        }
      }

      return true;
    },
  },
};

export default authConfig;
