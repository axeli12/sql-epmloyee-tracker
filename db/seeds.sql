INSERT INTO deparments (name)
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
('Mark', 'Smith', 1, 1),
('Jane', 'Stan', 2, NULL),
('Tim', 'Star', 3, 2),
('Rachel', 'Zane', 4, 5),
('Joahn', 'Till', 5 , NULL),
('Mike', 'Smith', 6, 8),
('Mike', 'Bron',7 , 8),
('John', 'Bo', 8, NULL),
('Carly', 'Shae', 9, NULL),
('Tom', 'Smith', 10, 9);
