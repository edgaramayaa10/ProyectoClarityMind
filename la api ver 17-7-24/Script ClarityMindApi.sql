DROP DATABASE IF EXISTS DB_CLARITY_MIND;
CREATE SCHEMA IF NOT EXISTS DB_CLARITY_MIND;
USE DB_CLARITY_MIND;
SELECT * FROM usuarios;
ALTER TABLE usuarios ADD COLUMN token VARCHAR(255); #esto es por si no se crea el campo al arrancar la api

