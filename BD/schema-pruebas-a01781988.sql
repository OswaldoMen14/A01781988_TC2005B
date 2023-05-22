-- Creamos la tabla PAIS: 
CREATE TABLE PAIS (
  nombre VARCHAR(20),
  numero_participantes INT,
  numero_medallas INT,
  PRIMARY KEY (nombre)
);

-- Creamos la tabla DEPORTISTA:
CREATE TABLE DEPORTISTA (
  matricula INT,
  nombre VARCHAR(20),
  apellidos VARCHAR(20),
  sexo VARCHAR(10),
  pais VARCHAR(20),
  PRIMARY KEY (matricula),
  FOREIGN KEY (pais) REFERENCES PAIS(nombre)
);

-- Creamos la tabla DISCIPLINA: 
CREATE TABLE DISCIPLINA (
  identificador INT,
  nombre VARCHAR(20),
  disciplina VARCHAR(20),
  PRIMARY KEY (identificador)
);

-- Creamos la tabla PRUEBA1 (conflicto con tabla PRUEBA que no me funcionó): 
CREATE TABLE PRUEBA1 (
  identificador INT,
  disciplina INT,
  fecha DATE,
  lugar VARCHAR(50),
  deportistas_inscritos INT,
  naturaleza VARCHAR(20),
  PRIMARY KEY (identificador),
  FOREIGN KEY (disciplina) REFERENCES DISCIPLINA(identificador)
);

-- Creamos la tabla CLASIFICACION:	
CREATE TABLE CLASIFICACION (
  deportista INT,
  prueba INT,
  rango INT,
  PRIMARY KEY (deportista, prueba),
  FOREIGN KEY (deportista) REFERENCES DEPORTISTA(matricula),
  FOREIGN KEY (prueba) REFERENCES PRUEBA1(identificador)
);

-- Creamos la tabla RESULTADO:
CREATE TABLE RESULTADO (
  disciplina INT,
  oro INT,
  plata INT,
  bronce INT,
  FOREIGN KEY (disciplina) REFERENCES DISCIPLINA(identificador),
  FOREIGN KEY (oro) REFERENCES DEPORTISTA(matricula),
  FOREIGN KEY (plata) REFERENCES DEPORTISTA(matricula),
  FOREIGN KEY (bronce) REFERENCES DEPORTISTA(matricula)
);
