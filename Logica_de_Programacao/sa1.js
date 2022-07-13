/*
************************* Codificação de um sistema de cadastro de peças *****************************
A empresa Savinis, focada no desenvolvimento de software de alta performance, contratou você para 
realizar a programação de um sistema de cadastro de peças, que devera atender os seguintes requisitos:
* Se a peça possuir um peso superior a 100 gramas, pode cadastrar
* Dada a capacidade de cada caixa, caso a lista de peças seja superior a 10, imprima uma mensagem de 
informando não ter capacidade suficiente.
* Caso a peça tenha um nime com quantidade inferior a 3 caracteres, informe uma mensagem de erro.
*/

let listaDePecas = ["gabinete","mouse","teclado"];
let quantidadeDePecas = listaDePecas.length;
// Informações da nova peça
let nomePeca = "webcam";
let pesoPeca = 101; // em gramas

if(quantidadeDePecas>=10){ // A quantidade de peças já cadastradas não deve exceder 10
    console.log("Cadastro não pode ser realizado! Capacidade excedida!");
}else if (pesoPeca<=100) { // A peça deve pesar mais que 100 gramas
    console.log("Cadastro não autorizado! O peso da peça é menor do que o permitido!");
} else if(nomePeca.length<3){ // O nome da peça deve ter mais que 3 letras
    console.log("Cadastro não autorizado! O nome é invalido! ");
}else{
    listaDePecas.push(nomePeca);
    quantidadeDePecas++;
    console.log("Lista de Pecas cadastradas: ")
    for (let i = 0; i < quantidadeDePecas; i++) { //Aqui vai listar as peças cadastradas
        const peca = listaDePecas[i];
        console.log(peca);
    }
}