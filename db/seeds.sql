INSERT INTO deparments (deparments_name)
VALUES
('Sales'),
('Engineering'),
('Legal'),
('Accounting'),
('Hr');

INSERT INTO role (title, salary, deparments_id)
VALUES
('Lead Sales', 100000, 1),
('Lead Engineer', 150000, 2),
('JR Engineer', 70000, 2),
('Paralegal', 80000, 3),
('Head Lawyer', 150000,3),
('jr Accountant', 50000, 4),
('Accountant', 80000, 4),
('Lead accountant', 100000, 4),
('Lead Hr', 120000, 5),
('Assistant', 50000, 5);




INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES