import { Request, Response } from "express";
import { prisma } from "../lib/db";

export const deleteUrl = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    console.log(id, "urlid for delete");

    await prisma.visitHistory.deleteMany({
      where: { urlId: id },
    });

    const deletedUrl = await prisma.url.delete({ where: { id } });

    if (!deletedUrl) res.status(404).json({ error: "URL not found" });

    res.status(200).json({ message: "URL deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
