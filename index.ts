class Cliente{
    private nome: string
    protected endereco: string
    private telefone: string

    constructor (n:string, e:string, t:string){
        this.nome = n;
        this.endereco = e;
        this.telefone = t;
    }

    public getNome():string{
        return this.nome;
    }

    public setEndereco(e:string){
        this.endereco = e;
    }
}
class PessoaFisica extends Cliente {
    private cpf:string;
    constructor(n:string, e:string, t:string,c:string) {
        super(n,e,t);
        this.cpf = c;               
    }
    public getCPF():string{
        return this.cpf;
    }
    public imprimirDados():void{
        console.log(Nome: ${this.getNome()} CPF: ${this.cpf});
    }
}
class PessoaJuridica extends Cliente {
        private cnpj:string;
        private nomeFantasia:string;

        constructor(n:string, e:string, t:string, c:string, nf:string) {
            super(n,e,t);
            this.cnpj = c;
            this.nomeFantasia = nf;               

        }
        public getCnpj():string{
            return this.cnpj;
        }
        public imprimirDados():void{
            console.log(Nome Fantasia: ${this.nomeFantasia} CNPJ: ${this.cnpj});
        }        
}

const c = new Cliente("Cliente", "Rua 1", "123");
console.log(c.getNome());
const pf = new PessoaFisica("PF", "Rua 2", "123","123456789");
pf.imprimirDados();