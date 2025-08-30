CREATE DATABASE  IF NOT EXISTS `tm` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `tm`;
-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: localhost    Database: tm
-- ------------------------------------------------------
-- Server version	8.0.42

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
-- Table structure for table `categorie`
--

DROP TABLE IF EXISTS `categorie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorie` (
  `idCategorie` int UNSIGNED  NOT NULL AUTO_INCREMENT,
  `NomCategorie` varchar(45) NOT NULL,
  `ImagePhone` varchar(45) NOT NULL,
  `ImagePC` varchar(45) NOT NULL,
  PRIMARY KEY (`idCategorie`),
  UNIQUE KEY `idCategorie_UNIQUE` (`idCategorie`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorie`
--

LOCK TABLES `categorie` WRITE;
/*!40000 ALTER TABLE `categorie` DISABLE KEYS */;
INSERT INTO `categorie` VALUES (2,'Pâtisserie','https://tinyurl.com/4xsuwt64','https://tinyurl.com/yzwrnntn'),(3,'Cuisine','https://tinyurl.com/46frs7fb','https://tinyurl.com/categorie-cuisine'),(4,'Bijoux','https://tinyurl.com/yf82dbdy','https://tinyurl.com/categorie-bijoux'),(5,'Art & Collection','https://tinyurl.com/p3yshja6','https://tinyurl.com/categorie-art'),(6,'Couture','https://tinyurl.com/4eccnkvn','https://tinyurl.com/categorie-couture');
/*!40000 ALTER TABLE `categorie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favoris`
--

DROP TABLE IF EXISTS `favoris`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `favoris` (
  `idUser_favoris` int unsigned NOT NULL,
  `idProduit_favoris` int unsigned NOT NULL,
  UNIQUE KEY `unique_favoris` (`idUser_favoris`,`idProduit_favoris`),
  KEY `idProduit_idx` (`idProduit_favoris`) /*!80000 INVISIBLE */,
  CONSTRAINT `idProduit_favoris` FOREIGN KEY (`idProduit_favoris`) REFERENCES `produit` (`idProduit`),
  CONSTRAINT `idUser_favoris` FOREIGN KEY (`idUser_favoris`) REFERENCES `user` (`idUser`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favoris`
--

LOCK TABLES `favoris` WRITE;
/*!40000 ALTER TABLE `favoris` DISABLE KEYS */;
/*!40000 ALTER TABLE `favoris` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `followers`
--

DROP TABLE IF EXISTS `followers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `followers` (
  `idAbonnement` int unsigned NOT NULL,
  `idAbonné` int unsigned NOT NULL,
  KEY `idAbonnement_idx` (`idAbonnement`),
  KEY `idAbonné_idx` (`idAbonné`),
  CONSTRAINT `idAbonnement` FOREIGN KEY (`idAbonnement`) REFERENCES `user` (`idUser`),
  CONSTRAINT `idAbonné` FOREIGN KEY (`idAbonné`) REFERENCES `user` (`idUser`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `followers`
--

LOCK TABLES `followers` WRITE;
/*!40000 ALTER TABLE `followers` DISABLE KEYS */;
/*!40000 ALTER TABLE `followers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `historique des achats`
--

DROP TABLE IF EXISTS `historique des achats`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `historique des achats` (
  `idUser_historique_achats` int unsigned NOT NULL,
  `idProduit_historique_achats` int unsigned NOT NULL,
  `Date` date DEFAULT NULL,
  KEY `idUser_historique_achats_idx` (`idUser_historique_achats`),
  KEY `idProduit_historique_achats_idx` (`idProduit_historique_achats`),
  CONSTRAINT `idProduit_historique_achats` FOREIGN KEY (`idProduit_historique_achats`) REFERENCES `produit` (`idProduit`),
  CONSTRAINT `idUser_historique_achats` FOREIGN KEY (`idUser_historique_achats`) REFERENCES `user` (`idUser`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `historique des achats`
--

LOCK TABLES `historique des achats` WRITE;
/*!40000 ALTER TABLE `historique des achats` DISABLE KEYS */;
/*!40000 ALTER TABLE `historique des achats` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `panier`
--

DROP TABLE IF EXISTS `panier`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `panier` (
  `idUser_panier` int unsigned NOT NULL,
  `idProduit_panier` int unsigned NOT NULL,
  `Timer` time DEFAULT NULL,
  KEY `idUser_panier_idx` (`idUser_panier`),
  KEY `idProduit_panier_idx` (`idProduit_panier`),
  CONSTRAINT `idProduit_panier` FOREIGN KEY (`idProduit_panier`) REFERENCES `produit` (`idProduit`),
  CONSTRAINT `idUser_panier` FOREIGN KEY (`idUser_panier`) REFERENCES `user` (`idUser`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `panier`
--

LOCK TABLES `panier` WRITE;
/*!40000 ALTER TABLE `panier` DISABLE KEYS */;
/*!40000 ALTER TABLE `panier` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `photo produit`
--

DROP TABLE IF EXISTS `photo produit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `photo produit` (
  `idPhoto` int unsigned NOT NULL AUTO_INCREMENT,
  `idProduit_Photo` int unsigned NOT NULL,
  `Images` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idPhoto`),
  KEY `idProduit_Photo_idx` (`idProduit_Photo`),
  CONSTRAINT `idProduit_Photo` FOREIGN KEY (`idProduit_Photo`) REFERENCES `produit` (`idProduit`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `photo produit`
--

LOCK TABLES `photo produit` WRITE;
/*!40000 ALTER TABLE `photo produit` DISABLE KEYS */;
/*!40000 ALTER TABLE `photo produit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produit`
--

DROP TABLE IF EXISTS `produit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produit` (
  `idProduit` int unsigned NOT NULL AUTO_INCREMENT,
  `idUser_produit` int unsigned NOT NULL,
  `NomProduit` varchar(45) NOT NULL,
  `Prix` decimal(10,0) DEFAULT NULL,
  `Description` varchar(200) DEFAULT NULL,
  `Quantité` int NOT NULL,
  `idCatégorie_produit` int unsigned NOT NULL,
  PRIMARY KEY (`idProduit`),
  KEY `idUser_idx` (`idUser_produit`),
  KEY `idCatégorie_produit_idx` (`idCatégorie_produit`),
  CONSTRAINT `idCatégorie_produit` FOREIGN KEY (`idCatégorie_produit`) REFERENCES `catégorie` (`idCatégorie`),
  CONSTRAINT `idUser_produit` FOREIGN KEY (`idUser_produit`) REFERENCES `user` (`idUser`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produit`
--

LOCK TABLES `produit` WRITE;
/*!40000 ALTER TABLE `produit` DISABLE KEYS */;
/*!40000 ALTER TABLE `produit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sous-categorie`
--

DROP TABLE IF EXISTS `sous-categorie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sous-categorie` (
  `idSous-Categorie` int unsigned NOT NULL AUTO_INCREMENT,
  `NomSous-Categorie` varchar(45) NOT NULL,
  `idCategorie_Sous` int unsigned NOT NULL,
  PRIMARY KEY (`idSous-Categorie`),
  KEY `idCatégorie_Sous_idx` (`idCategorie_Sous`),
  CONSTRAINT `idCategorie_Sous` FOREIGN KEY (`idCategorie_Sous`) REFERENCES `categorie` (`idCategorie`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sous-categorie`
--

LOCK TABLES `sous-categorie` WRITE;
/*!40000 ALTER TABLE `sous-categorie` DISABLE KEYS */;
INSERT INTO `sous-categorie` VALUES (1,'Pâtisserie française',2),(2,'Pâtisserie américaine',2),(3,'Pâtisserie orientale',2),(4,'Pâtisserie pour anniversaire',2),(5,'Pâtisserie pour mariage',2),(6,'Pâtisserie saisonière',2),(7,'Pâtisserie végane',2),(8,'Pâtisserie gluten free',2),(9,'Cuisine française',3),(10,'Cuisine américaine',3),(11,'Cuisine orientale',3),(12,'Cuisine asiatique',3),(13,'Cuisine végétarienne',3),(14,'Cuisine végane',3),(15,'Cuisine gluten free',3),(16,'Collier',4),(17,'Bracelet',4),(18,'Bague',4),(19,'Boucles d\'oreille',4),(20,'Vêtements',6),(21,'Accessoires',6),(22,'Décoration',6),(23,'Couture pour enfants et bébés',6),(24,'Peinture',5),(25,'Dessin',5),(26,'Sculpture',5),(27,'Photographie artistique',5),(28,'Restauration d\'oeuvres et d\'objets anciens',5);
/*!40000 ALTER TABLE `sous-categorie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transaction`
--

DROP TABLE IF EXISTS `transaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transaction` (
  `idAcheteur` int unsigned NOT NULL,
  `idVendeur` int unsigned NOT NULL,
  `idProduit_transaction` int unsigned NOT NULL,
  `Prix` decimal(10,0) DEFAULT NULL,
  `Date` date DEFAULT NULL,
  `Statut` varchar(45) DEFAULT NULL,
  KEY `idAcheteur_idx` (`idAcheteur`),
  KEY `idVendeur_idx` (`idVendeur`),
  KEY `idProduit_transaction_idx` (`idProduit_transaction`),
  CONSTRAINT `idAcheteur` FOREIGN KEY (`idAcheteur`) REFERENCES `user` (`idUser`),
  CONSTRAINT `idProduit_transaction` FOREIGN KEY (`idProduit_transaction`) REFERENCES `produit` (`idProduit`),
  CONSTRAINT `idVendeur` FOREIGN KEY (`idVendeur`) REFERENCES `user` (`idUser`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transaction`
--

LOCK TABLES `transaction` WRITE;
/*!40000 ALTER TABLE `transaction` DISABLE KEYS */;
/*!40000 ALTER TABLE `transaction` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `idUser` int unsigned NOT NULL AUTO_INCREMENT,
  `Nom` varchar(45) NOT NULL,
  `Prénom` varchar(45) NOT NULL,
  `Email` varchar(45) NOT NULL,
  `Adresse` varchar(100) DEFAULT NULL,
  `Mot de passe` varchar(100) NOT NULL,
  `Photo de profil` varchar(45) DEFAULT NULL,
  `Description` varchar(200) DEFAULT NULL,
  `Role` varchar(45) DEFAULT NULL,
  `Nombre d'etoile` int DEFAULT NULL,
  `Langue` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idUser`),
  UNIQUE KEY `Email_UNIQUE` (`Email`),
  UNIQUE KEY `iduser_UNIQUE` (`idUser`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Smith','Anna','anna.smith@gmail.com','Rue étraz 8 1000 Lausanne','cannelle1421!','https://tinyurl.com/2u4fh479','Passionée de pâtisserie, spécialisée dans les macarons','achteur/vendeur',4,'Français'),(2,'Petit','Charles','charles@petit.info','Grand-Rue 48 1180 Rolle','Lila1214!!!','https://tinyurl.com/58jhr53h','mon passe temps est de faire la collection d\'objets anciens et de les resstaurer','achteur/vendeur',3,'Français'),(3,'Gonzales','Clara','clara12.gonzales@gmail.com','Ch. des Joncs 21 1185 Mont-sur-Rolle','Monpetitamour4ever!','https://tinyurl.com/242kz6j9','J\'adore découvrir de nouvelles choses, donc je suis sur cette platforme pour me faire surprendre','achteur',4,'Français');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-08-27 22:31:06
