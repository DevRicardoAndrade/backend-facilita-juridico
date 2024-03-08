CREATE DATABASE juridico;

CREATE TABLE clients(
    id serial primary key ,
    name varchar(200),
    email varchar(125),
    telephone varchar(20)
);
ALTER TABLE clients ADD cordX numeric;
ALTER TABLE clients ADD cordY numeric;