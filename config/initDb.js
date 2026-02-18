import { db } from "./db.js";

export const initDb = async () => {
  const dbName = process.env.DB_NAME;

  await db.query(`CREATE DATABASE IF NOT EXISTS \`${dbName}\``);

  await db.query(`USE \`${dbName}\``);

  // Super Admins table
  await db.query(`
    CREATE TABLE IF NOT EXISTS super_admins (
      id INT PRIMARY KEY AUTO_INCREMENT,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(150) NOT NULL UNIQUE,
      password_hash VARCHAR(255) NOT NULL,
      status ENUM('ACTIVE','BLOCKED') DEFAULT 'ACTIVE',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);


// Departments table
await db.query(`
  CREATE TABLE IF NOT EXISTS departments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    isActive TINYINT(1) DEFAULT 1,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  )
`);

// Designations table
await db.query(`
  CREATE TABLE IF NOT EXISTS designations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    departmentId INT NOT NULL,
    name VARCHAR(120) NOT NULL,
    isActive TINYINT(1) DEFAULT 1,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    UNIQUE (departmentId, name),
    FOREIGN KEY (departmentId) REFERENCES departments(id) ON DELETE CASCADE
  )
`);

// Employee Statuses table
await db.query(`
  CREATE TABLE IF NOT EXISTS employee_statuses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    isActive TINYINT(1) DEFAULT 1,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  )
`);

  // Employees table (for Super admins)
await db.query(`
  CREATE TABLE IF NOT EXISTS employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    employeeCode VARCHAR(50) UNIQUE,
    name VARCHAR(120) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    phone VARCHAR(20),

    departmentId INT NOT NULL,
    designationId INT NOT NULL,
    statusId INT DEFAULT 1,

    joiningDate DATE NOT NULL,
    salary INT DEFAULT 0,
    isActive TINYINT DEFAULT 1,

    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    FOREIGN KEY (departmentId) REFERENCES departments(id),
    FOREIGN KEY (designationId) REFERENCES designations(id),
    FOREIGN KEY (statusId) REFERENCES employee_statuses(id)
  )
`);

// Candidate Statuses table
await db.query(`
  CREATE TABLE IF NOT EXISTS candidate_statuses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    isActive TINYINT(1) DEFAULT 1,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  )
`);

// Candidates table
await db.query(`
  CREATE TABLE IF NOT EXISTS candidates (
    id INT AUTO_INCREMENT PRIMARY KEY,
    candidateId VARCHAR(50) UNIQUE,
    name VARCHAR(120) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    phone VARCHAR(20),
    jobTitle VARCHAR(150) NOT NULL,
    statusId INT DEFAULT 1,
    note TEXT,
    isActive TINYINT(1) DEFAULT 1,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (statusId) REFERENCES candidate_statuses(id)
  )
`);


















  // Companies table
  await db.query(`
    CREATE TABLE IF NOT EXISTS companies (
      id INT PRIMARY KEY AUTO_INCREMENT,
      company_name VARCHAR(150) NOT NULL,
      company_code VARCHAR(50) NOT NULL UNIQUE,
      status ENUM('ACTIVE','INACTIVE') DEFAULT 'ACTIVE',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Company features table
  await db.query(`
    CREATE TABLE IF NOT EXISTS company_features (
      id INT PRIMARY KEY AUTO_INCREMENT,
      company_id INT NOT NULL,
      employees TINYINT(1) DEFAULT 1,
      attendance TINYINT(1) DEFAULT 1,
      departments TINYINT(1) DEFAULT 0,
      payroll TINYINT(1) DEFAULT 0,
      leave_module TINYINT(1) DEFAULT 0,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (company_id) REFERENCES companies(id) ON DELETE CASCADE
    )
  `);

  // Client Admins table
  await db.query(`
    CREATE TABLE IF NOT EXISTS client_admins (
      id INT PRIMARY KEY AUTO_INCREMENT,
      company_id INT NOT NULL,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(150) NOT NULL UNIQUE,
      password_hash VARCHAR(255) NOT NULL,
      status ENUM('ACTIVE','BLOCKED') DEFAULT 'ACTIVE',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (company_id) REFERENCES companies(id) ON DELETE CASCADE
    )
  `);
};
