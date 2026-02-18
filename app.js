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
    message: "111HRMS Backend Running ✅",
    // envCheck: {
    //   DB_HOST: process.env.DB_HOST || "missing",
    //   DB_USER: process.env.DB_USER || "missing",
    //   DB_PASSWORD: process.env.DB_PASSWORD || "missing",
    //   DB_NAME: process.env.DB_NAME || "missing",
    //   DB_PORT: process.env.DB_PORT || "3306",
    // },
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


// app.get("/db", async (req, res) => {
//   try {
//     const [rows] = await db.query("SELECT 1 AS db_ok");

//     res.json({
//       success: true,
//       message: "✅ MySQL Connected Successfully",
//       result: rows,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "❌ MySQL Connection Failed",
//       error: error.message,
//     });
//   }
// });

export default app;
