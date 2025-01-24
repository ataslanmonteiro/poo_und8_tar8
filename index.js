"use strict";
class Cliente {
    constructor(n, e, t) {
        this.nome = n;
        this.endereco = e;
        this.telefone = t;
    }
    getNome() {
        return this.nome;
    }
    setEndereco(e) {
        this.endereco = e;
    }
}
class PessoaFisica extends Cliente {
    constructor(n, e, t, c) {
        super(n, e, t);
        this.cpf = c;
    }
    getCPF() {
        return this.cpf;
    }
    imprimirDados() {
        console.log(`Nome: ${this.getNome()} CPF: ${this.cpf}`);
    }
}
class PessoaJuridica extends Cliente {
    constructor(n, e, t, c, nf) {
        super(n, e, t);
        this.cnpj = c;
        this.nomeFantasia = nf;
    }
    getCnpj() {
        return this.cnpj;
    }
    imprimirDados() {
        console.log(`Nome Fantasia: ${this.nomeFantasia} CNPJ: ${this.cnpj}`);
    }
}
const pf = new PessoaFisica("PF", "Rua 22", "123321123", "1234");
pf.imprimirDados();
const pj = new PessoaJuridica("PJ", "Rua 33", "456654456", "4321", "Fantasia PJ");
pj.imprimirDados();
