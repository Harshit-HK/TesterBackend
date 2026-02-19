import express from "express";
import cors from "cors";
import { db } from "./config/db.js";

const app = express();

app.use(cors());
app.use(express.json());

/**
 * GET /
 * Basic server + env check
 */
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "444HRMS Backend Running ✅",
    envCheck: {
      DB_HOST: process.env.DB_HOST || "missing",
      DB_USER: process.env.DB_USER || "missing",
      DB_PASSWORD: process.env.DB_PASSWORD || "missing",
      DB_NAME: process.env.DB_NAME || "missing",
    },
  });
});

/**
 * GET /data
 * Dummy one-line data
 */
app.get("/data", (req, res) => {
  res.json({
    success: true,
    data: "This is dummy data from Hostinger Node backend 🚀",
  });
});

/**
 * GET /db
 * Database connection test
 */


app.get("/db", async (req, res) => {
  try {
    await db.query("SELECT 1");
    return res.json({
      success: true,
      message: "✅ Database Connected Successfully",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "❌ Database connection failed",
      error: err.message,
    });
  }
});


export default app;
