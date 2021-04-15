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
select title, salary, name from role inner join department on department_id=department.id ;

INSERT INTO role (title, salary,department_id)
VALUES ("Sales Lead", "100000", 4);

INSERT INTO role (title, salary,department_id)
VALUE ("Lead Engineer", "150000", 6);

INSERT INTO role (title, salary,department_id)
VALUE ("Software Engineer", "120000", 6);

INSERT INTO role (title, salary,department_id)
VALUE ("Accountant", "125000", 2);

INSERT INTO role (title, salary,department_id)
VALUE ("Legal Team Lead", "250000", 5);

INSERT INTO role (title, salary,department_id)
VALUE ("Lawyer", "190000", 5);

INSERT INTO role (title, salary,department_id)
VALUE ("Salesperson", "100000", 4);

-- employee table
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ("Mike", "Chan", 1, null);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ("Ashley", "Rodriguez", 2, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ("Malia", "Brown", 2, null); 

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ("Tom", "Allen", 6, null);