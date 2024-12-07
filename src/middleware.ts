import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const adminToken = req.cookies.get("adminToken")?.value;

  const url = req.nextUrl.pathname;

  // Allow /admin/login page access without checking the token
  if (url === "/admin/login") {
    return NextResponse.next();
  }

  // Redirect to /admin/login only if token is absent
  if (!adminToken) {
    console.log("No token found, redirecting to /admin/login");
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }

  // If token exists, proceed normally
  console.log("Token found, proceeding:", adminToken);
  return NextResponse.next();
}

// Middleware configuration for matching only admin routes
export const config = {
  matcher: "/admin/:path*",
};
