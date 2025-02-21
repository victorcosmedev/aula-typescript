// let mensagem: string = "Olá, Typescript!";
// console.log(mensagem);

// let valores: number[] = [10, 20, 30];
// let somaValores: number = valores.reduce((acc, val) => acc + val, 0);
// console.log("Soma dos valores:", somaValores);

// function exibeMensagemPersonalizada(nome: string): string {
//     return `Olá, ${nome}! Bem-vindo ao TypeScript.`;
// }

// console.log(exibeMensagemPersonalizada("Victor"));

// class Carro {
//     constructor(public marca: string, public modelo: string, public ano: number) {}
    
//     exibirDetalhes(): string {
//         return `${this.marca} ${this.modelo} - ${this.ano}`;
//     }
// }
// const carro = new Carro("Honda", "Civic", 1995);
// console.log(carro.exibirDetalhes());


// EXERCÍCIOS 20/02
interface Carro {
    marca: string;
    modelo: string;
    ano: number;
    motor?: string;
}

const meuCarro: Carro = {
    marca: "Volkswagen",
    modelo: "Jetta",
    ano: 2018,
    motor: "EA111"
}

console.log("Interfaces e Tipagem Avançada - Exercício 1");
console.log("Dados do carro: ", meuCarro);

