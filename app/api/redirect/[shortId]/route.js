import { connectDB } from "@/db/connection";
import URL from "@/models/url";

export async function GET(req, { params }) {
  await connectDB();

  try {
    const { shortId } = params;

    const entry = await URL.findOneAndUpdate(
      { shortId },
      { $push: { visitHistory: { timestamp: Date.now() } } },
      { new: true }
    );

    if (!entry) {
      return new Response(JSON.stringify({ error: "Short URL not found" }), {
        status: 404,
      });
    }

    return Response.redirect(entry.redirectUrl, 302);
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
}
