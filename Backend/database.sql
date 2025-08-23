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
-- Table structure for table `catégorie`
--

DROP TABLE IF EXISTS `catégorie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `catégorie` (
  `idCatégorie` int unsigned NOT NULL AUTO_INCREMENT,
  `NomCatégorie` varchar(45) NOT NULL,
  `Image` varchar(45) NOT NULL,
  PRIMARY KEY (`idCatégorie`),
  UNIQUE KEY `idCatégorie_UNIQUE` (`idCatégorie`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `catégorie`
--

LOCK TABLES `catégorie` WRITE;
/*!40000 ALTER TABLE `catégorie` DISABLE KEYS */;
INSERT INTO `catégorie` VALUES (2,'Pâtisserie','https://tinyurl.com/yzwrnntn'),(3,'Cuisine','https://tinyurl.com/categorie-cuisine'),(4,'Bijoux','https://tinyurl.com/categorie-bijoux'),(5,'Art & Collection','https://tinyurl.com/categorie-art'),(6,'Couture','https://tinyurl.com/categorie-couture');
/*!40000 ALTER TABLE `catégorie` ENABLE KEYS */;
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
  UNIQUE KEY `idUser_favoris_UNIQUE` (`idUser_favoris`),
  UNIQUE KEY `idProduit_favoris_UNIQUE` (`idProduit_favoris`),
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
-- Table structure for table `sous-catégorie`
--

DROP TABLE IF EXISTS `sous-catégorie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sous-catégorie` (
  `idSous-Catégorie` int unsigned NOT NULL AUTO_INCREMENT,
  `NomSous-Catégorie` varchar(45) NOT NULL,
  `Image` varchar(45) DEFAULT NULL,
  `idCatégorie_Sous` int unsigned NOT NULL,
  PRIMARY KEY (`idSous-Catégorie`),
  KEY `idCatégorie_Sous_idx` (`idCatégorie_Sous`),
  CONSTRAINT `idCatégorie_Sous` FOREIGN KEY (`idCatégorie_Sous`) REFERENCES `catégorie` (`idCatégorie`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sous-catégorie`
--

LOCK TABLES `sous-catégorie` WRITE;
/*!40000 ALTER TABLE `sous-catégorie` DISABLE KEYS */;
/*!40000 ALTER TABLE `sous-catégorie` ENABLE KEYS */;
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
  `Rôle` varchar(45) DEFAULT NULL,
  `Nombre d'étoile` int DEFAULT NULL,
  `Langue` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idUser`),
  UNIQUE KEY `Email_UNIQUE` (`Email`),
  UNIQUE KEY `iduser_UNIQUE` (`idUser`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Smith','Anna','anna.smith@gmail.com','Ch. des oiseaux 23 1000 Lausanne','cannelle1421!','https://tinyurl.com/2u4fh479','Passionée de pâtisserie, spécialisée dans les macarons','achteur/vendeur',4,'Français');
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

-- Dump completed on 2025-08-22 16:48:19
