import { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { redirect, useRouter } from "next/navigation";

const Backend_URL = process.env.LOGIN_URL;
const url = "/tasks";
async function refreshToken(token: JWT): Promise<JWT> {
  const res = await fetch(`${Backend_URL}`, {
    method: "POST",
    headers: {
      authorization: `Refresh ${token.refreshToken}`,
    },
  });
  console.log("refreshed");

  const response = await res.json();

  return {
    ...token,
    backendTokens: response,
  };
}

export const authOptions: NextAuthOptions = {
  secret: process.env.JWT_SECRET,
  session: {
    strategy: "jwt",
  },
  //   pages: {
  //     signIn: "/login",
  //   },
  providers: [
    CredentialsProvider({
      name: "Clickers",
      credentials: {
        userName: {
          label: "Username",
          type: "text",
          placeholder: "Your User Name",
        },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        if (!credentials?.userName || !credentials?.password) return null;
        const { userName, password } = credentials;
        const res = await fetch(`${Backend_URL}`, {
          method: "POST",
          body: JSON.stringify({
            userName,
            password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (res.status == 401) {
          console.log(res.statusText);

          return null;
        }
        const user = await res.json();
        // Ensure that the required properties are present in the user object
        user.userName = userName; // Add the userName property
        // user.userId = user.id; // Assuming that the user ID is stored in 'id'
        console.log("Response Body:", user);

        return user;
      },
    }),
  ],

  callbacks: {
    async redirect({ url, baseUrl }) {
      // Check if the current URL is not the '/tasks' page
      if (!url.includes("/tasks")) {
        // Redirect to the '/tasks' page
        return "/tasks";
      }

      // Check if the URL is the sign-out URL
      if (url.includes("/signout")) {
        // Redirect to the desired sign-out URL
        return "/custom-sign-out-url";
      }

      return url;
    },
    async jwt({ token, user }) {
      if (user) return { ...token, ...user };

      if (new Date().getTime() < token.expiresIn) return token;

      return await refreshToken(token);
    },

    async session({ token, session, user }) {
      session.userId = token.userId;
      session.accessToken = token.accessToken;
      session.userName = token.userName;
      session.userImageUrl = token.userImageUrl;
      console.log("Session Info:", session);
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
