import { NextResponse } from "next/server";

export default function middleware() {
  const res = NextResponse.next();
  res.headers.set("x-custom-header", "My custom header for all requests");
  return res;
}
