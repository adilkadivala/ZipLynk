import { connectDB } from "@/db/connection";
import { URL } from "@/models/url";
import { nanoid } from "nanoid";

export async function POST(req) {
  await connectDB();

  try {
    const { url } = await req.json();

    if (!url) {
      return new Response(
        JSON.stringify({ error: "redirectUrl is required" }),
        {
          status: 400,
        }
      );
    }

    const shortID = nanoid(8);
    await URL.create({
      shortId: shortID,
      redirectUrl: url,
      visitHistory: [],
    });

    const baseUrl = `${
      req.headers.get("x-forwarded-proto") || "http"
    }://${req.headers.get("host")}`;
    const shortUrl = `${baseUrl}/${shortID}`;

    return new Response(JSON.stringify({ shortUrl, shortID }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
}
