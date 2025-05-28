import dotenv from "dotenv";
dotenv.config();

import cookieParser from "cookie-parser";

import productRoutes from "./routes/product.routes.js";

import express from "express";
const app = express();
import cors from "cors";

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use("/", (req, res) => {
  res.json("Server is working");
});

app.use("/api/products", productRoutes);

export default app;
