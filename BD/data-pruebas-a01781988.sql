-- Insertar datos en la tabla PAIS
INSERT INTO PAIS (nombre, numero_participantes, numero_medallas) VALUES
  ('México', 100, 5),
  ('Estados Unidos', 120, 8),
  ('Canadá', 80, 3),
  ('España', 60, 2),
  ('Brasil', 90, 4),
  ('Alemania', 70, 3),
  ('China', 110, 6),
  ('Japón', 100, 7),
  ('Francia', 80, 2),
  ('Italia', 70, 1);
  

-- Insertar datos en la tabla DEPORTISTA
INSERT INTO DEPORTISTA (matricula, nombre, apellidos, sexo, pais) VALUES
  (1, 'Juan', 'González', 'Masculino', 'México'),
  (2, 'María', 'López', 'Femenino', 'México'),
  (3, 'John', 'Smith', 'Masculino', 'Estados Unidos'),
  (4, 'Emily', 'Johnson', 'Femenino', 'Francia'),
  (5, 'Jean', 'Baptiste', 'Masculino', 'Francia'),
  (6, 'Jessica', 'Williams', 'Femenino', 'Canadá'),
  (7, 'Pedro', 'Sánchez', 'Masculino', 'México'),
  (8, 'Sarah', 'Davis', 'Femenino', 'Alemania'),
  (9, 'Ricardo', 'Martínez', 'Masculino', 'México'),
  (10, 'Alexandra', 'Miller', 'Femenino', 'Estados Unidos');

-- Insertar datos en la tabla DISCIPLINA
INSERT INTO DISCIPLINA (identificador, nombre, disciplina) VALUES
  (1, '400M nado libre', 'Natación'),
  (2, 'Salto de altura', 'Atletismo'),
  (3, '100M mariposa', 'Natación'),
  (4, 'Lanzamiento de disco', 'Atletismo'),
  (5, '200M estilo libre', 'Natación'),
  (6, 'Salto de longitud', 'Atletismo'),
  (7, '100M espalda', 'Natación'),
  (8, 'Lanzamiento martillo', 'Atletismo'),
  (9, '400M estilo libre', 'Natación'),
  (10, 'Salto triple', 'Atletismo');

-- Insertar datos en la tabla PRUEBA1
INSERT INTO PRUEBA1 (identificador, disciplina, fecha, lugar, deportistas_inscritos, naturaleza) VALUES
  (1, 1, '2023-05-20', 'Piscina Olímpica de la Reinosa', 12, 'Eliminatoria'),
  (2, 1, '2023-05-21', 'Piscina Olímpica de la Reinosa', 8, 'Final'),
  (3, 2, '2023-05-22', 'Estadio Azteca', 15, 'Eliminatoria'),
  (4, 2, '2023-05-23', 'Estadio Azteca', 10, 'Eliminatoria'), 
  (5, 3, '2023-05-24', 'Piscina Olímpica de la Reinosa', 10, 'Final'),
  (6, 4, '2023-05-25', 'Estadio Azteca', 12, 'Eliminatoria'),
  (7, 4, '2023-05-26', 'Estadio Azteca', 8, 'Final'),
  (8, 5, '2023-05-27', 'Piscina Olímpica de la Reinosa', 14, 'Eliminatoria'),
  (9, 5, '2023-05-28', 'Piscina Olímpica de la Reinosa', 8, 'Final'),
  (10, 6, '2023-05-29', 'Estadio Azteca', 10, 'Eliminatoria'),
  (11, 6, '2023-05-30', 'Estadio Azteca', 6, 'Final');
  
  -- Insertar datos en la tabla CLASIFICACION
  INSERT INTO CLASIFICACION (deportista, prueba, rango) VALUES
  (1, 1, 1),
  (2, 1, 2),
  (3, 1, 3),
  (4, 1, 4),
  (5, 2, 1),
  (6, 2, 2),
  (7, 2, 3),
  (8, 2, 4),
  (9, 3, 1),
  (10, 3, 2);

-- CREACIÓN DE LAS CONSULTAS 

-- Primer consulta -  apellidos y nombres de los participantes de nacionalidad mexicana:  
SELECT apellidos, nombre
FROM DEPORTISTA
WHERE pais = 'México';

-- Segunda consulta - Apellidos, nombre y puntos acumulados de los participantes de USA: 
SELECT d.apellidos, d.nombre, SUM(p.rango) AS puntos_acumulados
FROM DEPORTISTA d
JOIN CLASIFICACION p ON d.matricula = p.deportista
WHERE d.pais = 'Estados Unidos'
GROUP BY d.apellidos, d.nombre;

-- Tercera consulta - Apellidos y nombre de los participantes que se clasificaron en primer lugar en al menos una competencia :
SELECT d.apellidos, d.nombre
FROM DEPORTISTA d
JOIN CLASIFICACION c ON d.matricula = c.deportista
WHERE c.rango = 1;

-- Cuarta consulta - Nombre de las competencias en las que intervinieron los participantes mexicanos: 
SELECT DISTINCT di.nombre
FROM DEPORTISTA d
JOIN PAIS p ON d.pais = p.nombre
JOIN CLASIFICACION c ON d.matricula = c.deportista
JOIN PRUEBA1 pr ON c.prueba = pr.identificador
JOIN DISCIPLINA di ON pr.disciplina = di.identificador
WHERE p.nombre = 'México';

-- Quinta consulta - Apellidos y nombre de los participantes que nunca se clasificaron en primer lugar en alguna competencia:
SELECT d.apellidos, d.nombre
FROM DEPORTISTA d
WHERE d.matricula NOT IN (
  SELECT c.deportista
  FROM CLASIFICACION c
  WHERE c.rango = 1
);

-- Sexta consulta - Apellidos y nombre de los participantes que siempre se clasificaron en alguna competencia: 
SELECT d.apellidos, d.nombre
FROM DEPORTISTA d
WHERE d.matricula NOT IN (
  SELECT c.deportista
  FROM CLASIFICACION c
  WHERE c.deportista = d.matricula AND c.rango <> 1
);