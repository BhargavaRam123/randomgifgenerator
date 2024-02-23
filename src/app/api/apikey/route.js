import { NextResponse } from "next/server";

export async function GET(req) {
  console.log(process.env.API_KEY);
  return NextResponse.json({ API_KEY: process.env.API_KEY }, { status: 200 });
}
