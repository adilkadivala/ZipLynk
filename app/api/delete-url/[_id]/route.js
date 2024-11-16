const { connectDB } = require("@/db/connection");
const URL = require("@/models/url");
const { NextResponse } = require("next/server");

export async function DELETE(req, { params }) {
  await connectDB();

  try {
    const { _id } = params;

    const deletedUrl = await URL.findByIdAndRemove(_id);

    if (!deletedUrl) {
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
