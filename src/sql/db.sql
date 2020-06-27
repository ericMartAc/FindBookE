CREATE DATABASE findbooke;

USE findbookp;

CREATE TABLE user(
    id_user INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nombre_user VARCHAR(100),
    categoria_user VARCHAR(100),
    data_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE user;

INSERT INTO user(nombre_user, categoria_user) values('Jose villa', 'Electricidad');

SELECT * FROM user;