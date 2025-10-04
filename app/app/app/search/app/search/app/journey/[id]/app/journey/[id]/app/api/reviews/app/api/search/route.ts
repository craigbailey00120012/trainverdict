import { NextRequest, NextResponse } from "next/server";
export async function GET(req: NextRequest){
  const sp = new URL(req.url).searchParams;
  const from = sp.get("from"); const to = sp.get("to");
  // TODO: integrate KnowledgeBase/DTD/Darwin in server
  return NextResponse.json({
    query:{from,to},
    results:[{ id:"demo", from, to, avg:4.1, punctuality:0.81 }]
  });
}
