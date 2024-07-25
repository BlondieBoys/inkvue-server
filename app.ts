import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();
console.log(process.env.DATABASE_URL);
import { prisma } from "inkvue-database";

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
