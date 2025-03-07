import { Request, Response } from "express";
import { prisma } from "../lib/db";

export const redirect = async (req: Request, res: Response): Promise<void> => {
  try {
    const { shortId } = req.params;

    console.log("ShortId:", shortId);

    const existingUrl = await prisma.url.findUnique({
      where: { shortId },
    });

    if (!existingUrl) {
      res.status(404).json({ error: "Short URL not found" });
      return;
    }

    console.log("Existing URL:", existingUrl);

    const entry = await prisma.url.update({
      where: { shortId },
      data: {
        visitHistory: {
          create: [{ timestamp: BigInt(Date.now()) }],
        },
      },
      include: { visitHistory: true },
    });

    res.redirect(302, entry.redirectUrl);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
