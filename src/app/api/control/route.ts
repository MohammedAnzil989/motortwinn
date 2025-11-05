// src/app/api/control/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Control API running" });
}

// OR, if you need POST:
export async function POST(request: Request) {
  const data = await request.json();
  console.log("Received:", data);
  return NextResponse.json({ status: "ok" });
}
