CREATE database burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INT Auto_Increment,
    burger_name CHAR(50) NOT NULL,
    devoured BOOLEAN DEFAULT false,
)