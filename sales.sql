-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 27, 2022 at 09:43 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sales`
--

-- --------------------------------------------------------

--
-- Table structure for table `cargo`
--

CREATE TABLE `cargo` (
  `CAR_ID` int(8) NOT NULL,
  `CAR_CARGO` varchar(50) COLLATE utf8_spanish2_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Dumping data for table `cargo`
--

INSERT INTO `cargo` (`CAR_ID`, `CAR_CARGO`) VALUES
(1, 'ADMIN'),
(3, 'Mercadeo'),
(4, 'Ventas');

-- --------------------------------------------------------

--
-- Table structure for table `ciudad`
--

CREATE TABLE `ciudad` (
  `CIU_ID` int(8) NOT NULL,
  `CIU_CIUDAD` varchar(25) COLLATE utf8_spanish2_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Dumping data for table `ciudad`
--

INSERT INTO `ciudad` (`CIU_ID`, `CIU_CIUDAD`) VALUES
(1, 'Bogotá'),
(2, 'Cali');

-- --------------------------------------------------------

--
-- Table structure for table `clase_contacto`
--

CREATE TABLE `clase_contacto` (
  `CLA_ID` int(8) NOT NULL,
  `CLA_CLASE` varchar(20) COLLATE utf8_spanish2_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Dumping data for table `clase_contacto`
--

INSERT INTO `clase_contacto` (`CLA_ID`, `CLA_CLASE`) VALUES
(1, 'Web'),
(2, 'Telefono');

-- --------------------------------------------------------

--
-- Table structure for table `cliente`
--

CREATE TABLE `cliente` (
  `CLI_ID` int(8) NOT NULL,
  `CLI_SAP` int(8) DEFAULT NULL,
  `CLI_NOMBRE` varchar(70) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `CLI_NIT` int(9) DEFAULT NULL,
  `CLI_CIUDAD` int(8) DEFAULT NULL,
  `CLI_ZONA` int(8) DEFAULT NULL,
  `CLI_TIPO` int(8) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Dumping data for table `cliente`
--

INSERT INTO `cliente` (`CLI_ID`, `CLI_SAP`, `CLI_NOMBRE`, `CLI_NIT`, `CLI_CIUDAD`, `CLI_ZONA`, `CLI_TIPO`) VALUES
(1, 132, 'Antonio Echeverry Gomez Garcia', 987654321, 1, NULL, NULL),
(2, 321, 'Ferney Hernando Cortez García', 123456789, 2, NULL, NULL),
(3, 457, 'José Darío Herrera', 715442, 1, 2, 1),
(4, 415, 'Jessica Gómez Patiño', 5458554, 2, 2, 2);

-- --------------------------------------------------------

--
-- Table structure for table `empleado`
--

CREATE TABLE `empleado` (
  `EMP_ID` int(10) NOT NULL,
  `EMP_CARGO` int(8) DEFAULT NULL,
  `EMP_CEDULA` int(13) DEFAULT NULL,
  `EMP_NOMBRE` varchar(25) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `EMP_APELLIDO` varchar(25) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `EMP_CORREO` varchar(50) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `EMP_CLAVE` varchar(20) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `EMP_CELULAR` int(11) DEFAULT NULL,
  `EMP_ACTIVO` tinyint(1) DEFAULT NULL,
  `EMP_CENTRO_DE_COSTE` int(10) DEFAULT NULL,
  `EMP_COD_SAP` int(8) DEFAULT NULL,
  `EMP_EQUIPO` int(8) DEFAULT NULL,
  `EMP_LIDER` tinyint(1) NOT NULL DEFAULT 0,
  `EMP_ZONA` int(8) DEFAULT NULL,
  `EMP_CIUDAD` int(8) DEFAULT NULL,
  `EMP_FOTO` blob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Dumping data for table `empleado`
--

INSERT INTO `empleado` (`EMP_ID`, `EMP_CARGO`, `EMP_CEDULA`, `EMP_NOMBRE`, `EMP_APELLIDO`, `EMP_CORREO`, `EMP_CLAVE`, `EMP_CELULAR`, `EMP_ACTIVO`, `EMP_CENTRO_DE_COSTE`, `EMP_COD_SAP`, `EMP_EQUIPO`, `EMP_LIDER`, `EMP_ZONA`, `EMP_CIUDAD`, `EMP_FOTO`) VALUES
(1, 1, 1000810187, 'Miguel Angel', 'Herrera Rodriguez', NULL, 'clave', 0, 1, NULL, NULL, 1, 1, 1, 1, ''),
(2, 4, 1, 'Esmeralda', 'Kenji ', 'esmeralda@cga.com', 'clave1', 311225544, 1, 416, 678, 2, 1, 2, 1, ''),
(3, 4, 2, 'Camila', 'Vanegas', 'camila@cga.com', 'clave2', 311465789, 1, 525, 214, 2, 0, 1, 2, ''),
(4, 4, 3, 'Ernesto', 'Gomez', 'ernesto@cga.com', 'clave3', 311456789, 1, 416, 679, 3, 0, 1, 2, ''),
(5, 4, 4, 'Jonier Alveiro', 'Torres Prada', 'jonier@cga.com', 'clave4', 321452145, 1, 416, 680, 3, 1, 1, 1, ''),
(6, 4, 79368043, 'Fabio', 'Rodríguez', 'fabio@cga.com.co', 'clave', 314411201, 1, 416, 681, 2, 0, 2, 1, '');

-- --------------------------------------------------------

--
-- Table structure for table `equipo`
--

CREATE TABLE `equipo` (
  `EQU_ID` int(8) NOT NULL,
  `EQU_EQUIPO` varchar(60) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `EQU_LIDER` int(8) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Dumping data for table `equipo`
--

INSERT INTO `equipo` (`EQU_ID`, `EQU_EQUIPO`, `EQU_LIDER`) VALUES
(1, 'ADMINS', 1),
(2, 'BETA', 2),
(3, 'OMEGA', 5),
(4, 'GAMMA', 2);

-- --------------------------------------------------------

--
-- Table structure for table `lider`
--

CREATE TABLE `lider` (
  `LID_ID` int(8) NOT NULL,
  `LID_LIDER` int(8) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Table structure for table `motivo_contacto`
--

CREATE TABLE `motivo_contacto` (
  `MOT_ID` int(8) NOT NULL,
  `MOT_MOTIVO` varchar(80) COLLATE utf8_spanish2_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Dumping data for table `motivo_contacto`
--

INSERT INTO `motivo_contacto` (`MOT_ID`, `MOT_MOTIVO`) VALUES
(1, 'Reunion'),
(2, 'Asesoram'),
(3, 'Reunión'),
(4, 'Asesoramiento '),
(5, 'Contrato'),
(6, 'Planos');

-- --------------------------------------------------------

--
-- Table structure for table `real_visita`
--

CREATE TABLE `real_visita` (
  `REA_ID` int(8) NOT NULL,
  `REA_VIS` int(8) NOT NULL,
  `REA_DIRECTA` tinyint(1) DEFAULT NULL,
  `REA_FECHA` date NOT NULL,
  `REA_HORA` time NOT NULL,
  `REA_RESULTADO` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Dumping data for table `real_visita`
--

INSERT INTO `real_visita` (`REA_ID`, `REA_VIS`, `REA_DIRECTA`, `REA_FECHA`, `REA_HORA`, `REA_RESULTADO`) VALUES
(5, 46, 1, '2022-11-17', '04:49:00', 1),
(6, 48, 1, '2022-11-17', '05:05:00', 0),
(7, 54, 0, '2022-11-18', '05:03:00', 1),
(8, 55, 0, '2022-11-18', '05:04:00', 1),
(9, 20, 0, '2022-11-18', '05:20:00', 1),
(10, 1, 0, '2022-11-18', '07:04:00', 0),
(11, 49, 0, '2022-11-18', '08:03:00', 1),
(12, 17, 0, '2022-11-18', '08:03:00', 1),
(13, 11, 0, '2022-11-18', '08:03:00', 1),
(14, 37, 0, '2022-11-18', '09:10:00', 1),
(15, 57, 1, '2022-11-21', '03:12:00', 1),
(16, 58, 0, '2022-11-21', '03:13:00', 1),
(17, 59, 0, '2022-11-21', '04:48:00', 1),
(18, 61, 0, '2022-11-21', '04:49:00', 1),
(19, 62, 1, '2022-11-21', '04:55:00', 1),
(20, 63, 1, '2022-11-23', '02:01:00', 1),
(21, 65, 0, '2022-11-23', '02:06:00', 1),
(23, 69, 1, '2022-11-23', '02:13:00', 1),
(24, 70, 1, '2022-11-23', '02:13:00', 0),
(25, 71, 1, '2022-11-23', '02:22:00', 0),
(26, 72, 1, '2022-11-23', '03:44:00', 1),
(27, 74, 1, '2022-11-24', '08:23:00', 1),
(28, 73, 0, '2022-11-24', '08:42:00', 1),
(29, 75, 0, '2022-11-24', '09:30:00', 1),
(30, 76, 1, '2022-11-24', '09:31:00', 1),
(31, 78, 1, '2022-11-24', '03:13:00', 0),
(33, 80, 1, '2022-11-25', '09:20:00', 0),
(34, 81, 1, '2022-11-25', '09:20:00', 0),
(35, 85, 0, '2022-11-25', '03:58:00', 0),
(36, 84, 0, '2022-11-25', '03:58:00', 0),
(37, 83, 0, '2022-11-25', '03:58:00', 0),
(38, 88, 0, '2022-11-28', '08:16:00', 1),
(39, 82, 0, '2022-11-28', '09:06:00', 0),
(40, 56, 0, '2022-11-28', '09:06:00', 0),
(41, 10, 0, '2022-11-28', '09:06:00', 0),
(42, 9, 0, '2022-11-28', '09:06:00', 0),
(43, 8, 0, '2022-11-28', '09:06:00', 0),
(44, 7, 0, '2022-11-28', '09:06:00', 0),
(45, 6, 0, '2022-11-28', '09:06:00', 0),
(46, 5, 0, '2022-11-28', '11:27:00', 0),
(47, 3, 0, '2022-11-29', '11:43:00', 0),
(48, 2, 0, '2022-11-29', '11:43:00', 0),
(49, 4, 0, '2022-12-01', '10:29:00', 0),
(50, 60, 0, '2022-12-07', '11:58:00', 0),
(51, 77, 0, '2022-12-14', '10:55:00', 0),
(52, 86, 0, '2022-12-14', '11:14:00', 0),
(53, 67, 0, '2022-12-19', '11:38:00', 0),
(54, 71, 1, '2022-12-19', '11:40:00', 0),
(55, 66, 0, '2022-12-19', '11:42:00', 0),
(56, 68, 0, '2022-12-20', '09:30:00', 0),
(57, 87, 0, '2022-12-20', '09:32:00', 0),
(58, 90, 1, '2022-12-20', '09:34:00', 1),
(59, 91, 1, '2022-12-20', '02:27:00', 0),
(60, 92, 1, '2022-12-20', '02:59:00', 0),
(61, 93, 1, '2022-12-20', '04:55:00', 0),
(62, 94, 1, '2022-12-21', '08:41:00', 0),
(63, 96, 0, '2022-12-22', '09:02:00', 1),
(64, 96, 1, '2022-12-22', '09:04:00', 0),
(65, 99, 1, '2022-12-26', '04:50:00', 0),
(66, 98, 0, '2022-12-26', '04:52:00', 1),
(67, 100, 1, '2022-12-27', '02:18:00', 0),
(68, 100, 1, '2022-12-27', '02:26:00', 0),
(69, 102, 1, '2022-12-27', '02:29:00', 0),
(70, 102, 1, '2022-12-27', '02:30:00', 0),
(71, 104, 1, '2022-12-27', '02:30:00', 0),
(72, 105, 0, '2022-12-27', '02:56:00', 0);

-- --------------------------------------------------------

--
-- Table structure for table `resultado`
--

CREATE TABLE `resultado` (
  `RES_ID` int(8) NOT NULL,
  `RES_RESULTADO` varchar(80) COLLATE utf8_spanish2_ci NOT NULL,
  `RES_TIPO` int(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Dumping data for table `resultado`
--

INSERT INTO `resultado` (`RES_ID`, `RES_RESULTADO`, `RES_TIPO`) VALUES
(1, 'Se logró Contrato', 1),
(2, 'NO se logró Contrato', 3),
(3, 'Se logró un pedido', 1),
(4, 'No se logró un pedido', 3),
(5, 'Se consiguió cliente recurrente', 1),
(6, 'Se perdió cliente recurrente', 2),
(7, 'Se hizo cotización', 1),
(8, 'OTRO', 3);

-- --------------------------------------------------------

--
-- Table structure for table `resultado_razon`
--

CREATE TABLE `resultado_razon` (
  `RES_RAZ_ID` int(8) NOT NULL,
  `RES_RAZON` varchar(80) COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Dumping data for table `resultado_razon`
--

INSERT INTO `resultado_razon` (`RES_RAZ_ID`, `RES_RAZON`) VALUES
(1, 'Precio '),
(2, 'Mi habilidad'),
(3, 'Planificación'),
(4, 'Fecha de entrega'),
(5, 'Infraestructura'),
(6, 'Cliente recurrente'),
(7, 'Logística'),
(8, 'OTRO');

-- --------------------------------------------------------

--
-- Table structure for table `resultado_tipo`
--

CREATE TABLE `resultado_tipo` (
  `RES_TIP_ID` int(8) NOT NULL,
  `RES_TIP_TIPO` varchar(80) COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Dumping data for table `resultado_tipo`
--

INSERT INTO `resultado_tipo` (`RES_TIP_ID`, `RES_TIP_TIPO`) VALUES
(1, 'Producente'),
(2, 'Contraproducente'),
(3, 'Neutral');

-- --------------------------------------------------------

--
-- Table structure for table `seguimiento`
--

CREATE TABLE `seguimiento` (
  `SEG_ID` int(8) NOT NULL,
  `SEG_VISITA` int(8) NOT NULL,
  `SEG_RESULTADO` int(8) DEFAULT NULL,
  `SEG_RESULTADO_OTRO` varchar(180) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `SEG_RAZON` int(8) DEFAULT NULL,
  `SEG_RAZON_OTRO` varchar(180) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `SEG_OBSERVACION` varchar(280) COLLATE utf8_spanish2_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Dumping data for table `seguimiento`
--

INSERT INTO `seguimiento` (`SEG_ID`, `SEG_VISITA`, `SEG_RESULTADO`, `SEG_RESULTADO_OTRO`, `SEG_RAZON`, `SEG_RAZON_OTRO`, `SEG_OBSERVACION`) VALUES
(1, 37, 2, 'TextEditingController#49b15(TextEditingValue(text: ┤├, selection: TextSelection.', 2, 'TextEditingController#89ea8(TextEditingValue(text: ┤├, selection: TextSelection.', 'TextEditingController#bb9ea(TextEditingValue(text: ┤├, selection: TextSelection.'),
(3, 20, 1, 'TextEditingController#c0d38(TextEditingValue(text: ┤xd├, selection: TextSelectio', 3, 'TextEditingController#72a7d(TextEditingValue(text: ┤xf├, selection: TextSelectio', 'TextEditingController#49888(TextEditingValue(text: ┤├, selection: TextSelection.'),
(4, 11, 6, 'bla blalal', 4, 'Blu blubli', ''),
(6, 17, 3, 'dsin selec', 3, 'sin otra aelec', 'texto observación final '),
(7, 46, 8, 'sin resultado list', 8, 'son razón list', 'sss ssss s ss s SS SS s sss s s s ss s s s s s. s s s ss s s s s s s s s s ss s '),
(8, 37, 4, '', 4, '', ''),
(9, 49, 3, '', 5, '', ''),
(10, 63, 7, '', 6, '', ''),
(11, 54, 4, '', 4, '', ''),
(12, 55, 3, '', 6, '', ''),
(13, 65, 7, '', 3, '', 'jshs shshjss ahshaj alakd fhdus a db'),
(14, 69, 6, '', 4, '', ''),
(15, 69, 6, '', 5, '', ''),
(16, 63, 5, '', 4, '', ''),
(17, 58, 5, '', 4, '', ''),
(18, 61, 3, '', 6, '', ''),
(19, 57, 4, '', 2, '', ''),
(20, 59, 5, '', 4, '', ''),
(21, 62, 5, '', 3, '', ''),
(22, 72, 2, '', 4, '', 'fcecrv tvrvtkykiooppp popó p opo popó popo popo opo oooo'),
(23, 74, 8, '', 4, '', ''),
(24, 75, 1, '', 3, '', 'Se hicieron los planos y se cerró el trato'),
(25, 76, 8, 'No sé llegó a nada pero hay otra reunión pendiente ', 8, 'porque algunos de los ofertantes no asistieron ', 'que falta de compromiso, no obstante asistiré a la siguiente reunión para intent'),
(26, 73, 8, 'No fué posible mantener el diálogo con todo el ruido que había en esa empresa, así que me fuí ', 8, 'mucho ruido ', 'sé que no debí hacer echo eso, pero me estaba quedando sordo '),
(27, 88, 5, '', 4, '', ''),
(28, 90, 4, '', 5, '', ''),
(29, 90, 3, '', 5, '', ''),
(30, 96, 3, '', 4, '', ''),
(31, 98, 7, '', 5, '', '');

-- --------------------------------------------------------

--
-- Table structure for table `tipos_cliente`
--

CREATE TABLE `tipos_cliente` (
  `TIP_ID` int(8) NOT NULL,
  `TIP_TIPO` char(1) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `TIP_DETALLE` varchar(60) COLLATE utf8_spanish2_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Dumping data for table `tipos_cliente`
--

INSERT INTO `tipos_cliente` (`TIP_ID`, `TIP_TIPO`, `TIP_DETALLE`) VALUES
(1, 'A', 'Este tipo hace referencia a.....'),
(2, 'B', 'Este tipo hace referencia a.....');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(8) NOT NULL,
  `user_nombre` varchar(60) COLLATE utf8_spanish2_ci NOT NULL,
  `user_correo` varchar(60) COLLATE utf8_spanish2_ci NOT NULL,
  `user_clave` varchar(20) COLLATE utf8_spanish2_ci NOT NULL,
  `user_cargo` varchar(60) COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `user_nombre`, `user_correo`, `user_clave`, `user_cargo`) VALUES
(24, 'Empleado uno', 'cga@gmail.com', 'c11111', 'Lider Comercial'),
(25, 'Empleado dos', 'cga@gmail.com', 'c22222', 'Lider Comercial'),
(26, 'Empleado tres', 'cga@gmail.com', 'c33333', 'Lider Comercial'),
(27, 'Empleado cuatro', 'cga@gmail.com', 'c44444', 'Lider Comercial'),
(28, 'Empleado cinco', 'cga@gmail.com', 'c55555', 'Lider Comercial'),
(29, 'Empleado seis', 'cga@gmail.com', 'c66666', 'Comercial'),
(30, 'Empleado siete', 'cga@gmail.com', 'c77777', 'Comercial'),
(31, 'Empleado ocho', 'cga@gmail.com', 'c88888', 'Comercial'),
(32, 'Empleado nueve', 'cga@gmail.com', 'c99999', 'Comercial'),
(33, 'pruena de error', '', '', 'pruena de error'),
(34, 'Empleado nueve', 'cga@gmail.com', 'c99999', 'Comercial'),
(35, 'Empleado nueve', 'cga@gmail.com', 'c99999', 'Comercial');

-- --------------------------------------------------------

--
-- Table structure for table `visita`
--

CREATE TABLE `visita` (
  `VIS_ID` int(8) NOT NULL,
  `VIS_ESPECIALISTA` int(8) NOT NULL,
  `VIS_CLIENTE` int(8) NOT NULL,
  `VIS_CLASE_CONTACTO` int(8) DEFAULT NULL,
  `VIS_MOTIVO_CONTACTO` int(8) NOT NULL,
  `VIS_FECHA_CREACION` date NOT NULL DEFAULT current_timestamp(),
  `VIS_FECHA` date DEFAULT NULL,
  `VIS_HORA_INICIO` time DEFAULT NULL,
  `VIS_HORA_FIN` time DEFAULT NULL,
  `VIS_OBSERVACION` varchar(120) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `VIS_REAL` tinyint(1) DEFAULT 0,
  `VIS_CANCELADO` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Dumping data for table `visita`
--

INSERT INTO `visita` (`VIS_ID`, `VIS_ESPECIALISTA`, `VIS_CLIENTE`, `VIS_CLASE_CONTACTO`, `VIS_MOTIVO_CONTACTO`, `VIS_FECHA_CREACION`, `VIS_FECHA`, `VIS_HORA_INICIO`, `VIS_HORA_FIN`, `VIS_OBSERVACION`, `VIS_REAL`, `VIS_CANCELADO`) VALUES
(1, 2, 2, 2, 2, '2022-12-27', '2022-11-16', '23:24:02', '24:24:02', 'xxxxxxxxxxxxx xxxxxx xxxxxxxxx xxxxxxxxxxx xxxxxx  xxxxxxxx x xxxxx xxxxxxxxx xxxxxxx xxxxxxxxxxxxxx xxxx xxxxx xxx x xx', 1, 0),
(2, 2, 2, 2, 2, '2022-12-27', '2022-11-25', '13:25:45', '13:33:45', 'hola', 1, 0),
(3, 2, 2, NULL, 2, '2022-12-27', '2022-11-25', '13:25:45', '13:33:45', 'hola', 1, 0),
(4, 2, 2, NULL, 2, '2022-12-27', '2022-11-30', '00:00:00', '00:00:00', '', 1, 0),
(5, 2, 2, NULL, 2, '2022-12-27', '2022-12-01', '08:44:00', '00:00:00', '', 1, 0),
(6, 2, 2, NULL, 2, '2022-12-27', '2022-11-24', '08:56:00', '08:56:00', '', 1, 0),
(7, 2, 2, NULL, 2, '2022-12-27', '2022-11-15', '08:57:00', '08:57:00', '', 1, 0),
(8, 2, 2, NULL, 2, '2022-12-27', '2022-11-15', '09:05:00', '09:05:00', '', 1, 0),
(9, 2, 2, NULL, 2, '2022-12-27', '2022-11-23', '09:07:00', '09:07:00', '', 1, 0),
(10, 2, 2, NULL, 2, '2022-12-27', '2022-11-25', '13:25:45', '13:33:45', 'hola', 1, 0),
(11, 2, 2, NULL, 4, '2022-12-27', '2022-12-07', '04:41:00', '04:41:00', 'zzz zzz zz zz zz z zzz zzz zzzz  zzzzz zzzz z zzz zz zzz z zzzz z zzzzzzz zzzzz zzz z zzz z zzzz zz zz z', 1, 0),
(17, 2, 2, NULL, 2, '2022-12-27', '2022-11-25', '13:25:45', '13:33:45', 'hola', 1, 0),
(18, 1, 1, NULL, 3, '2022-12-27', '2022-11-25', '13:25:45', '13:33:45', 'hola', 0, 0),
(20, 2, 1, NULL, 3, '2022-12-27', '2022-11-16', '08:49:00', '08:49:00', 'ooooooo oooooo oooo oooo oooo ooooooooooo ooooooo ooooo', 1, 0),
(37, 2, 1, NULL, 2, '2022-12-27', '2022-11-30', '04:20:00', '04:20:00', 'tales', 1, 0),
(38, 1, 1, NULL, 3, '2022-12-27', '2022-11-25', '13:25:45', '13:33:45', 'hola', 0, 0),
(42, 2, 1, NULL, 2, '2022-12-27', NULL, NULL, NULL, 'Hello', 1, 0),
(43, 2, 2, NULL, 4, '2022-12-27', NULL, NULL, NULL, 'pls ', 1, 0),
(44, 2, 2, NULL, 2, '2022-12-27', NULL, NULL, NULL, 'wea cliha', 1, 0),
(46, 2, 2, NULL, 2, '2022-12-27', NULL, NULL, NULL, 'Marge el junio perdi', 1, 0),
(47, 2, 2, NULL, 4, '2022-12-27', NULL, NULL, NULL, 'get function works?', 1, 0),
(48, 2, 2, NULL, 2, '2022-12-27', NULL, NULL, NULL, 'Soy estupido', 1, 0),
(49, 2, 2, NULL, 3, '2022-12-27', '2022-11-24', '09:32:00', '09:32:00', 'Ultim regidtro dl dia Jueve ', 1, 0),
(50, 3, 1, NULL, 3, '2022-12-27', '2022-11-19', '03:19:00', '03:19:00', 'Fris primer uno, one primeito  ppp pp pppppppppppp ppppppppppp pppppppp p ppppppppppppppppppppppppppp pp p p p  p p p p ', 1, 0),
(51, 3, 2, NULL, 4, '2022-12-27', '2022-11-18', '03:23:00', '03:23:00', 'second segudo ssssssssssssssssss sssssssssss sssss ssssssss ssssssss sssssssss sss ss ssssssssss sssssssssssss sss', 1, 0),
(52, 3, 2, NULL, 1, '2022-12-27', '2022-11-30', '05:00:00', '05:00:00', '               ', 1, 0),
(54, 3, 1, NULL, 2, '2022-12-27', '2022-11-15', '05:02:00', '05:02:00', 'jijijaja', 1, 0),
(55, 3, 2, NULL, 2, '2022-12-27', '2022-11-29', '05:03:00', '05:03:00', 'lol', 1, 0),
(56, 2, 1, NULL, 2, '2022-12-27', '2022-11-25', '08:02:00', '08:02:00', '', 1, 0),
(57, 4, 2, NULL, 2, '2022-12-27', NULL, NULL, NULL, 'xxxxx xx  xxx ', 1, 0),
(58, 4, 1, NULL, 2, '2022-12-27', '2022-11-17', '03:12:00', '03:12:00', '', 1, 0),
(59, 4, 2, NULL, 3, '2022-12-27', '2022-11-30', '05:12:00', '05:12:00', 'gg ggg gggg gg gg g g g gg gg g ggggg g gg g', 1, 0),
(60, 2, 2, NULL, 3, '2022-12-27', '2022-11-30', '06:41:00', '07:41:00', 'lll lll lll l l llll llll llllll lll lllll llll lll lllll llllll lllll l lll lllllll ll llll lllllll ll lllll llll llll ', 1, 0),
(61, 4, 1, NULL, 4, '2022-12-27', '2022-11-30', '04:48:00', '04:48:00', 'h.  h h. y hh hh h y h h. h', 1, 0),
(62, 4, 2, NULL, 4, '2022-12-27', NULL, NULL, NULL, 'blablabla te lo que te dije que no te lo que te dije ', 1, 0),
(63, 3, 2, NULL, 4, '2022-12-27', '2022-11-30', '01:29:00', '01:29:00', 'h h h a s e s s a w f f s a e f s a e. desde d antes de en dos dos si tas fue w ah te s gg', 1, 0),
(64, 3, 2, NULL, 4, '2022-12-27', NULL, NULL, NULL, 'lalalalalal lalalall lalal lalall lalal lal', 1, 0),
(65, 3, 2, NULL, 3, '2022-12-27', '2022-11-23', '02:05:00', '02:05:00', '', 1, 0),
(66, 3, 1, NULL, 2, '2022-12-27', '2022-11-23', '02:06:00', '02:06:00', 'has shajsj r si shh f he ah va ah he ahhh sin shh shh shh it\'s si he ahhh nah y he ahhh he', 1, 0),
(67, 3, 2, NULL, 2, '2022-12-27', '2022-11-30', '02:07:00', '02:07:00', 'ya se ah ir al ví ir si he ahhh he ahhh he ahhh', 1, 0),
(68, 3, 1, NULL, 2, '2022-12-27', '2022-11-29', '02:08:00', '02:08:00', 'jejejeje fjdjd sjsjsjs djsjs djjdjd. djd', 1, 0),
(69, 3, 1, NULL, 2, '2022-12-27', NULL, NULL, NULL, 'ya hshs hshs hshshshs jsjs jdb', 1, 0),
(70, 3, 2, NULL, 3, '2022-12-27', NULL, NULL, NULL, 'jaja wjwj wjwu gbrbw. e', 1, 0),
(71, 3, 1, NULL, 2, '2022-12-27', NULL, NULL, NULL, 'jsj zhsj ajaj wueue ueue ueue ueue ajaj lek kfjf ngnf bfbr hdhd hfgdj vrbe', 1, 0),
(72, 4, 2, 2, 3, '2022-12-27', '2022-11-30', '14:36:37', '19:36:37', ' como no como cno co mon onononono non o no n ono no n ono no no n on o no n on o no n o', 1, 0),
(73, 4, 2, NULL, 3, '2022-12-27', '2022-11-24', '08:16:00', '08:16:00', '', 1, 0),
(74, 4, 2, NULL, 3, '2022-12-27', NULL, NULL, NULL, 'xxgh', 1, 0),
(75, 4, 4, NULL, 6, '2022-12-27', '2022-11-30', '09:29:00', '09:29:00', 'En la visita voy a diseñarle los planos para la pieza de la máquina ', 1, 0),
(76, 4, 3, NULL, 3, '2022-12-27', NULL, NULL, NULL, 'Vamos a hacer una reunión para que se decida entre las diferentes ofertas que tiene ', 1, 0),
(77, 4, 4, NULL, 5, '2022-12-27', '2022-11-24', '09:37:00', '09:37:00', 'vamos a firmar y facturar el contrato por la fabricación de las piezas ', 1, 0),
(78, 2, 4, 2, 6, '2022-12-27', '2022-12-15', '14:50:07', '06:50:07', 'clave2clave2clave2clave2clave2clave2', 1, 0),
(79, 2, 3, NULL, 2, '2022-12-27', NULL, NULL, NULL, '', 1, 0),
(80, 2, 3, NULL, 4, '2022-12-27', NULL, NULL, NULL, '', 1, 0),
(81, 2, 4, NULL, 6, '2022-12-27', NULL, NULL, NULL, '', 1, 0),
(82, 2, 3, NULL, 6, '2022-12-27', '2022-11-26', '09:21:00', '09:21:00', '', 1, 0),
(83, 4, 3, NULL, 3, '2022-12-27', '2022-11-25', '11:07:00', '11:07:00', '', 1, 0),
(84, 4, 4, NULL, 3, '2022-12-27', '2022-11-26', '03:57:00', '03:57:00', '', 1, 0),
(85, 4, 3, NULL, 5, '2022-12-27', '2022-11-27', '03:57:00', '03:57:00', '', 1, 0),
(86, 4, 3, NULL, 4, '2022-12-27', '2022-11-26', '03:59:00', '03:59:00', '', 1, 0),
(87, 4, 2, NULL, 4, '2022-12-27', '2022-11-30', '03:59:00', '03:59:00', '', 1, 0),
(88, 2, 4, NULL, 6, '2022-12-27', '2022-11-29', '08:15:00', '08:15:00', 'jshshaha', 1, 0),
(89, 3, 4, NULL, 6, '2022-12-27', NULL, NULL, NULL, 'prueba para charts de la página web', 1, 0),
(90, 2, 3, NULL, 4, '2022-12-27', NULL, NULL, NULL, 'prueba 273', 1, 0),
(91, 4, 3, NULL, 4, '2022-12-27', NULL, NULL, NULL, 'prueba 4574', 1, 0),
(92, 2, 3, NULL, 6, '2022-12-27', NULL, NULL, NULL, 'prueba 133113', 1, 0),
(93, 4, 3, NULL, 3, '2022-12-27', NULL, NULL, NULL, 'prueba 8183+1(1(1', 1, 0),
(94, 4, 4, NULL, 3, '2022-12-27', NULL, NULL, NULL, 'pruebaaaa 717361+1', 1, 0),
(95, 6, 1, NULL, 3, '2022-12-27', '2022-12-22', '09:00:00', '09:00:00', 'visita planos', 0, 0),
(96, 6, 3, NULL, 4, '2022-12-27', '2022-12-22', '09:00:00', '09:00:00', 'visita de espectayivad y asesoria', 1, 0),
(97, 6, 4, NULL, 5, '2022-12-27', NULL, NULL, NULL, '', 1, 0),
(98, 5, 3, NULL, 3, '2022-12-27', '2022-12-26', '01:02:00', '01:02:00', '', 1, 0),
(99, 4, 2, NULL, 5, '2022-12-27', NULL, NULL, NULL, '', 1, 0),
(100, 5, 3, NULL, 2, '2022-12-27', NULL, NULL, NULL, '', 1, 0),
(101, 5, 4, NULL, 3, '2022-12-27', NULL, NULL, NULL, '', 1, 0),
(102, 5, 3, NULL, 4, '2022-12-27', NULL, NULL, NULL, '', 1, 0),
(103, 5, 2, NULL, 3, '2022-12-27', NULL, NULL, NULL, '', 1, 0),
(104, 5, 2, NULL, 3, '2022-12-27', NULL, NULL, NULL, '', 1, 0),
(105, 5, 1, NULL, 5, '2022-12-27', '2022-12-27', '02:56:00', '02:56:00', '', 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `zona`
--

CREATE TABLE `zona` (
  `ZON_ID` int(8) NOT NULL,
  `ZON_ZONA` int(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Dumping data for table `zona`
--

INSERT INTO `zona` (`ZON_ID`, `ZON_ZONA`) VALUES
(1, 123),
(2, 321);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cargo`
--
ALTER TABLE `cargo`
  ADD PRIMARY KEY (`CAR_ID`);

