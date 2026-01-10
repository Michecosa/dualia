-- MySQL dump 10.13  Distrib 8.0.44, for Win64 (x86_64)
--
-- Host: localhost    Database: db_dualia
-- ------------------------------------------------------
-- Server version	8.0.44

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
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `category_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `description` text,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Decorazioni','Oggetti decorativi per interni'),(2,'Illuminazione','Lampade e luci per la casa'),(3,'Candele e Profumi','Candele, diffusori e incensi'),(4,'Arredo','Mobili e complementi d’arredo'),(5,'Orologi e Cornici','Orologi e cornici decorative'),(6,'Giardino Zen','Elementi decorativi per relax e meditazione');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `discount`
--

DROP TABLE IF EXISTS `discount`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `discount` (
  `promotion_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` text,
  `discount_type` enum('percentage','fixed') NOT NULL,
  `discount_value` decimal(10,2) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `active` tinyint(1) DEFAULT '1',
  `promo_code` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`promotion_id`),
  UNIQUE KEY `promo_code` (`promo_code`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `discount`
--

LOCK TABLES `discount` WRITE;
/*!40000 ALTER TABLE `discount` DISABLE KEYS */;
INSERT INTO `discount` VALUES (1,'Benvenuto','Sconto di benvenuto per i nuovi clienti','percentage',10.00,'2025-01-01','2025-12-31',1,'WELCOME10'),(2,'Saldi Invernali','Sconti stagionali su selezione di prodotti','percentage',20.00,'2025-01-15','2025-02-28',1,'WINTER20'),(3,'Black Friday','Promozione Black Friday su tutto il catalogo','percentage',30.00,'2025-11-25','2025-11-30',0,'BLACK30'),(4,'Spedizione Gratuita','Sconto fisso equivalente alla spedizione','fixed',9.99,'2025-03-01','2025-12-31',1,'FREESHIP'),(5,'Sconto Arredo','Sconto fisso sui prodotti di arredo','fixed',50.00,'2025-04-01','2025-06-30',1,'ARREDO50');
/*!40000 ALTER TABLE `discount` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_item`
--

