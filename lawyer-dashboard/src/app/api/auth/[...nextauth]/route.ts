import { GetUser } from "@/server/users/users";
import { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { redirect, useRouter } from "next/navigation";

const Backend_URL = process.env.LOGIN_URL;
const url = "/tasks";
// Define the structure of your token
interface CustomToken extends JWT {}

async function refreshToken(token: JWT): Promise<JWT> {
  const res = await fetch(`${Backend_URL}`, {
    method: "POST",
    headers: {
      authorization: `Refresh ${token.refreshToken}`,
    },
  });
  console.log("refreshed");

  const response = await res.json();

  // Update the lastRefreshedAt property with the current timestamp
  token.lastRefreshedAt = Date.now();

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
        const userInfo = await GetUser();

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

        // Add the lastRefreshedAt property to the token when you generate it
        const token = {
          ...user,
          lastRefreshedAt: Date.now(),
        };

        // Ensure that the required properties are present in the user object
        console.log("Response Body:", user);

        return token;
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

      // Check if 'lastRefreshedAt' is defined and if an hour has passed since the last refresh
      const oneHourInMillis = 60 * 60 * 1000;
      const timeSinceLastRefresh = token.lastRefreshedAt
        ? Date.now() - token.lastRefreshedAt
        : oneHourInMillis + 1; // Set a default value to force a refresh if 'lastRefreshedAt' is undefined

      if (timeSinceLastRefresh < oneHourInMillis) {
        return token; // Token is still valid
      }

      // If an hour has passed, refresh the token
      return await refreshToken(token);
    },

    async session({ token, session }) {
      session.userId = token.userId;
      session.accessToken = token.accessToken;
      session.userName = token.userName;
      session.userImageUrl = token.userImageUrl;
      session.userRole = token.userRole;
      console.log("Session Info:", session);
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
