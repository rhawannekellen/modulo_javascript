/*1° Método /
imprimir as 3 primeiras letras do nome, lembrando que se inicia com 0*/

const nome = "Rhawanne";

console.log(nome.slice(0, 3));


//2° Método

let nomeUsuaria = "Rhawanne";
let primeirasLetras = nomeUsuaria.slice(0, 3);

//console.log("As três primeiras letras do nome da usuária são:", primeirasLetras);


//Exercício 2


let olabiDados = "PretaLAb";
let ultimasLetras = olabiDados.substring(4, 8);

//console.log("As últimas letras da palavra PretaLab são:", ultimasLetras);


//Método como a Professora explicou

let projetoOlabi = "PretaLab";
let tamanhoVariavel = projetoOlabi.length; //lembrando que nesse método ele não irá considerá a posição 0
let ultimasLetras = projetoOlabi.substring(4, 8);

//console.log(tamanhoVariavel); //Aqui vai passar o comprimento da variável solicitada

//console.log(("As quatros últimas letras do projeto do Olabi são:", ultimasLetras);


/*Exercício 3


retornar a senha com asteriscos*/



let nomeUsuaria2 = "Rhawanne";
let tamanhoVariavel2 = nomeUsuaria2.length;
//console.log(tamanhoVariavel2)

let ocultandoNomeUsuaria = nomeUsuaria2.replace("Rhawanne", "********");
//console.log(ocultandoNomeUsuaria)


//Exercício 4

//transformando a senha em caracteres
let senha = "jbkjblk"
let comprimentoDaSenha + senha.length;

console.log("O comprimento total da senha", senha, "é: ", comprimentoDaSenha, "caractéres");




//Exercício 5

//limitador
let frase = "eu alcançarei meus objetivos";
let usandoMetodoSplit = frase.split("e");

console.log("O resultado da frase", frase, ",recortada usando a letra e", "é: "
    usandoMetodoSplit);