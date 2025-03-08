import { Request, Response } from "express";
import { prisma } from "../lib/db";

export const visitHistory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { shortId } = req.params;

    const result = await prisma.url.findUnique({
      where: { shortId },
      include: { visitHistory: true },
    });

    if (!result) res.status(404).json({ error: "Short URL not found" });

    const analyticsData = result?.visitHistory.map((entry) => ({
      ...entry,
      timestamp: Number(entry.timestamp),
    }));

    res.status(200).json({
      totalClicks: analyticsData?.length || 0,
      analytics: analyticsData,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
