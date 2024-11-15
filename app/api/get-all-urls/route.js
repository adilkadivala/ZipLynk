import { connectDB } from "@/db/connection";
import { URL } from "@/models/url";

export async function GET() {
  try {
    await connectDB();

    const all_urls = await URL.find({});

    return new Response(JSON.stringify({ urls: all_urls }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching URLs:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch URLs" }), {
      status: 500,
    });
  }
}
