DROP DATABASE IF EXISTS emp_db;
CREATE DATABASE emp_db;

use emp_db;

CREATE TABLE deparments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30)
);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    deparments_id INT,
    salary DECIMAL,
    FOREIGN KEY (deparments_id) REFERENCES deparments(id)
);

CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    FOREIGN KEY (role_id) REFERENCES role(id)
);