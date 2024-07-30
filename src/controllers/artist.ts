import { Router } from 'express';
import { prisma } from '../repositories/prisma/prisma';
import { logger } from '../repositories/winston/logger';

export const artistRouter = Router();

artistRouter.get('/', async (req, res) => {
  try {
    const artists = await prisma.artist.findMany();
    res.json(artists);
  } catch (error) {
    logger.error('Could not retrieve all artists');
  }
});

artistRouter.get('/:id', async (req, res) => {
  try {
    const artistId = req.params.id;

    const artist = await prisma.artist.findUnique({
      where: {
        id: artistId
      },
      include: {
        bussiness: true
      }
    });

    res.json(artist);
  } catch (error) {
    logger.error('Could not retrieve artist');
  }
});

artistRouter.patch('/:id', async (req, res) => {
  try {
    const artistId = req.params.id;

    const business = await prisma.business.findFirst({
      where: {
        name: req.body.businessName
      }
    });

    await prisma.artist.update({
      where: {
        id: artistId
      },
      data: {
        bussiness: {
          connect: {
            id: business?.id
          }
        }
      }
    });

    res.send(`Successfully updated Artist: ${artistId}`);
  } catch (error) {
    logger.error('Could not update artist business');
  }
});
