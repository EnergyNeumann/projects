<?php

include_once('../model/dao/ClienteDao.php');
include_once('Pessoa.php');

final class Cliente extends Pessoa {
    
    protected $matricula;
    protected $peso;
    protected $altura;
    protected $evolucao;


    public function __construct ($CPF, $nome, $telefone, $endereco, $data_nascimento,$matricula,$peso,$altura,$evolucao){
        parent::__construct($CPF, $nome, $telefone, $endereco, $data_nascimento);
        $this->setMatricula($matricula);
        $this->setPeso($peso);
        $this->setAltura($altura);
        $this->setEvolucao($evolucao);
    }

    public function getMatricula()
    {
        return $this->matricula;
    }

    public function setMatricula($matricula)
    {
        $this->matricula = $matricula;

        return $this;
    }


    public function getPeso()
    {
        return $this->peso;
    }

    public function setPeso($peso)
    {
        $this->peso = $peso;

        return $this;
    }


    
    public function getAltura()
    {
        return $this->altura;
    }

    public function setAltura($altura)
    {
        $this->altura = $altura;

        return $this;
    }



    public function getEvolucao()
    {
        return $this->evolucao;
    }

    public function setEvolucao($evolucao)
    {
        $this->evolucao = $evolucao;

        return $this;
    }



    public function incluirCliente(){
        $clienteDao = new ClienteDao();
        if ($clienteDao->incluirCliente($this)) {
            return true;
        }
        else{
            return false;
        }
    }

}





?>
