import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectToMongoDB from "./db/connect.js";

const app = express();

dotenv.config();

const PORT = process.env.PORT || 5000;

// app.get("/", (req, res) => {
//   res.send("Hello WOrld");
// });

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`server running on port ${PORT}`);
});
