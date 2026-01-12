-- Creazione del database
CREATE DATABASE IF NOT EXISTS `dualia`;
USE `dualia`;

-- 1. Tabella CATEGORY [cite: 1]
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `category_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `description` text,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;

INSERT INTO `category` VALUES 
(1,'Decorations','Decorative objects for interiors'),
(2,'Lighting','Lamps and lights for the home'),
(3,'Candles and Scents','Candles, diffusers and incense'),
(4,'Furniture','Furniture and home accessories'),
(5,'Clocks and Frames','Decorative clocks and frames'),
(6,'Zen Garden','Decorative elements for relaxation and meditation');

-- 2. Tabella DISCOUNT [cite: 1]
DROP TABLE IF EXISTS `discount`;
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;

INSERT INTO `discount` VALUES 
(1,'Welcome','Welcome discount for new customers','percentage',10.00,'2025-01-01','2025-12-31',1,'WELCOME10'),
(2,'Winter Sales','Seasonal discounts on selected products','percentage',20.00,'2025-01-15','2025-02-28',1,'WINTER20'),
(3,'Black Friday','Black Friday promotion on the entire catalog','percentage',30.00,'2025-11-25','2025-11-30',0,'BLACK30'),
(4,'Free Shipping','Fixed discount equivalent to shipping costs','fixed',9.99,'2025-03-01','2025-12-31',1,'FREESHIP'),
(5,'Furniture Discount','Fixed discount on furniture products','fixed',50.00,'2025-04-01','2025-06-30',1,'FURNITURE50');

-- 3. Tabella ORDERS [cite: 1]
DROP TABLE IF EXISTS `orders`;
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
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`promotion_id`) REFERENCES `discount` (`promotion_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

INSERT INTO `orders` VALUES 
(1,'2025-01-10',189.98,'paid',1,0,'mario.rossi@email.it','Mario','Rossi','Via Roma','15','Milan','MI','20100','Italy'),
(2,'2025-01-18',79.98,'shipped',NULL,1,'luca.bianchi@email.it','Luca','Bianchi','Corso Italia','102','Turin','TO','10100','Italy'),
(3,'2025-02-02',349.99,'delivered',2,0,'giulia.verdi@email.it','Giulia','Verdi','Via Garibaldi','8','Rome','RM','00100','Italy'),
(4,'2025-02-10',129.99,'pending',4,1,'francesca.neri@email.it','Francesca','Neri','Via Dante','21','Bologna','BO','40100','Italy');

