-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 05, 2023 at 11:09 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `am:pm`
--
CREATE DATABASE IF NOT EXISTS `am:pm` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `am:pm`;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `categoryId` int(11) NOT NULL,
  `categoryName` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`categoryId`, `categoryName`) VALUES
(1, 'pastry'),
(2, 'snacks'),
(3, 'milkProducts'),
(4, 'vegetables'),
(5, 'sweets'),
(6, 'beverages');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `productId` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `dateTime` datetime NOT NULL,
  `expirationDateTime` datetime NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `categoryId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`productId`, `name`, `dateTime`, `expirationDateTime`, `price`, `categoryId`) VALUES
(1, 'candies', '2023-04-27 19:25:03', '2023-04-27 19:25:03', '8', 5),
(2, 'muffins', '2023-04-27 19:25:03', '2023-04-27 19:25:03', '23', 1),
(3, 'peaches', '2023-04-27 19:25:03', '2023-04-27 19:25:03', '10', 4),
(4, 'potato chips', '2023-04-27 19:25:03', '2023-04-27 19:25:03', '12', 2),
(5, 'yoghurt', '2023-04-27 19:27:23', '2023-04-27 19:27:23', '3', 3),
(8, 'butter bier', '2023-04-27 19:25:04', '0000-00-00 00:00:00', '18', 6),
(9, 'soda', '2023-04-21 00:00:00', '2023-04-15 00:00:00', '8', 6),
(10, 'Bissli', '2023-04-15 00:00:00', '2023-04-08 00:00:00', '8', 2),
(11, 'Bamba', '2023-04-14 00:00:00', '2023-04-14 00:00:00', '17', 2),
(12, 'Twizzles', '2023-04-30 00:00:00', '2023-04-30 00:00:00', '15', 5),
(13, 'Butter', '2023-04-29 00:00:00', '2023-05-23 00:00:00', '8', 3),
(14, 'Binyomin', '2023-06-14 18:02:00', '2023-06-20 18:02:00', '147', 3),
(15, 'Meine Schwester Klara 2', '2023-06-02 23:50:00', '2023-06-29 23:50:00', '23', 1),
(16, 'Binyomin', '2023-06-06 23:51:00', '2023-06-27 23:51:00', '17', 6),
(17, 'Meine Schwester Klara 2', '2023-06-05 00:01:00', '2023-06-19 00:01:00', '17', 2),
(18, 'Remembering R\' Shlomo', '2023-06-05 00:02:00', '2023-06-26 00:02:00', '147', 3),
(19, 'NIV', '2023-06-05 00:02:00', '2023-06-26 00:02:00', '23', 2),
(20, 'Zucker', '2023-06-04 00:03:00', '2023-06-28 00:03:00', '23', 5);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`categoryId`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`productId`),
  ADD KEY `categoryId` (`categoryId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `categoryId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `productId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`categoryId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
