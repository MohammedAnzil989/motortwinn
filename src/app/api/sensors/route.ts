// src/app/api/sensors/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Sensors API working" });
}

// If you need to accept data (optional):
// export async function POST(request: Request) {
//   const body = await request.json();
//   return NextResponse.json({ received: body });
// }