-- 4. Tabella PRODUCTS (Aggiornata con ID VARCHAR) 
DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `product_id` varchar(50) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `full_price` decimal(10,2) NOT NULL,
  `product_quantity` int DEFAULT NULL,
  `color` varchar(50) DEFAULT NULL,
  `dimensions` varchar(50) NOT NULL,
  `url_image` varchar(255) DEFAULT NULL,
  `category_id` int NOT NULL,
  PRIMARY KEY (`product_id`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `products` VALUES 
('art-wall-white','Art Wall white','Minimal wall decoration',999.99,10000.00,15,'White','150x120','artWall_white',1),
('art-wall-black','Art Wall black','Minimal wall decoration',999.99,10000.00,15,'Black','150x120','artWall_black',1),
('buddha-statue-white','Buddha Statue white','Decorative Buddha statue',539.99,549.99,20,'White','25x18x40','bhudda_bianco',1),
('buddha-statue-black','Buddha Statue black','Decorative Buddha statue',539.99,549.99,20,'Black','25x18x40','bhudda_black',1),
('hourglass-black','Hourglass black','Decorative glass hourglass',324.99,334.99,30,'Black','12x12x25','clessidra_black',1),
('hourglass-white','Hourglass white','Decorative glass hourglass',324.99,334.99,30,'White','12x12x25','clessidra_white',1),
('ashtray-white','Ashtray white','Ceramic ashtray',814.99,819.99,25,'White','12x12x5','luxury_ashtray_white',1),
('ashtray-black','Ashtray black','Ceramic ashtray',814.99,819.99,25,'Black','12x12x5','luxury_ashtray_black',1),
('large-candle-white','Large Candle white','Large scented candle',69.99,84.99,40,'White','10x10x15', 'candela_white_big',3),
('large-candle-black','Large Candle black','Large scented candle',69.99,84.99,40,'Black','10x10x15','candela_black_big',3),
('small-candle-black','Small Candle black','Small scented candle',49.99,54.99,50,'Black','7x7x8','candela_black_small',3),
('small-candle-white','Small Candle white','Small scented candle',49.99,54.99,50,'White','7x7x8','candela_white_small',3),
('diffuser-white','Diffuser white','Room fragrance diffuser',72.99,80.99,35,'White','8x8x20','diffusore_white',3),
('diffuser-black','Diffuser black','Room fragrance diffuser',72.99,80.99,35,'Black','8x8x20','diffusore_black',3),
('incense-burner-black','Incense Burner black','Ceramic incense burner',157.99,282.99,20,'Black','9x9x12','porta_incenso_black',3),
('incense-burner-white','Incense Burner white','Ceramic incense burner',157.99,282.99,20,'White','9x9x12','porta_incenso_white',3),
('lamp-white','Lamp white','Modern table lamp',409.99,609.99,18,'White','25x25x45','lampada_white',2),
('lamp-black','Lamp black','Modern table lamp',409.99,609.99,18,'Black','25x25x45', 'lampada_black',2),
('floor-lamp-black','Floor Lamp black','Minimal floor lamp',1119.99,1149.99,10,'Black','30x30x160','floor_lamp_black',2),
('floor-lamp-white','Floor Lamp white','Minimal floor lamp',1119.99,1149.99,10,'White','30x30x160','floor_lamp_white',2),
('lantern-white','Lantern white','Decorative light lantern',304.99,404.99,22,'White','18x18x35','lanterna_white',2),
('lantern-black','Lantern black','Decorative light lantern',304.99,404.99,22,'Black','18x18x35','lanterna_black',2),
('side-table-black','Side Table black','Modern coffee table',1129.99,1159.99,8,'Black','60x60x45','tavolino_black',4),
('side-table-white','Side Table white','Modern coffee table',1129.99,1159.99,8,'White','60x60x45','tavolino_white',4),
('large-vase-white','Large Vase white','Large decorative vase',544.99,559.99,12,'White','25x25x50','tavolino_white',4),
('large-vase-black','Large Vase black','Large decorative vase',544.99,559.99,12,'Black','25x25x50','tavolino_black',4),
('small-vase-black','Small Vase black','Small decorative vase',419.99,424.99,25,'Black','12x12x25','vaso_black_small',4),
('small-vase-white','Small Vase white','Small decorative vase',419.99,424.99,25,'White','12x12x25','vaso_white_small',4),
('clock-white','Clock white','Modern wall clock',439.99,449.99,14,'White','35x35','orologio_white',5),
('clock-black','Clock black','Modern wall clock',439.99,449.99,14,'Black','35x35','orologio_black',5),
('large-photo-frame-black','Large Photo Frame black','Large photo frame',124.99,134.99,20,'Black','30x40', 'cornice_black_big',5),
('large-photo-frame-white','Large Photo Frame white','Large photo frame',124.99,134.99,20,'White','30x40','cornice_white_big',5),
('small-frame-black','Small Frame black','Small photo frame',114.99,119.99,30,'Black','15x20','cornice_black_small',5),
('small-frame-white','Small Frame white','Small photo frame',114.99,119.99,30,'White','15x20','cornice_white_small',5),
('zen-garden-white','Zen Garden white','Decorative Zen garden',69.99,89.99,18,'White','20x20', 'giardino_zen_white',6),
('zen-garden-black','Zen Garden black','Decorative Zen garden',69.99,89.99,18,'Black','20x20','giardino_zen_black',6),
('zen-garden-deluxe-white','Zen Garden Deluxe white','Deluxe Zen garden with accessories',159.99,164.99,10,'White','30x30','giardino_zen_delux_white',6),
('zen-garden-deluxe-black','Zen Garden Deluxe black','Deluxe Zen garden with accessories',159.99,164.99,10,'Black','30x30','giardino_zen_delux_black',6);

-- 5. Tabella ORDER_ITEM (Aggiornata con ID VARCHAR e mappatura dati) 
DROP TABLE IF EXISTS `order_item`;
CREATE TABLE `order_item` (
  `order_id` int NOT NULL,
  `product_id` varchar(50) NOT NULL,
  `quantity` int NOT NULL,
  `price` decimal(10,2) NOT NULL,
  PRIMARY KEY (`order_id`,`product_id`),
  CONSTRAINT `order_item_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`),
  CONSTRAINT `order_item_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Inserimento dati mappati dai vecchi ID numerici [cite: 1] ai nuovi ID testuali 
INSERT INTO `order_item` VALUES 
(1,'art-wall-white',1,999.99),
(1,'hourglass-black',2,324.99),
(2,'large-candle-white',1,69.99),
(2,'small-candle-black',2,49.99),
(3,'floor-lamp-black',1,1119.99),
(3,'side-table-black',1,304.99),
(4,'large-vase-white',1,1129.99),
(4,'small-vase-black',1,544.99);