DROP TABLE IF EXISTS `order_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_item` (
  `order_id` int NOT NULL,
  `product_id` int NOT NULL,
  `quantity` int NOT NULL,
  `price` decimal(10,2) NOT NULL,
  PRIMARY KEY (`order_id`,`product_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `order_item_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`),
  CONSTRAINT `order_item_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_item`
--

LOCK TABLES `order_item` WRITE;
/*!40000 ALTER TABLE `order_item` DISABLE KEYS */;
INSERT INTO `order_item` VALUES (1,1,1,999.99),(1,5,2,324.99),(2,9,1,69.99),(2,11,2,49.99),(3,19,1,1119.99),(3,23,1,304.99),(4,25,1,1129.99),(4,27,1,544.99);
/*!40000 ALTER TABLE `order_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `order_id` int NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `total_amount` decimal(10,2) NOT NULL,
  `status` varchar(50) NOT NULL,
  `promotion_id` int DEFAULT NULL,
  `free_shipping` tinyint(1) DEFAULT '0',
  `email` varchar(100) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `street` varchar(255) NOT NULL,
  `house_number` varchar(10) NOT NULL,
  `city` varchar(50) NOT NULL,
  `state` varchar(50) NOT NULL,
  `postal_code` varchar(20) NOT NULL,
  `country` varchar(50) NOT NULL,
  PRIMARY KEY (`order_id`),
  KEY `promotion_id` (`promotion_id`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`promotion_id`) REFERENCES `discount` (`promotion_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,'2025-01-10',189.98,'paid',1,0,'mario.rossi@email.it','Mario','Rossi','Via Roma','15','Milano','MI','20100','Italia'),(2,'2025-01-18',79.98,'shipped',NULL,1,'luca.bianchi@email.it','Luca','Bianchi','Corso Italia','102','Torino','TO','10100','Italia'),(3,'2025-02-02',349.99,'delivered',2,0,'giulia.verdi@email.it','Giulia','Verdi','Via Garibaldi','8','Roma','RM','00100','Italia'),(4,'2025-02-10',129.99,'pending',4,1,'francesca.neri@email.it','Francesca','Neri','Via Dante','21','Bologna','BO','40100','Italia');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `product_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `description` text NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `full_price` decimal(10,2) NOT NULL,
  `product_quantity` int DEFAULT NULL,
  `color` varchar(50) DEFAULT NULL,
  `dimensions` varchar(50) NOT NULL,
  `url_image` varchar(255) DEFAULT NULL,
  `category_id` int NOT NULL,
  PRIMARY KEY (`product_id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Art Wall','Decorazione murale minimal',999.99,10000.00,15,'Bianco','150x120',NULL,1),(2,'Art Wall','Decorazione murale minimal',999.99,10000.00,15,'Nero','150x120',NULL,1),(3,'Budda','Statua Budda decorativa',539.99,549.99,20,'Bianco','25x18x40',NULL,1),(4,'Budda','Statua Budda decorativa',539.99,549.99,20,'Nero','25x18x40',NULL,1),(5,'Clessidra','Clessidra decorativa in vetro',324.99,334.99,30,'Nero','12x12x25',NULL,1),(6,'Clessidra','Clessidra decorativa in vetro',324.99,334.99,30,'Bianco','12x12x25',NULL,1),(7,'Posacenere','Posacenere in ceramica',814.99,819.99,25,'Bianco','12x12x5',NULL,1),(8,'Posacenere','Posacenere in ceramica',814.99,819.99,25,'Nero','12x12x5',NULL,1),(9,'Candela Grande','Candela profumata grande',69.99,84.99,40,'Bianco','10x10x15',NULL,3),(10,'Candela Grande','Candela profumata grande',69.99,84.99,40,'Nero','10x10x15',NULL,3),(11,'Candela Piccola','Candela profumata piccola',49.99,54.99,50,'Nero','7x7x8',NULL,3),(12,'Candela Piccola','Candela profumata piccola',49.99,54.99,50,'Bianco','7x7x8',NULL,3),(13,'Diffusore','Diffusore di fragranze per ambiente',72.99,80.99,35,'Bianco','8x8x20',NULL,3),(14,'Diffusore','Diffusore di fragranze per ambiente',72.99,80.99,35,'Nero','8x8x20',NULL,3),(15,'Bruciatore d’incenso','Bruciatore d’incenso in ceramica',157.99,282.99,20,'Nero','9x9x12',NULL,3),(16,'Bruciatore d’incenso','Bruciatore d’incenso in ceramica',157.99,282.99,20,'Bianco','9x9x12',NULL,3),(17,'Lampada','Lampada da tavolo moderna',409.99,609.99,18,'Bianco','25x25x45',NULL,2),(18,'Lampada','Lampada da tavolo moderna',409.99,609.99,18,'Nero','25x25x45',NULL,2),(19,'Floor Lamp','Lampada da terra minimal',1119.99,1149.99,10,'Nero','30x30x160',NULL,2),(20,'Floor Lamp','Lampada da terra minimal',1119.99,1149.99,10,'Bianco','30x30x160',NULL,2),(21,'Lanterna','Lanterna decorativa luminosa',304.99,404.99,22,'Bianco','18x18x35',NULL,2),(22,'Lanterna','Lanterna decorativa luminosa',304.99,404.99,22,'Nero','18x18x35',NULL,2),(23,'Tavolino','Tavolino da salotto moderno',1129.99,1159.99,8,'Nero','60x60x45',NULL,4),(24,'Tavolino','Tavolino da salotto moderno',1129.99,1159.99,8,'Bianco','60x60x45',NULL,4),(25,'Vaso Grande','Vaso decorativo grande',544.99,559.99,12,'Bianco','25x25x50',NULL,4),(26,'Vaso Grande','Vaso decorativo grande',544.99,559.99,12,'Nero','25x25x50',NULL,4),(27,'Vaso Piccolo','Vaso decorativo piccolo',419.99,424.99,25,'Nero','12x12x25',NULL,4),(28,'Vaso Piccolo','Vaso decorativo piccolo',419.99,424.99,25,'Bianco','12x12x25',NULL,4),(29,'Orologio','Orologio da parete moderno',439.99,449.99,14,'Bianco','35x35',NULL,5),(30,'Orologio','Orologio da parete moderno',439.99,449.99,14,'Nero','35x35',NULL,5),(31,'Cornice Grande','Cornice fotografica grande',124.99,134.99,20,'Nero','30x40',NULL,5),(32,'Cornice Grande','Cornice fotografica grande',124.99,134.99,20,'Bianco','30x40',NULL,5),(33,'Cornice Piccola','Cornice fotografica piccola',114.99,119.99,30,'Nero','15x20',NULL,5),(34,'Cornice Piccola','Cornice fotografica piccola',114.99,119.99,30,'Bianco','15x20',NULL,5),(35,'Giardino Zen','Giardino zen decorativo',69.99,89.99,18,'Bianco','20x20',NULL,6),(36,'Giardino Zen','Giardino zen decorativo',69.99,89.99,18,'Nero','20x20',NULL,6),(37,'Giardino Zen Deluxe','Giardino zen deluxe con accessori',159.99,164.99,10,'Bianco','30x30',NULL,6),(38,'Giardino Zen Deluxe','Giardino zen deluxe con accessori',159.99,164.99,10,'Nero','30x30',NULL,6);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-01-10 16:51:33
