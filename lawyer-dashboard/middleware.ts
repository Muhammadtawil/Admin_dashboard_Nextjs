import { NextRequestWithAuth, withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  async function middleware(request: NextRequestWithAuth) {
    return NextResponse.rewrite(new URL(request.url));
  },
  {
    callbacks: {
      authorized: async ({ token }) => {
        if (token?.accessToken) {
          const req = await fetch(
            process.env.NEXT_PUBLIC_JWT_BASE + "token/validate",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token.accessToken,
              },
            }
          );

          const login_token = await req.json();

          if (login_token.code === "jwt_auth_valid_token") {
            return true; // Return a boolean value here
          }
        }
        return false; // If the token is not valid or missing, return false
      },
    },
  }
);

export const config = { matcher: ["/", "/blogs"] };
