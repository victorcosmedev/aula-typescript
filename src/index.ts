let mensagem: string = "Olá, Typescript!";
console.log(mensagem);

let valores: number[] = [10, 20, 30];
let somaValores: number = valores.reduce((acc, val) => acc + val, 0);
console.log("Soma dos valores:", somaValores);

function exibeMensagemPersonalizada(nome: string): string {
    return `Olá, ${nome}! Bem-vindo ao TypeScript.`;
}

console.log(exibeMensagemPersonalizada("Victor"));

class Carro {
    constructor(public marca: string, public modelo: string, public ano: number) {}
    
    exibirDetalhes(): string {
        return `${this.marca} ${this.modelo} - ${this.ano}`;
    }
}
const carro = new Carro("Honda", "Civic", 1995);
console.log(carro.exibirDetalhes());


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

console.log("\nInterfaces e Tipagem Avançada - Exercício 1");
console.log("Dados do carro: ", meuCarro);

interface Multiplicacao {
    (a: number, b: number): number;
}

const multiplicacao: Multiplicacao = (a, b) => a * b;

console.log("\nInterfaces e Tipagem Avançada - Exercício 2");
console.log("Resultado da multiplicação: ", multiplicacao(5, 10));
console.log("Resultado da multiplicação: ", multiplicacao(3, 2));
console.log("Resultado da multiplicação: ", multiplicacao(4, 3));

function inverterArray<T>(array: T[]): T[]{
    return [...array].reverse();
}

console.log("\nGenerics - Exercício 3");
let arrayLetras: string[] = ["A", "B", "C", "D"];
let arrayNumeros: number[] = [1, 2, 3, 4];

console.log("Array de letras original: " + arrayLetras);
console.log("Array de letras invertido: " + inverterArray<string>(arrayLetras));
console.log("Array de números original: " + arrayNumeros);
console.log("Array de números invertido: " + inverterArray<number>(arrayNumeros));

console.log("\nGenerics - Exercício 4");
interface Repositorio<T> {
    salvar(dado: T): void;
    obterTodos(): T[];
}

interface Usuario {
    nome: string;
    email: string;
}

class SistemaUsuarios implements Repositorio<Usuario>{
    private listaDeUsuarios: Usuario[] = [];
    salvar(dado: Usuario): void {
        this.listaDeUsuarios.push(dado);
    }

    obterTodos(): Usuario[]{
        return this.listaDeUsuarios;
    }
}

const sistema = new SistemaUsuarios();
sistema.salvar({nome: "Victor", email: "rm558856@fiap.com.br"});
sistema.salvar({nome: "teste", email: "teste@email.com"});
console.log("Usuários cadastrados: ");
console.log(sistema.obterTodos());

console.log("\nManipulação Avançada de Tipos - Exercício 5");
type RespostaServidor = string | boolean;
function processarResposta(resposta: RespostaServidor){
    if (typeof resposta === 'string'){
        console.log("Resposta é uma string. Valor: " + resposta);
    } else {
        console.log("Resposta é um boolean. Valor: " + resposta);
    }
}

processarResposta("resposta");
processarResposta(true);


console.log("\nManipulação Avançada de Tipos - Exercício 6");
type Estudante = {
    nome: string;
    curso: string;
}

type Trabalhador = {
    empresa: string;
    cargo: string;
}
type EstudanteTrabalhador = Estudante & Trabalhador;

const estudanteTrabalhador: EstudanteTrabalhador = {
    nome: "Victor",
    curso: "Análise e Desenvolvimento de Sistemas",
    empresa: "FIESP",
    cargo: "Analista de Sistemas",
}

console.log("Estudante & Trabalhador: ");
console.log(estudanteTrabalhador);