--
-- Indexes for table `ciudad`
--
ALTER TABLE `ciudad`
  ADD PRIMARY KEY (`CIU_ID`);

--
-- Indexes for table `clase_contacto`
--
ALTER TABLE `clase_contacto`
  ADD PRIMARY KEY (`CLA_ID`);

--
-- Indexes for table `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`CLI_ID`),
  ADD KEY `CLI_CIUDAD` (`CLI_CIUDAD`),
  ADD KEY `CLI_ZONA` (`CLI_ZONA`),
  ADD KEY `CLI_TIPO` (`CLI_TIPO`);

--
-- Indexes for table `empleado`
--
ALTER TABLE `empleado`
  ADD PRIMARY KEY (`EMP_ID`),
  ADD KEY `EMP_CARGO` (`EMP_CARGO`),
  ADD KEY `EMP_EQUIPO` (`EMP_EQUIPO`),
  ADD KEY `EMP_ZONA` (`EMP_ZONA`),
  ADD KEY `EMP_CIUDAD` (`EMP_CIUDAD`);

--
-- Indexes for table `equipo`
--
ALTER TABLE `equipo`
  ADD PRIMARY KEY (`EQU_ID`),
  ADD KEY `fk_EQU_LIDER` (`EQU_LIDER`);

--
-- Indexes for table `lider`
--
ALTER TABLE `lider`
  ADD PRIMARY KEY (`LID_ID`);

--
-- Indexes for table `motivo_contacto`
--
ALTER TABLE `motivo_contacto`
  ADD PRIMARY KEY (`MOT_ID`);

--
-- Indexes for table `real_visita`
--
ALTER TABLE `real_visita`
  ADD PRIMARY KEY (`REA_ID`),
  ADD KEY `REA_VIS` (`REA_VIS`);

--
-- Indexes for table `resultado`
--
ALTER TABLE `resultado`
  ADD PRIMARY KEY (`RES_ID`),
  ADD KEY `RES_TIPO` (`RES_TIPO`);

--
-- Indexes for table `resultado_razon`
--
ALTER TABLE `resultado_razon`
  ADD PRIMARY KEY (`RES_RAZ_ID`);

--
-- Indexes for table `resultado_tipo`
--
ALTER TABLE `resultado_tipo`
  ADD PRIMARY KEY (`RES_TIP_ID`);

--
-- Indexes for table `seguimiento`
--
ALTER TABLE `seguimiento`
  ADD PRIMARY KEY (`SEG_ID`),
  ADD KEY `SEG_VISITA` (`SEG_VISITA`),
  ADD KEY `SEG_RESULTADO` (`SEG_RESULTADO`),
  ADD KEY `SEG_RAZON` (`SEG_RAZON`);

--
-- Indexes for table `tipos_cliente`
--
ALTER TABLE `tipos_cliente`
  ADD PRIMARY KEY (`TIP_ID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `visita`
