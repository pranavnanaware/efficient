import { NextResponse } from "next/server";

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

export function middleware(request: Request) {
  return NextResponse.next();
}
