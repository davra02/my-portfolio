import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// The language lives in ?lang=, which the root layout can't read on its own.
// Forward it as a request header so <html lang> matches the page content.
export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(
    "x-lang",
    request.nextUrl.searchParams.get("lang") === "en" ? "en" : "es",
  );
  return NextResponse.next({ request: { headers: requestHeaders } });
}

// Only the home page: assets, metadata routes and proxied demos skip it.
export const config = { matcher: "/" };
