import { prisma } from "../repositories/prisma/prisma";
import { Router, Request, Response } from "express";
import { logger } from "../repositories/winston/logger";

export const userRouter = Router();

userRouter.get("/", async (req: Request, res: Response) => {
    try {
        const users = await prisma.user.findMany()
        res.json(users)
    } catch (e) {
        logger.error("Error retrieving all users")
    }
});
