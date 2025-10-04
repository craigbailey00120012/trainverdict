import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){
  const payload = await req.json();
  // TODO: validate + insert to Supabase
  return NextResponse.json({ ok: true, received: payload });
}
