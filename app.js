// import express from "express";
// import cors from "cors";

// const app = express();

// app.use(cors());
// app.use(express.json());

// app.get("/", (req, res) => {
//   res.json({
//     success: true,
//     message: "HRMS Backend Running",
//   });
// });


// export default app;



import express from "express";
import cors from "cors";
// import { ENV } from "./config/env.js";

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
  res.json({ success: true, message: `HRMS Backend Running on DB_NAME` });
});

// ${ENV.DB_NAME} DB_HOST ${ENV.DB_HOST} DB_PORT ${ENV.DB_PORT} JWT_EXPIRES_IN ${ENV.JWT_EXPIRES_IN} JWT_SECRET ${ENV.JWT_SECRET} SUPER_ADMIN_EMAIL ${ENV.SUPER_ADMIN_EMAIL} SUPER_ADMIN_PASSWORD ${ENV.SUPER_ADMIN_PASSWORD}

// app.get("/test", (req, res) => {
//   res.json({ success: true, message: `HRMS Backend Running on TEST endpoint`});
// });

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
