--script que crea la PDB project desde 0 sin haberla creado antes
--se agrega ON DELETE CASCADE
CONN / AS SYSDBA
SHOW USER
SHOW PDBS
ALTER PLUGGABLE DATABASE ORCLPDB1 OPEN;

CREATE PLUGGABLE DATABASE PROJECT FROM ORCLPDB1;
ALTER PLUGGABLE DATABASE PROJECT OPEN;
ALTER SESSION SET CONTAINER=PROJECT;

CREATE USER JORGE
IDENTIFIED BY oracle1
DEFAULT TABLESPACE USERS
QUOTA 10M ON USERS
TEMPORARY TABLESPACE TEMP;

GRANT CREATE SESSION TO JORGE;
GRANT CREATE TABLE TO JORGE;
GRANT CREATE SEQUENCE TO JORGE;

CONN JORGE/oracle1@project
SHOW USER

CREATE TABLE playlist(
idPlaylist NUMBER(10) GENERATED ALWAYS AS IDENTITY,
nombre VARCHAR(50) NOT NULL,
seguidores FLOAT(20) NOT NULL,
PRIMARY KEY(idPlaylist)
);

CREATE TABLE interprete(
idInterprete NUMBER(10) GENERATED ALWAYS AS IDENTITY,
nombre VARCHAR(50) NOT NULL,
oyentesMns FLOAT(20) NOT NULL,
seguidores FLOAT(20) NOT NULL,
oc VARCHAR(50),
condicion VARCHAR(50) NOT NULL,
PRIMARY KEY(idInterprete)
);

CREATE TABLE categoria(
idCategoria NUMBER(10) GENERATED ALWAYS AS IDENTITY,
genero VARCHAR(50) NOT NULL,
subgenero VARCHAR(50),
PRIMARY KEY(idCategoria)
);

CREATE TABLE melodia(
idMelodia NUMBER(10) GENERATED ALWAYS AS IDENTITY,
nombre VARCHAR(50) NOT NULL,
duracion VARCHAR(6) NOT NULL,
album VARCHAR(50) NOT NULL,
likes FLOAT(20),
idCategoria NUMBER(10) NOT NULL,
idPlaylist NUMBER(10) NOT NULL,
PRIMARY KEY(idMelodia),
FOREIGN KEY(idCategoria) REFERENCES categoria(idCategoria) ON DELETE CASCADE,
FOREIGN KEY(idPlaylist) REFERENCES playlist(idPlaylist) ON DELETE CASCADE
);

CREATE TABLE melodia_interprete(
idMelodia NUMBER(10) NOT NULL,
idInterprete NUMBER(10) NOT NULL,
FOREIGN KEY(idMelodia) REFERENCES melodia(idMelodia) ON DELETE CASCADE,
FOREIGN KEY(idInterprete) REFERENCES interprete(idInterprete) ON DELETE CASCADE
);

INSERT INTO playlist(nombre, seguidores) VALUES('Descanso', 230000);
INSERT INTO playlist(nombre, seguidores) VALUES('Electroadictos', 230000);
INSERT INTO playlist(nombre, seguidores) VALUES('Synthwave Gral', 230000);
INSERT INTO playlist(nombre, seguidores) VALUES('Cool Japan', 230000);
INSERT INTO playlist(nombre, seguidores) VALUES('Rocktronic', 230000);

INSERT INTO interprete(nombre, oyentesMns, seguidores, oc, condicion) VALUES('Skrillex', 21966233, 8151807, 'Producer DJ', 'Artista Verificado');
INSERT INTO interprete(nombre, oyentesMns, seguidores, oc, condicion) VALUES('Fred Again', 13506887, 671039, 'Producer DJ', 'Artista Verificado');
INSERT INTO interprete(nombre, oyentesMns, seguidores, oc, condicion) VALUES('Bladee', 1311876, 387189, 'Singer', 'Artista Verificado');
INSERT INTO interprete(nombre, oyentesMns, seguidores, oc, condicion) VALUES('Poter Robinson', 2455785, 1063164, 'Producer DJ', 'Artista Verificado');
INSERT INTO interprete(nombre, oyentesMns, seguidores, oc, condicion) VALUES('ZODIVK', 2590842, 27844, 'Producer', 'Artista Verificado');
INSERT INTO interprete(nombre, oyentesMns, seguidores, oc, condicion) VALUES('Louis The Child', 3838741, 456991, 'DJ Producer', 'Artista Verificado');
INSERT INTO interprete(nombre, oyentesMns, seguidores, oc, condicion) VALUES('Alice Glass', 180113, 163540, 'Singer', 'Artista Verificado');
INSERT INTO interprete(nombre, oyentesMns, seguidores, oc, condicion) VALUES('JackU', 3688095, 1080429, 'Duo', 'Artista Verificado');
INSERT INTO interprete(nombre, oyentesMns, seguidores, oc, condicion) VALUES('Bladee', 1311876, 387189, 'Singer', 'Artista Verificado');
INSERT INTO interprete(nombre, oyentesMns, seguidores, oc, condicion) VALUES('Starjunk 95', 326515, 40417, 'Producer', 'Artista Verificado');

