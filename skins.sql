-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 15-Fev-2023 às 04:25
-- Versão do servidor: 10.1.38-MariaDB
-- versão do PHP: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `valorant`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `skins`
--

CREATE TABLE `skins` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(45) NOT NULL,
  `edition` varchar(45) NOT NULL,
  `collection` varchar(45) NOT NULL,
  `weapon` varchar(45) NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `skins`
--

INSERT INTO `skins` (`id`, `name`, `edition`, `collection`, `weapon`, `price`) VALUES
(1, 'Luxe Ghost', 'Select', 'Luxe', 'Ghost', 875),
(2, 'Luxe Spectre', 'Select', 'Luxe', 'Spectre', 875),
(3, 'Luxe Judge', 'Select', 'Luxe', 'Judge', 875),
(4, 'Luxe Vandal', 'Select', 'Luxe', 'Vandal', 875),
(5, 'Luxe Operator', 'Select', 'Luxe', 'Operator', 875),
(6, 'Luxe Knife', 'Select', 'Luxe', 'Knife', 1750),
(7, 'Aristocrat Sheriff', 'Deluxe', 'Aristocrat', 'Sheriff', 1275),
(8, 'Aristocrat Stinger', 'Deluxe', 'Aristocrat', 'Stinger', 1275),
(9, 'Aristocrat Bulldog', 'Deluxe', 'Aristocrat', 'Bulldog', 1275),
(10, 'Aristocrat Vandal', 'Deluxe', 'Aristocrat', 'Vandal', 1275),
(11, 'Aristocrat Ares', 'Deluxe', 'Aristocrat', 'Ares', 1275),
(12, 'Snowfall Classic', 'Deluxe', 'Snowfall', 'Classic', 1275),
(13, 'Celestial Frenzy', 'Premium', 'Celestial', 'Frenzy', 1775),
(14, 'Celestial Judge', 'Premium', 'Celestial', 'Judge', 1775),
(15, 'Celestial Phantom', 'Premium', 'Celestial', 'Phantom', 1775),
(16, 'Celestial Ares', 'Premium', 'Celestial', 'Ares', 1775),
(17, 'Celestial Fan', 'Premium', 'Celestial', 'Knife Fan', 3550),
(18, 'Origin Operator', 'Premium', 'Origin', 'Operator', 1775),
(19, 'Ruination Ghost', 'Exclusive', 'Ruination', 'Ghost', 2175),
(20, 'Ruination Spectre', 'Exclusive', 'Ruination', 'Spectre', 2175),
(21, 'Ruination Guardian', 'Exclusive', 'Ruination', 'Guardian', 2175),
(22, 'Ruination Phantom', 'Exclusive', 'Ruination', 'Phantom', 2175),
(23, 'SPECTRUM Bulldog', 'Exclusive', 'Spectrum', 'Bulldog', 2675),
(24, 'SPECTRUM Guardian', 'Exclusive', 'Spectrum', 'Guardian', 2675),
(25, 'Elderflame Frenzy', 'Ultra', 'Elderflame', 'Frenzy', 2475),
(26, 'Elderflame Judge', 'Ultra', 'Elderflame', 'Judge', 2475),
(27, 'Elderflame Vandal', 'Ultra', 'Elderflame', 'Vandal', 2475),
(28, 'Elderflame Operator', 'Ultra', 'Elderflame', 'Operator', 2475),
(29, 'Elderflame Dagger', 'Ultra', 'Elderflame', 'Knife Dagger', 4950),
(30, 'Protocol 781-A Sheriff', 'Ultra', 'Protocol 781-A', 'Sheriff', 2475);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `skins`
--
ALTER TABLE `skins`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `skins`
--
ALTER TABLE `skins`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
