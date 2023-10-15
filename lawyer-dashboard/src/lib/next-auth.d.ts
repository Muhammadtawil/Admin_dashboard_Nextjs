import NextAuth from "next-auth";
declare module "next-auth" {
  interface Session {
    userId: any;
    userName: any;
    userImageUrl: any;
    UserRole: string;
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
  }
}

import { JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
  interface JWT {
    userId: string;
    userName: string;
    userImageUrl: string;
    UserRole: string;
    accessToken: string;
    refreshToken: string;
    expiresIn: any;
    lastRefreshedAt?: number;
  }
}
