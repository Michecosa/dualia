-- MySQL dump 10.13  Distrib 8.0.44, for Win64 (x86_64)
--
-- Host: localhost    Database: dualia
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
INSERT INTO `category` VALUES (1,'Decorations','Decorative objects for interiors'),(2,'Lighting','Lamps and lights for the home'),(3,'Candles and Scents','Candles, diffusers and incense'),(4,'Furniture','Furniture and home accessories'),(5,'Clocks and Frames','Decorative clocks and frames'),(6,'Zen Garden','Decorative elements for relaxation and meditation');
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
INSERT INTO `discount` VALUES (1,'Welcome','Welcome discount for new customers','percentage',10.00,'2025-01-01','2025-12-31',1,'WELCOME10'),(2,'Winter Sales','Seasonal discounts on selected products','percentage',20.00,'2025-01-15','2025-02-28',1,'WINTER20'),(3,'Black Friday','Black Friday promotion on the entire catalog','percentage',30.00,'2025-11-25','2025-11-30',0,'BLACK30'),(4,'Free Shipping','Fixed discount equivalent to shipping costs','fixed',9.99,'2025-03-01','2025-12-31',1,'FREESHIP'),(5,'Furniture Discount','Fixed discount on furniture products','fixed',50.00,'2025-04-01','2025-06-30',1,'FURNITURE50');
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
INSERT INTO `orders` VALUES (1,'2025-01-10',189.98,'paid',1,0,'mario.rossi@email.it','Mario','Rossi','Via Roma','15','Milan','MI','20100','Italy'),(2,'2025-01-18',79.98,'shipped',NULL,1,'luca.bianchi@email.it','Luca','Bianchi','Corso Italia','102','Turin','TO','10100','Italy'),(3,'2025-02-02',349.99,'delivered',2,0,'giulia.verdi@email.it','Giulia','Verdi','Via Garibaldi','8','Rome','RM','00100','Italy'),(4,'2025-02-10',129.99,'pending',4,1,'francesca.neri@email.it','Francesca','Neri','Via Dante','21','Bologna','BO','40100','Italy');
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
INSERT INTO `products` VALUES (1,'artwall1','Minimal wall decoration',999.99,10000.00,15,'White','150x120',NULL,1),(2,'artwall2','Minimal wall decoration',999.99,10000.00,15,'Black','150x120',NULL,1),(3,'buddha3','Decorative Buddha statue',539.99,549.99,20,'White','25x18x40',NULL,1),(4,'buddha4','Decorative Buddha statue',539.99,549.99,20,'Black','25x18x40',NULL,1),(5,'hourglass5','Decorative glass hourglass',324.99,334.99,30,'Black','12x12x25',NULL,1),(6,'hourglass6','Decorative glass hourglass',324.99,334.99,30,'White','12x12x25',NULL,1),(7,'ashtray7','Ceramic ashtray',814.99,819.99,25,'White','12x12x5',NULL,1),(8,'ashtray8','Ceramic ashtray',814.99,819.99,25,'Black','12x12x5',NULL,1),(9,'largecandle9','Large scented candle',69.99,84.99,40,'White','10x10x15',NULL,3),(10,'largecandle10','Large scented candle',69.99,84.99,40,'Black','10x10x15',NULL,3),(11,'smallcandle11','Small scented candle',49.99,54.99,50,'Black','7x7x8',NULL,3),(12,'smallcandle12','Small scented candle',49.99,54.99,50,'White','7x7x8',NULL,3),(13,'diffuser13','Room fragrance diffuser',72.99,80.99,35,'White','8x8x20',NULL,3),(14,'diffuser14','Room fragrance diffuser',72.99,80.99,35,'Black','8x8x20',NULL,3),(15,'incenseburner15','Ceramic incense burner',157.99,282.99,20,'Black','9x9x12',NULL,3),(16,'incenseburner16','Ceramic incense burner',157.99,282.99,20,'White','9x9x12',NULL,3),(17,'lamp17','Modern table lamp',409.99,609.99,18,'White','25x25x45',NULL,2),(18,'lamp18','Modern table lamp',409.99,609.99,18,'Black','25x25x45',NULL,2),(19,'floorlamp19','Minimal floor lamp',1119.99,1149.99,10,'Black','30x30x160',NULL,2),(20,'floorlamp20','Minimal floor lamp',1119.99,1149.99,10,'White','30x30x160',NULL,2),(21,'lantern21','Decorative light lantern',304.99,404.99,22,'White','18x18x35',NULL,2),(22,'lantern22','Decorative light lantern',304.99,404.99,22,'Black','18x18x35',NULL,2),(23,'coffeetable23','Modern coffee table',1129.99,1159.99,8,'Black','60x60x45',NULL,4),(24,'coffeetable24','Modern coffee table',1129.99,1159.99,8,'White','60x60x45',NULL,4),(25,'largevase25','Large decorative vase',544.99,559.99,12,'White','25x25x50',NULL,4),(26,'largevase26','Large decorative vase',544.99,559.99,12,'Black','25x25x50',NULL,4),(27,'smallvase27','Small decorative vase',419.99,424.99,25,'Black','12x12x25',NULL,4),(28,'smallvase28','Small decorative vase',419.99,424.99,25,'White','12x12x25',NULL,4),(29,'clock29','Modern wall clock',439.99,449.99,14,'White','35x35',NULL,5),(30,'clock30','Modern wall clock',439.99,449.99,14,'Black','35x35',NULL,5),(31,'largeframe31','Large photo frame',124.99,134.99,20,'Black','30x40',NULL,5),(32,'largeframe32','Large photo frame',124.99,134.99,20,'White','30x40',NULL,5),(33,'smallframe33','Small photo frame',114.99,119.99,30,'Black','15x20',NULL,5),(34,'smallframe34','Small photo frame',114.99,119.99,30,'White','15x20',NULL,5),(35,'zengarden35','Decorative Zen garden',69.99,89.99,18,'White','20x20',NULL,6),(36,'zengarden36','Decorative Zen garden',69.99,89.99,18,'Black','20x20',NULL,6),(37,'zengardendeluxe37','Deluxe Zen garden with accessories',159.99,164.99,10,'White','30x30',NULL,6),(38,'zengardendeluxe38','Deluxe Zen garden with accessories',159.99,164.99,10,'Black','30x30',NULL,6);
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

-- Dump completed on 2026-01-12 12:55:23
