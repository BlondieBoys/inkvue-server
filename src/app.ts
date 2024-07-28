import express, { Express } from "express";
import dotenv from "dotenv";
import { userRouter } from "./controllers/user";
import { homeRouter } from "./controllers/home";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use("/", homeRouter);
app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
