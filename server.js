import dotenv from "dotenv";
import app from "./app.js";
import { db } from "./config/db.js";
import { initDb } from "./config/initDb.js";
// import { seedMasters } from "./config/seedMasters.js";
// import { seedSuperAdmin } from "./config/seedSuperAdmin.js";

dotenv.config();

const startServer = async () => {
  try {
    await db.query("SELECT 1");
    console.log("MySQL Connected");

    await initDb();
    console.log("Database + tables ready");

    // await seedSuperAdmin();
    // await seedMasters();

    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("Server start error:", err);
    process.exit(1);
  }
};

startServer();



// mysql.hostinger.com
//127.0.0.1