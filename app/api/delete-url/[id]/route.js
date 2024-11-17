import { connectDB } from "@/db/connection";
import URL from "@/models/url";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  await connectDB();

  try {
    const { id } = await params;

    const deletedUrl = await URL.deleteOne({ _id: id });

    if (!deletedUrl.deletedCount) {
      return NextResponse.json({ error: "URL not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "URL deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
