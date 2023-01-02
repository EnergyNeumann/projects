-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 26-Maio-2022 às 20:30
-- Versão do servidor: 10.4.21-MariaDB
-- versão do PHP: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `clinicamedica`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `doenca`
--

CREATE TABLE `doenca` (
  `coddoe` int(4) NOT NULL,
  `tipo` varchar(30) DEFAULT NULL,
  `nome` varchar(40) DEFAULT NULL,
  `sintomas` int(6) DEFAULT NULL,
  `tratamento` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `doenca`
--

INSERT INTO `doenca` (`coddoe`, `tipo`, `nome`, `sintomas`, `tratamento`) VALUES
(345, 'DST', 'AIDS', 543, 'Antirretrovirais'),
(456, 'Psicológica', 'Esquizofrenia', 654, 'Antipsicóticos'),
(567, 'Genética', 'Diabete', 765, 'Antidiabéticos');

-- --------------------------------------------------------

--
-- Estrutura da tabela `medico`
--

CREATE TABLE `medico` (
  `codmed` int(3) NOT NULL,
  `cpf` bigint(11) DEFAULT NULL,
  `nome` varchar(40) DEFAULT NULL,
  `cep` int(8) DEFAULT NULL,
  `especialidade` varchar(20) DEFAULT NULL,
  `horarios` int(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `medico`
--

INSERT INTO `medico` (`codmed`, `cpf`, `nome`, `cep`, `especialidade`, `horarios`) VALUES
(100, 10072005300, 'João', 10072004, 'Dermatologista', 10),
(200, 20072005300, 'Breno', 20072005, 'Cirurgião', 11),
(300, 30072005300, 'Richard', 30072005, 'Cardiologia', 12);

-- --------------------------------------------------------

--
-- Estrutura da tabela `paciente`
--

CREATE TABLE `paciente` (
  `codpac` int(5) NOT NULL,
  `cpf` bigint(11) DEFAULT NULL,
  `nome` varchar(40) DEFAULT NULL,
  `cep` int(8) DEFAULT NULL,
  `telefone` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `paciente`
--

INSERT INTO `paciente` (`codpac`, `cpf`, `nome`, `cep`, `telefone`) VALUES
(982, 98989796952, 'Dener', 97969981, '912345672'),
(984, 98989796954, 'Thay', 97969964, '912345674'),
(986, 98989796956, 'Oliver', 97969966, '912345676'),
(988, 98989796951, 'Dou', 97969961, '912345671');

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuario`
--

CREATE TABLE `usuario` (
  `login` int(10) NOT NULL,
  `senha` int(30) DEFAULT NULL,
  `nome` varchar(40) DEFAULT NULL,
  `email` varchar(60) DEFAULT NULL,
  `dtNascto` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `usuario`
--

INSERT INTO `usuario` (`login`, `senha`, `nome`, `email`, `dtNascto`) VALUES
(2005, 2222, 'Richard', 'richardklaoss@gmail.com', '2005-07-30'),
(3007, 30072005, 'Richard', 'richard.neumann@aluno.ifsp.edu.br', '2005-09-09'),
(12333, 123333, 'Alexandra', 'alexandra@aluno.ifsp.edu.br', '2010-10-10'),
(19112004, 1911, 'Vitor Fodra', 'magalhaes.fodra@aluno.ifsp.edu.br', '2004-11-19');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `doenca`
--
ALTER TABLE `doenca`
  ADD PRIMARY KEY (`coddoe`);

--
-- Índices para tabela `medico`
--
ALTER TABLE `medico`
  ADD PRIMARY KEY (`codmed`);

--
-- Índices para tabela `paciente`
--
ALTER TABLE `paciente`
  ADD PRIMARY KEY (`codpac`);

--
-- Índices para tabela `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`login`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `doenca`
--
ALTER TABLE `doenca`
  MODIFY `coddoe` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=890;

--
-- AUTO_INCREMENT de tabela `medico`
--
ALTER TABLE `medico`
  MODIFY `codmed` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1234;

--
-- AUTO_INCREMENT de tabela `paciente`
--
ALTER TABLE `paciente`
  MODIFY `codpac` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1235;

--
-- AUTO_INCREMENT de tabela `usuario`
--
ALTER TABLE `usuario`
  MODIFY `login` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19112005;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
