import { prisma } from '../repositories/prisma/prisma';
import { Router, Request, Response } from 'express';
import { logger } from '../repositories/winston/logger';

export const userRouter = Router();

userRouter.get('/', async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (e) {
    logger.error('Error retrieving all users');
  }
});

userRouter.get('/:id', async (req: Request, res: Response) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: req.params.id
      }
    });
    res.json(user);
  } catch (e) {
    logger.error('Error retrieving all users');
  }
});

userRouter.delete('/delete', async (req: Request, res: Response) => {
  try {
    await prisma.user.deleteMany();
    res.send('Succesfully deleted all users');
  } catch (e) {
    logger.error('Error retrieving all users');
  }
});
