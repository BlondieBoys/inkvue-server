import { Router } from "express";
import { Request, Response } from "express";
import { prisma } from "../repositories/prisma/prisma";
import { logger } from "../repositories/winston/logger";

export const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany({
      where: {
        id: "123",
      },
    });
    res.json(users);
  } catch (e) {
    res.send(":(");
  }
});
