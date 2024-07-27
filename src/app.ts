import express, { Express } from "express";
import dotenv from "dotenv";
import { router } from "./controllers/home";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use("/prisma", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
