import { connectDB } from "@/db/connection";
import URL from "@/models/url";

export async function GET(req, { params }) {
  await connectDB();

  try {
    const { searchParams } = params;
    const shortId = searchParams.get("shortId");

    const result = await URL.findOne({ shortId });

    if (!result) {
      return new Response(JSON.stringify({ error: "Short URL not found" }), {
        status: 404,
      });
    }

    return new Response(
      JSON.stringify({
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
}
