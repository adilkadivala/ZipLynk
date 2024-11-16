import { connectDB } from "@/db/connection";
import URL from "@/models/url";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();

    const all_urls = await URL.find({});

    return NextResponse.json(
      { urls: all_urls },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error fetching URLs:", error);
    return NextResponse.json(
      { error: "Failed to fetch URLs" },
      {
        status: 500,
      }
    );
  }
}
