-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: db_clarity_mind
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `formulario`
--

DROP TABLE IF EXISTS `formulario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `formulario` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `respuesta1` varchar(255) DEFAULT NULL,
  `respuesta10` varchar(255) DEFAULT NULL,
  `respuesta11` varchar(255) DEFAULT NULL,
  `respuesta12` varchar(255) DEFAULT NULL,
  `respuesta13` varchar(255) DEFAULT NULL,
  `respuesta14` varchar(255) DEFAULT NULL,
  `respuesta15` varchar(255) DEFAULT NULL,
  `respuesta16` varchar(255) DEFAULT NULL,
  `respuesta17` varchar(255) DEFAULT NULL,
  `respuesta18` varchar(255) DEFAULT NULL,
  `respuesta19` varchar(255) DEFAULT NULL,
  `respuesta2` varchar(255) DEFAULT NULL,
  `respuesta20` varchar(255) DEFAULT NULL,
  `respuesta3` varchar(255) DEFAULT NULL,
  `respuesta4` varchar(255) DEFAULT NULL,
  `respuesta5` varchar(255) DEFAULT NULL,
  `respuesta6` varchar(255) DEFAULT NULL,
  `respuesta7` varchar(255) DEFAULT NULL,
  `respuesta8` varchar(255) DEFAULT NULL,
  `respuesta9` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `formulario`
--

LOCK TABLES `formulario` WRITE;
/*!40000 ALTER TABLE `formulario` DISABLE KEYS */;
INSERT INTO `formulario` VALUES (1,'6',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'8',NULL,'4','6','',NULL,NULL,NULL,NULL),(2,'6',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'8',NULL,'2','6','',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `formulario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `formularios`
--

DROP TABLE IF EXISTS `formularios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `formularios` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `fecha_creacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `respuesta1` varchar(255) DEFAULT NULL,
  `respuesta2` varchar(255) DEFAULT NULL,
  `respuesta3` varchar(255) DEFAULT NULL,
  `respuesta4` varchar(255) DEFAULT NULL,
  `respuesta5` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `formularios`
--

LOCK TABLES `formularios` WRITE;
/*!40000 ALTER TABLE `formularios` DISABLE KEYS */;
/*!40000 ALTER TABLE `formularios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `activo` bit(1) NOT NULL,
  `id` bigint NOT NULL AUTO_INCREMENT,
  `apellidos` varchar(255) DEFAULT NULL,
  `contrasenya` varchar(255) DEFAULT NULL,
  `correo` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  `sesion_activa` tinyint(1) DEFAULT '0',
  `session_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (_binary '',26,'garcia duran','123456','garcia.michael.mrm@gmail.com','michael',NULL,0,NULL);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-29  9:16:35
