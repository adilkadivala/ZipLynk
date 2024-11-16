import { connectDB } from "@/db/connection";
import URL from "@/models/url";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  await connectDB();

  try {
    const { shortId } = await params;

    const result = await URL.findOne({ shortId });

    console.log(result);

    if (!result) {
      return NextResponse.json(
        { error: "Short URL not found" },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(
      {
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory,
      },
      { status: 200 }
    );
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
