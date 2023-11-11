import { authOptions } from "@/app/utils/authoptions";
import { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { redirect } from "next/navigation";




const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
