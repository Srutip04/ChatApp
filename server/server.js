import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

const app = express();

dotenv.config();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello WOrld");
});

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
