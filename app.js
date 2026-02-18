import express from "express";
import cors from "cors";

// import { errorMiddleware } from "./middleware/error.middleware.js";

// import superAdminAuthRoutes from "./modules/superAdmin/auth/superAdminAuth.routes.js";
// import superAdminClientsRoutes from "./modules/superAdmin/clients/superAdminClients.routes.js";
// import superAdminEmployeesRoutes from "./modules/superAdmin/employees/superAdminEmployees.routes.js";

// import superAdminStatusesRoutes from "./modules/superAdmin/statuses/superAdminStatuses.routes.js";
// import superAdminDepartmentsRoutes from "./modules/superAdmin/departments/superAdminDepartments.routes.js";
// import superAdminDesignationsRoutes from "./modules/superAdmin/designations/superAdminDesignations.routes.js";


// import clientAuthRoutes from "./modules/client/auth/clientAuth.routes.js";
// import employeesRoutes from "./modules/client/employees/employees.routes.js";
// import attendanceRoutes from "./modules/client/attendance/attendance.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ success: true, message: "HRMS Backend Running" + `22222222222222222 Backend is running! 
DB_HOST: ${process.env.DB_HOST}
DB_USER: ${process.env.DB_USER}
DB_PASSWORD: ${process.env.DB_PASSWORD}
DB_NAME: ${process.env.DB_NAME}`});
});

// app.use("/api/super-admin/auth", superAdminAuthRoutes);
// app.use("/api/super-admin/clients", superAdminClientsRoutes);
// app.use("/api/super-admin/employees", superAdminEmployeesRoutes);

// app.use("/api/super-admin/departments", superAdminDepartmentsRoutes);
// app.use("/api/super-admin/designations", superAdminDesignationsRoutes);
// app.use("/api/super-admin/statuses", superAdminStatusesRoutes);


// app.use("/api/client/auth", clientAuthRoutes);
// app.use("/api/client/employees", employeesRoutes);
// app.use("/api/client/attendance", attendanceRoutes);

// app.use(errorMiddleware);

export default app;
