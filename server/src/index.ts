import express from "express";
import { Request, Response } from "express";
import cors from "cors";
import env from "dotenv";
import bodyParser from "body-parser";
import router from "./routs/apies";

env.config();

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:3000/",
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
    maxAge: 600,
    methods: ["GET", "POST", "PUT", "DELETE"]

  })
);
app.use(router);

const PORT = process.env.SERVER_PORT || 8000;

app.get("/", (req: Request, res: Response) => {
  res.send("welcome!!, I'm From server");
  req.destroy();
});

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