INSERT INTO categoria(genero, subgenero) VALUES('Electronica', 'House');
INSERT INTO categoria(genero, subgenero) VALUES('Electronica', 'Dubstep');
INSERT INTO categoria(genero, subgenero) VALUES('Electronica', 'Brostep');
INSERT INTO categoria(genero, subgenero) VALUES('Electronica', 'Electro Trap');
INSERT INTO categoria(genero, subgenero) VALUES('Electronica', 'Electro Rock');
INSERT INTO categoria(genero, subgenero) VALUES('Shyntwave', 'Japan Synthwave');
INSERT INTO categoria(genero, subgenero) VALUES('Rock', 'Melodic Rock');
INSERT INTO categoria(genero, subgenero) VALUES('Rock', 'Rock');
INSERT INTO categoria(genero, subgenero) VALUES('Electronica', '');
INSERT INTO categoria(genero, subgenero) VALUES('Electronica', 'Hardstyle');

INSERT INTO melodia(nombre, duracion, album, likes, idCategoria, idPlaylist) VALUES('Summertime', '2:11', 'Dont get to close', '1500000', 4, 2);
INSERT INTO melodia(nombre, duracion, album, likes, idCategoria, idPlaylist) VALUES('Breakin A sweet', '4:01', 'Bangaram', '1507887', 2, 2);
INSERT INTO melodia(nombre, duracion, album, likes, idCategoria, idPlaylist) VALUES('Broken', '2:00', 'Banga', '15887', 1, 2);
INSERT INTO melodia(nombre, duracion, album, likes, idCategoria, idPlaylist) VALUES('Ragga-boom', '3:00', 'Bangaram', '200000', 3, 2);
INSERT INTO melodia(nombre, duracion, album, likes, idCategoria, idPlaylist) VALUES('Vaquero', '4:00', 'Western', '23887', 5, 5);
INSERT INTO melodia(nombre, duracion, album, likes, idCategoria, idPlaylist) VALUES('Fly me to the moon', '3:33', 'Neon Genesis', '9000222', 6, 4);
INSERT INTO melodia(nombre, duracion, album, likes, idCategoria, idPlaylist) VALUES('Paris', '3:33', 'Faceb', '53532', 6, 1);
INSERT INTO melodia(nombre, duracion, album, likes, idCategoria, idPlaylist) VALUES('Cred', '6:66', 'Raining', '1236464', 7, 1);
INSERT INTO melodia(nombre, duracion, album, likes, idCategoria, idPlaylist) VALUES('Destroyer', '2:01', 'Fire', '17464', 8, 5);
INSERT INTO melodia(nombre, duracion, album, likes, idCategoria, idPlaylist) VALUES('Princess', '1:09', 'Summer', '317464', 9, 3);
INSERT INTO melodia(nombre, duracion, album, likes, idCategoria, idPlaylist) VALUES('Merry', '5:09', 'December', '3464', 10, 2);


INSERT INTO melodia_interprete(idMelodia, idInterprete) VALUES(1, 1);
INSERT INTO melodia_interprete(idMelodia, idInterprete) VALUES(2, 1);
INSERT INTO melodia_interprete(idMelodia, idInterprete) VALUES(3, 2);
INSERT INTO melodia_interprete(idMelodia, idInterprete) VALUES(4, 3);
INSERT INTO melodia_interprete(idMelodia, idInterprete) VALUES(5, 4);
INSERT INTO melodia_interprete(idMelodia, idInterprete) VALUES(6, 5);
INSERT INTO melodia_interprete(idMelodia, idInterprete) VALUES(7, 6);
INSERT INTO melodia_interprete(idMelodia, idInterprete) VALUES(8, 7);
INSERT INTO melodia_interprete(idMelodia, idInterprete) VALUES(9, 8);
INSERT INTO melodia_interprete(idMelodia, idInterprete) VALUES(10, 9);
INSERT INTO melodia_interprete(idMelodia, idInterprete) VALUES(11, 10);


SELECT * FROM playlist;
SELECT * FROM interprete;
SELECT * FROM categoria;
SELECT * FROM melodia;
SELECT * FROM melodia_interprete;

COMMIT;