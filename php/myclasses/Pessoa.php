<?php

abstract class Pessoa{
    
    protected $CPF;
    protected $nome;
    protected $telefone;
    protected $endereco;
    protected $data_nascimento;

    function __construct($CPF, $nome, $telefone, $endereco, $data_nascimento)
    {
        $this->setCPF($CPF);
        $this->setNome($nome);
        $this->setTelefone($telefone);
        $this->setEndereco($endereco);
        $this->setData_nascimento($data_nascimento);
    }

    
    public function getCPF()
    {
        return $this->CPF;
    }
    public function setCPF($CPF)
    {
        $this->CPF = $CPF;

        return $this;
    }

    public function getNome()
    {
        return $this->nome;
    }

    public function setNome($nome)
    {
        $this->nome = $nome;

        return $this;
    }



    public function getTelefone()
    {
        return $this->telefone;
    }

    public function setTelefone($telefone)
    {
        $this->telefone = $telefone;

        return $this;
    }



    

    public function getEndereco()
    {
        return $this->endereco;
    }

    public function setEndereco($endereco)
    {
        $this->endereco = $endereco;

        return $this;
    }

    public function getData_nascimento()
    {
        return $this->data_nascimento;
    }

    public function setData_nascimento($data_nascimento)
    {
        $this->data_nascimento = $data_nascimento;

        return $this;
    }

}

?>