--
ALTER TABLE `visita`
  ADD PRIMARY KEY (`VIS_ID`),
  ADD KEY `VIS_ESPECIALISTA` (`VIS_ESPECIALISTA`),
  ADD KEY `VIS_CLIENTE` (`VIS_CLIENTE`),
  ADD KEY `VIS_CLASE_CONTACTO` (`VIS_CLASE_CONTACTO`),
  ADD KEY `VIS_MOTIVO_CONTACTO` (`VIS_MOTIVO_CONTACTO`);

--
-- Indexes for table `zona`
--
ALTER TABLE `zona`
  ADD PRIMARY KEY (`ZON_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cargo`
--
ALTER TABLE `cargo`
  MODIFY `CAR_ID` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `ciudad`
--
ALTER TABLE `ciudad`
  MODIFY `CIU_ID` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `clase_contacto`
--
ALTER TABLE `clase_contacto`
  MODIFY `CLA_ID` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `cliente`
--
ALTER TABLE `cliente`
  MODIFY `CLI_ID` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `empleado`
--
ALTER TABLE `empleado`
  MODIFY `EMP_ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `equipo`
--
ALTER TABLE `equipo`
  MODIFY `EQU_ID` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `lider`
--
ALTER TABLE `lider`
  MODIFY `LID_ID` int(8) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `motivo_contacto`
--
ALTER TABLE `motivo_contacto`
  MODIFY `MOT_ID` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `real_visita`
--
ALTER TABLE `real_visita`
  MODIFY `REA_ID` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;

--
-- AUTO_INCREMENT for table `resultado`
--
ALTER TABLE `resultado`
  MODIFY `RES_ID` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `resultado_razon`
--
ALTER TABLE `resultado_razon`
  MODIFY `RES_RAZ_ID` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `resultado_tipo`
--
ALTER TABLE `resultado_tipo`
  MODIFY `RES_TIP_ID` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `seguimiento`
--
ALTER TABLE `seguimiento`
  MODIFY `SEG_ID` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `tipos_cliente`
--
ALTER TABLE `tipos_cliente`
  MODIFY `TIP_ID` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `visita`
--
ALTER TABLE `visita`
  MODIFY `VIS_ID` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=106;

--
-- AUTO_INCREMENT for table `zona`
--
ALTER TABLE `zona`
  MODIFY `ZON_ID` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cliente`
--
ALTER TABLE `cliente`
  ADD CONSTRAINT `cliente_ibfk_1` FOREIGN KEY (`CLI_CIUDAD`) REFERENCES `ciudad` (`CIU_ID`),
  ADD CONSTRAINT `cliente_ibfk_2` FOREIGN KEY (`CLI_ZONA`) REFERENCES `zona` (`ZON_ID`),
  ADD CONSTRAINT `cliente_ibfk_3` FOREIGN KEY (`CLI_TIPO`) REFERENCES `tipos_cliente` (`TIP_ID`);

--
-- Constraints for table `empleado`
--
ALTER TABLE `empleado`
  ADD CONSTRAINT `empleado_ibfk_1` FOREIGN KEY (`EMP_CARGO`) REFERENCES `cargo` (`CAR_ID`),
  ADD CONSTRAINT `empleado_ibfk_2` FOREIGN KEY (`EMP_EQUIPO`) REFERENCES `equipo` (`EQU_ID`),
  ADD CONSTRAINT `empleado_ibfk_4` FOREIGN KEY (`EMP_ZONA`) REFERENCES `zona` (`ZON_ID`),
  ADD CONSTRAINT `empleado_ibfk_5` FOREIGN KEY (`EMP_CIUDAD`) REFERENCES `ciudad` (`CIU_ID`);

--
-- Constraints for table `equipo`
--
ALTER TABLE `equipo`
  ADD CONSTRAINT `fk_EQU_LIDER` FOREIGN KEY (`EQU_LIDER`) REFERENCES `empleado` (`EMP_ID`);

--
-- Constraints for table `real_visita`
--
ALTER TABLE `real_visita`
  ADD CONSTRAINT `real_visita_ibfk_1` FOREIGN KEY (`REA_VIS`) REFERENCES `visita` (`VIS_ID`);

--
-- Constraints for table `resultado`
--
ALTER TABLE `resultado`
  ADD CONSTRAINT `resultado_ibfk_1` FOREIGN KEY (`RES_TIPO`) REFERENCES `resultado_tipo` (`RES_TIP_ID`);

--
-- Constraints for table `seguimiento`
--
ALTER TABLE `seguimiento`
  ADD CONSTRAINT `seguimiento_ibfk_1` FOREIGN KEY (`SEG_VISITA`) REFERENCES `visita` (`VIS_ID`),
  ADD CONSTRAINT `seguimiento_ibfk_2` FOREIGN KEY (`SEG_RESULTADO`) REFERENCES `resultado` (`RES_ID`),
  ADD CONSTRAINT `seguimiento_ibfk_3` FOREIGN KEY (`SEG_RAZON`) REFERENCES `resultado_razon` (`RES_RAZ_ID`);

--
-- Constraints for table `visita`
--
ALTER TABLE `visita`
  ADD CONSTRAINT `visita_ibfk_1` FOREIGN KEY (`VIS_ESPECIALISTA`) REFERENCES `empleado` (`EMP_ID`),
  ADD CONSTRAINT `visita_ibfk_2` FOREIGN KEY (`VIS_CLIENTE`) REFERENCES `cliente` (`CLI_ID`),
  ADD CONSTRAINT `visita_ibfk_3` FOREIGN KEY (`VIS_CLASE_CONTACTO`) REFERENCES `clase_contacto` (`CLA_ID`),
  ADD CONSTRAINT `visita_ibfk_4` FOREIGN KEY (`VIS_MOTIVO_CONTACTO`) REFERENCES `motivo_contacto` (`MOT_ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
