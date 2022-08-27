-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Εξυπηρετητής: 127.0.0.1
-- Χρόνος δημιουργίας: 11 Δεκ 2021 στις 16:11:28
-- Έκδοση διακομιστή: 10.4.18-MariaDB
-- Έκδοση PHP: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Βάση δεδομένων: `covid_19`
--

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `friday`
--

CREATE TABLE `friday` (
  `id` varchar(30) NOT NULL,
  `zone0_1` int(5) DEFAULT NULL,
  `zone1_2` int(5) DEFAULT NULL,
  `zone2_3` int(5) DEFAULT NULL,
  `zone3_4` int(5) DEFAULT NULL,
  `zone4_5` int(5) DEFAULT NULL,
  `zone5_6` int(5) DEFAULT NULL,
  `zone6_7` int(5) DEFAULT NULL,
  `zone7_8` int(5) DEFAULT NULL,
  `zone8_9` int(5) DEFAULT NULL,
  `zone9_10` int(5) DEFAULT NULL,
  `zone10_11` int(5) DEFAULT NULL,
  `zone11_12` int(5) DEFAULT NULL,
  `zone12_13` int(5) DEFAULT NULL,
  `zone13_14` int(5) DEFAULT NULL,
  `zone14_15` int(5) DEFAULT NULL,
  `zone15_16` int(5) DEFAULT NULL,
  `zone16_17` int(5) DEFAULT NULL,
  `zone17_18` int(5) DEFAULT NULL,
  `zone18_19` int(5) DEFAULT NULL,
  `zone19_20` int(5) DEFAULT NULL,
  `zone20_21` int(5) DEFAULT NULL,
  `zone21_22` int(5) DEFAULT NULL,
  `zone22_23` int(5) DEFAULT NULL,
  `zone23_0` int(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `monday`
--

CREATE TABLE `monday` (
  `id` varchar(30) NOT NULL,
  `zone0_1` int(5) DEFAULT NULL,
  `zone1_2` int(5) DEFAULT NULL,
  `zone2_3` int(5) DEFAULT NULL,
  `zone3_4` int(5) DEFAULT NULL,
  `zone4_5` int(5) DEFAULT NULL,
  `zone5_6` int(5) DEFAULT NULL,
  `zone6_7` int(5) DEFAULT NULL,
  `zone7_8` int(5) DEFAULT NULL,
  `zone8_9` int(5) DEFAULT NULL,
  `zone9_10` int(5) DEFAULT NULL,
  `zone10_11` int(5) DEFAULT NULL,
  `zone11_12` int(5) DEFAULT NULL,
  `zone12_13` int(5) DEFAULT NULL,
  `zone13_14` int(5) DEFAULT NULL,
  `zone14_15` int(5) DEFAULT NULL,
  `zone15_16` int(5) DEFAULT NULL,
  `zone16_17` int(5) DEFAULT NULL,
  `zone17_18` int(5) DEFAULT NULL,
  `zone18_19` int(5) DEFAULT NULL,
  `zone19_20` int(5) DEFAULT NULL,
  `zone20_21` int(5) DEFAULT NULL,
  `zone21_22` int(5) DEFAULT NULL,
  `zone22_23` int(5) DEFAULT NULL,
  `zone23_0` int(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `pois`
--

CREATE TABLE `pois` (
  `id` varchar(30) NOT NULL,
  `name` varchar(30) NOT NULL,
  `address` varchar(30) NOT NULL,
  `lat` decimal(9,7) NOT NULL,
  `lng` decimal(9,7) NOT NULL,
  `rating` decimal(2,1) DEFAULT NULL,
  `n_rating` int(5) DEFAULT NULL,
  `types` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `saturday`
--

CREATE TABLE `saturday` (
  `id` varchar(30) NOT NULL,
  `zone0_1` int(5) DEFAULT NULL,
  `zone1_2` int(5) DEFAULT NULL,
  `zone2_3` int(5) DEFAULT NULL,
  `zone3_4` int(5) DEFAULT NULL,
  `zone4_5` int(5) DEFAULT NULL,
  `zone5_6` int(5) DEFAULT NULL,
  `zone6_7` int(5) DEFAULT NULL,
  `zone7_8` int(5) DEFAULT NULL,
  `zone8_9` int(5) DEFAULT NULL,
  `zone9_10` int(5) DEFAULT NULL,
  `zone10_11` int(5) DEFAULT NULL,
  `zone11_12` int(5) DEFAULT NULL,
  `zone12_13` int(5) DEFAULT NULL,
  `zone13_14` int(5) DEFAULT NULL,
  `zone14_15` int(5) DEFAULT NULL,
  `zone15_16` int(5) DEFAULT NULL,
  `zone16_17` int(5) DEFAULT NULL,
  `zone17_18` int(5) DEFAULT NULL,
  `zone18_19` int(5) DEFAULT NULL,
  `zone19_20` int(5) DEFAULT NULL,
  `zone20_21` int(5) DEFAULT NULL,
  `zone21_22` int(5) DEFAULT NULL,
  `zone22_23` int(5) DEFAULT NULL,
  `zone23_0` int(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `sunday`
--

CREATE TABLE `sunday` (
  `id` varchar(30) NOT NULL,
  `zone0_1` int(5) DEFAULT NULL,
  `zone1_2` int(5) DEFAULT NULL,
  `zone2_3` int(5) DEFAULT NULL,
  `zone3_4` int(5) DEFAULT NULL,
  `zone4_5` int(5) DEFAULT NULL,
  `zone5_6` int(5) DEFAULT NULL,
  `zone6_7` int(5) DEFAULT NULL,
  `zone7_8` int(5) DEFAULT NULL,
  `zone8_9` int(5) DEFAULT NULL,
  `zone9_10` int(5) DEFAULT NULL,
  `zone10_11` int(5) DEFAULT NULL,
  `zone11_12` int(5) DEFAULT NULL,
  `zone12_13` int(5) DEFAULT NULL,
  `zone13_14` int(5) DEFAULT NULL,
  `zone14_15` int(5) DEFAULT NULL,
  `zone15_16` int(5) DEFAULT NULL,
  `zone16_17` int(5) DEFAULT NULL,
  `zone17_18` int(5) DEFAULT NULL,
  `zone18_19` int(5) DEFAULT NULL,
  `zone19_20` int(5) DEFAULT NULL,
  `zone20_21` int(5) DEFAULT NULL,
  `zone21_22` int(5) DEFAULT NULL,
  `zone22_23` int(5) DEFAULT NULL,
  `zone23_0` int(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `thursday`
--

CREATE TABLE `thursday` (
  `id` varchar(30) NOT NULL,
  `zone0_1` int(5) DEFAULT NULL,
  `zone1_2` int(5) DEFAULT NULL,
  `zone2_3` int(5) DEFAULT NULL,
  `zone3_4` int(5) DEFAULT NULL,
  `zone4_5` int(5) DEFAULT NULL,
  `zone5_6` int(5) DEFAULT NULL,
  `zone6_7` int(5) DEFAULT NULL,
  `zone7_8` int(5) DEFAULT NULL,
  `zone8_9` int(5) DEFAULT NULL,
  `zone9_10` int(5) DEFAULT NULL,
  `zone10_11` int(5) DEFAULT NULL,
  `zone11_12` int(5) DEFAULT NULL,
  `zone12_13` int(5) DEFAULT NULL,
  `zone13_14` int(5) DEFAULT NULL,
  `zone14_15` int(5) DEFAULT NULL,
  `zone15_16` int(5) DEFAULT NULL,
  `zone16_17` int(5) DEFAULT NULL,
  `zone17_18` int(5) DEFAULT NULL,
  `zone18_19` int(5) DEFAULT NULL,
  `zone19_20` int(5) DEFAULT NULL,
  `zone20_21` int(5) DEFAULT NULL,
  `zone21_22` int(5) DEFAULT NULL,
  `zone22_23` int(5) DEFAULT NULL,
  `zone23_0` int(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `tuesday`
--

CREATE TABLE `tuesday` (
  `id` varchar(30) NOT NULL,
  `zone0_1` int(5) DEFAULT NULL,
  `zone1_2` int(5) DEFAULT NULL,
  `zone2_3` int(5) DEFAULT NULL,
  `zone3_4` int(5) DEFAULT NULL,
  `zone4_5` int(5) DEFAULT NULL,
  `zone5_6` int(5) DEFAULT NULL,
  `zone6_7` int(5) DEFAULT NULL,
  `zone7_8` int(5) DEFAULT NULL,
  `zone8_9` int(5) DEFAULT NULL,
  `zone9_10` int(5) DEFAULT NULL,
  `zone10_11` int(5) DEFAULT NULL,
  `zone11_12` int(5) DEFAULT NULL,
  `zone12_13` int(5) DEFAULT NULL,
  `zone13_14` int(5) DEFAULT NULL,
  `zone14_15` int(5) DEFAULT NULL,
  `zone15_16` int(5) DEFAULT NULL,
  `zone16_17` int(5) DEFAULT NULL,
  `zone17_18` int(5) DEFAULT NULL,
  `zone18_19` int(5) DEFAULT NULL,
  `zone19_20` int(5) DEFAULT NULL,
  `zone20_21` int(5) DEFAULT NULL,
  `zone21_22` int(5) DEFAULT NULL,
  `zone22_23` int(5) DEFAULT NULL,
  `zone23_0` int(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `username` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `role` int(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Άδειασμα δεδομένων του πίνακα `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `email`, `role`) VALUES
(2, 'eleannitos', '$2y$10$p6iE6U8Za7juWMUCJANcSOnMhISNs51wMRZfP99zoj2BdYAFzo0Dm', 'eleapao13@gmail.com', 1),
(3, 'tsavos', '$2y$10$.K7h9yYkZFCJm6C9vFIxNOMm.v0/ZICh9qky8ViP2ls1Yl0OEL.46', 'stavros.alexiou13@gmail.com', 0),
(4, 'giannaras', '$2y$10$FJ8SWntRZoWWSTZz8XLCguwiJMgzwQwIipjNlZqeom3gh8r5lyDZq', 'giannaras@gmail.com', 0),
(5, 'EleannaTh', '$2y$10$2e2wkvbs33oiafhyoIVNE.gK7TsjeVf5Keh.OIWUp4Tg28UwPhCvS', 'up1054320@upnet.gr', 0),
(6, 'panos', '$2y$10$xDo9sYU8sO0a8A6rYK01iedaEzYMScbsmIKObGV10AbknjYrqRfPu', 'panos@gmail.com', 0),
(7, 'Akoulis', '$2y$10$i6XuWSCBJsiMk1lfIgYzpOZIUYkjFudD60Sa7NtgwfjZCT5p9GzLy', 'akilyc75@hotmail.com', 0);

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `wednesday`
--

CREATE TABLE `wednesday` (
  `id` varchar(30) NOT NULL,
  `zone0_1` int(5) DEFAULT NULL,
  `zone1_2` int(5) DEFAULT NULL,
  `zone2_3` int(5) DEFAULT NULL,
  `zone3_4` int(5) DEFAULT NULL,
  `zone4_5` int(5) DEFAULT NULL,
  `zone5_6` int(5) DEFAULT NULL,
  `zone6_7` int(5) DEFAULT NULL,
  `zone7_8` int(5) DEFAULT NULL,
  `zone8_9` int(5) DEFAULT NULL,
  `zone9_10` int(5) DEFAULT NULL,
  `zone10_11` int(5) DEFAULT NULL,
  `zone11_12` int(5) DEFAULT NULL,
  `zone12_13` int(5) DEFAULT NULL,
  `zone13_14` int(5) DEFAULT NULL,
  `zone14_15` int(5) DEFAULT NULL,
  `zone15_16` int(5) DEFAULT NULL,
  `zone16_17` int(5) DEFAULT NULL,
  `zone17_18` int(5) DEFAULT NULL,
  `zone18_19` int(5) DEFAULT NULL,
  `zone19_20` int(5) DEFAULT NULL,
  `zone20_21` int(5) DEFAULT NULL,
  `zone21_22` int(5) DEFAULT NULL,
  `zone22_23` int(5) DEFAULT NULL,
  `zone23_0` int(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Ευρετήρια για άχρηστους πίνακες
--

--
-- Ευρετήρια για πίνακα `friday`
--
ALTER TABLE `friday`
  ADD PRIMARY KEY (`id`);

--
-- Ευρετήρια για πίνακα `monday`
--
ALTER TABLE `monday`
  ADD PRIMARY KEY (`id`);

--
-- Ευρετήρια για πίνακα `pois`
--
ALTER TABLE `pois`
  ADD PRIMARY KEY (`id`);

--
-- Ευρετήρια για πίνακα `saturday`
--
ALTER TABLE `saturday`
  ADD PRIMARY KEY (`id`);

--
-- Ευρετήρια για πίνακα `sunday`
--
ALTER TABLE `sunday`
  ADD PRIMARY KEY (`id`);

--
-- Ευρετήρια για πίνακα `thursday`
--
ALTER TABLE `thursday`
  ADD PRIMARY KEY (`id`);

--
-- Ευρετήρια για πίνακα `tuesday`
--
ALTER TABLE `tuesday`
  ADD PRIMARY KEY (`id`);

--
-- Ευρετήρια για πίνακα `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Ευρετήρια για πίνακα `wednesday`
--
ALTER TABLE `wednesday`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT για άχρηστους πίνακες
--

--
-- AUTO_INCREMENT για πίνακα `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Περιορισμοί για άχρηστους πίνακες
--

--
-- Περιορισμοί για πίνακα `friday`
--
ALTER TABLE `friday`
  ADD CONSTRAINT `friday_ibfk_1` FOREIGN KEY (`id`) REFERENCES `pois` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Περιορισμοί για πίνακα `monday`
--
ALTER TABLE `monday`
  ADD CONSTRAINT `monday_ibfk_1` FOREIGN KEY (`id`) REFERENCES `pois` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Περιορισμοί για πίνακα `saturday`
--
ALTER TABLE `saturday`
  ADD CONSTRAINT `saturday_ibfk_1` FOREIGN KEY (`id`) REFERENCES `pois` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Περιορισμοί για πίνακα `sunday`
--
ALTER TABLE `sunday`
  ADD CONSTRAINT `sunday_ibfk_1` FOREIGN KEY (`id`) REFERENCES `pois` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Περιορισμοί για πίνακα `thursday`
--
ALTER TABLE `thursday`
  ADD CONSTRAINT `thursday_ibfk_1` FOREIGN KEY (`id`) REFERENCES `pois` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Περιορισμοί για πίνακα `tuesday`
--
ALTER TABLE `tuesday`
  ADD CONSTRAINT `tuesday_ibfk_1` FOREIGN KEY (`id`) REFERENCES `pois` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Περιορισμοί για πίνακα `wednesday`
--
ALTER TABLE `wednesday`
  ADD CONSTRAINT `wednesday_ibfk_1` FOREIGN KEY (`id`) REFERENCES `pois` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;