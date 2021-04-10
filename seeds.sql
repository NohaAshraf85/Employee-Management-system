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

-- employee table
INSERT INTO employee (first_name, last_name)
VALUE ("Mike", "Chan");

INSERT INTO employee (first_name, last_name)
VALUE ("Ashley", "Rodriguez");

INSERT INTO employee (first_name, last_name)
VALUE ("Malia", "Brown"); 