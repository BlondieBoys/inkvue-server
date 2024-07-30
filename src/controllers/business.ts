import { Router } from 'express';
import { prisma } from '../repositories/prisma/prisma';
import { logger } from '../repositories/winston/logger';

export const businessRouter = Router();

businessRouter.get('/', async (req, rees) => {
  try {
    const businesses = await prisma.business.findMany();

    rees.json(businesses);
  } catch (error) {
    logger.error('Could not retrieve businesses');
  }
});

businessRouter.get('/:id', async (req, rees) => {
  try {
    const business = await prisma.business.findUnique({
      where: {
        id: req.params.id
      }
    });

    rees.json(business);
  } catch (error) {
    logger.error('Could not retrieve businesses');
  }
});
