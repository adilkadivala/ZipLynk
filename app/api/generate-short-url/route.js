import { connectDB } from "@/db/connection";
import URL from "@/models/url";
import { nanoid } from "nanoid";
import { NextResponse } from "next/server";

export async function POST(req) {
  await connectDB();

  try {
    const body = await req.json();

    if (!body.url) {
      return NextResponse.json(
        { error: "redirectUrl is required" },
        { status: 400 }
      );
    }

    const shortID = nanoid(8);
    const newURL = await URL.create({
      shortId: shortID,
      redirectUrl: body.url,
      visitHistory: [],
    });

    console.log(newURL);

    const baseUrl = `${req.protocol}://${req.headers.get("host")}`;
    const shortUrl = `${baseUrl}/${newURL}`;

    return NextResponse.json({ shortUrl, shortID }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ err: "Internal server error" }, { status: 500 });
  }
}
