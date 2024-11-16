import { connectDB } from "@/db/connection";
import URL from "@/models/url";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  await connectDB();

  try {
    const { shortId } = await params;

    const entry = await URL.findOneAndUpdate(
      { shortId },
      { $push: { visitHistory: { timestamp: Date.now() } } },
      { new: true }
    );

    if (!entry) {
      return NextResponse.json(
        { error: "Short URL not found" },
        {
          status: 404,
        }
      );
    }

    return Response.redirect(entry.redirectUrl, 302);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal server error" },
      {
        status: 500,
      }
    );
  }
}
