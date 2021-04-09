USE employeeTracker_db;

-- department table
INSERT INTO department (name)
VALUES ("Human Resources");

INSERT INTO department (name)
VALUES ("Finance");

INSERT INTO department (name)
VALUES ("Marketing");

INSERT INTO department (name)
VALUES ("Sales");

INSERT INTO department (name)
VALUES ("Legal");

INSERT INTO department (name)
VALUES ("Engineering");

-- role table
INSERT INTO role (title, salary)
VALUES ("HR Associate", "10,000");

INSERT INTO role (title, salary)
VALUES ("Sales Lead", "100,000");

INSERT INTO role (title, salary)
VALUE ("Lead Engineer", "150,000");

-- employee table
INSERT INTO employee (first_name, last_name)
VALUE ("Mike", "Chan");

INSERT INTO employee (first_name, last_name)
VALUE ("Ashley", "Rodriguez");

INSERT INTO employee (first_name, last_name)
VALUE ("Malia", "Brown"); 