import { PrismaClient, Prisma } from "inkvue-database";
import { logger } from "../winston/logger";

export const prisma = new PrismaClient({
  log: [
    {
      emit: "event",
      level: "query",
    },
    {
      emit: "event",
      level: "error",
    },
    {
      emit: "event",
      level: "info",
    },
    {
      emit: "event",
      level: "warn",
    },
  ],
});

prisma.$on("query", (e: Prisma.QueryEvent) => {
  logger.notice(e);
});

prisma.$on("error", (e: Prisma.LogEvent) => {
  logger.error(e);
});

prisma.$on("info", (e: Prisma.LogEvent) => {
  logger.info(e);
});

prisma.$on("warn", (e: Prisma.LogEvent) => {
  logger.warn(e);
});
