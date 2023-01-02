<?php

include_once('../model/classes/Cliente.php');

class ClienteDao{
    private $c;

    public function __construct()
    {
        $this ->c = mysqli_connect("localhost","root","","academia");

        if (mysqli_connect_errno() == 0) {
            echo "\n" . "Conexão ok!";
        }
        else{
            $msg = mysqli_connect_error($this ->c);
            echo "\n" . "Erro na conexão SQL!";
            echo "\n" . "O MySQL retornoua seguinte mensagem!" . $msg;
        }
    }

    public function incluirCliente($cliente){
        $sql= "INSERT INTO cliente (CPF, nome, telefone, endereco, data_nascimento, matricula, peso, altura, evolucao)
        VALUES ('".
        $cliente->getCPF()."','".
        $cliente->getNome()."','".
        $cliente->getTelefone()."','".
        $cliente->getEndereco()."','".
        $cliente->getData_nascimento()."','".
        $cliente->getMatricula()."','". 
        $cliente->getPeso()."','". 
        $cliente->getAltura()."','". 
        $cliente->getEvolucao()."')"; 

        $result = mysqli_query($this->c,$sql);

        if ($result == true) {
            echo "\n". "Execução bem sucedida do INSERT!";
            return true;
        }
        else{
            $msg = mysqli_error($this->c);
            $_SESSION['msg'] = "\n" . "Falha no INSERT! Mensagem de erro: '$msg'";
            return false;
        }
    }
}


?>