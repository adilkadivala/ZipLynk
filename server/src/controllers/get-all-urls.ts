import { Request, Response } from "express";
import { prisma } from "../lib/db";

export const getAllUrls = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const allUrls = await prisma.url.findMany();
    res.status(200).json({ urls: allUrls });
  } catch (error) {
    console.error("Error fetching URLs:", error);
    res.status(500).json({ error: "Failed to fetch URLs" });
  }
};
