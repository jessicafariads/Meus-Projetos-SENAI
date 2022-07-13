/*
                        Codificação de um sistema de cadastro de peças
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
let novaPeca = "webcan";
let pesoPeca = 10;