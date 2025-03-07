import { Request, Response } from "express";
import { prisma } from "../lib/db";
import { nanoid } from "nanoid";

export const generateShort = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { url } = req.body;

    if (!url) {
      res.status(400).json({ error: "redirectUrl is required" });
    }

    const shortID = nanoid(8);
    const newURL = await prisma.url.create({
      data: {
        shortId: shortID,
        redirectUrl: url,
        visitHistory: { create: [] },
      },
    });

    const baseUrl = `${req.protocol}://${req.get("host")}`;
    const shortUrl = `${baseUrl}/${newURL.shortId}`;

    res.status(200).json({ shortUrl, shortID });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
