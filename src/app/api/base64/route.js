import { NextResponse } from "next/server";
import { getPlaiceholder } from "plaiceholder";

export async function POST(req, res) {
  const body = await req.json();
  const { imgurl } = body;
  // console.log("image url in post function is:", imgurl);
  try {
    const res = await fetch(imgurl);
    if (!res.ok) {
      throw new Error("failed to fetch image");
    }
    const buffer = await res.arrayBuffer();

    const { base64 } = await getPlaiceholder(Buffer.from(buffer));

    // console.log(`base64:${base64}`);

    return NextResponse.json({ base64: base64 }, { status: 200 });
  } catch (error) {
    console.log("error occured in getbase64 function ", error.message);
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}
