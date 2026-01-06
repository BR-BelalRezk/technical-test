import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function proxy(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const { pathname } = request.nextUrl;

  // Define public auth pages
  const publicAuthPages = ["/login", "/register", "/verify"]; // ✅ Add /verify
  const isAuthPage = publicAuthPages.includes(pathname);

  // ✅ Special handling for /verify (allow without cookie, uses sessionStorage)
  if (pathname === "/verify") {
    return NextResponse.next();
  }

  // ✅ Has token + trying to access login/register → redirect to home
  if (token && (pathname === "/login" || pathname === "/register")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // ❌ No token + NOT on auth page → redirect to login
  if (!token && !isAuthPage) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$|.*\\.jpg$|.*\\.jpeg$|.*\\.svg$).*)",
  ],
};
