/*
********************* Sistema de controle de alunos **************************
A empresa Savinis, focada no desenvolvimento de software de alta performance, 
contratou você para realizar a programação de um sistema de controle de alunos 
de uma escola. O sistema devera funcionar da seguinte forma:
Considere a quantidade de alunos presentes na sala, percorra do zera até 
o numero total de alunos e retornar os seguintes resultados:
* Se o numero for par, escreva 'par' e o numero correspondente.
* Se o numero for impar, escreva 'impar' e o numero correspondente.
* Se o numero for zero, escreva 'zero' e o numero correspondente.
*/

let quantidadeDeAlunos = 10;
let quantidadeDePar = 0;
let quantidadeDeImpar = 0;

for (let i = 0; i < quantidadeDeAlunos; i++) {
    if(i==0){ // zero
        console.log("Zero:\t"+ i);
    }else if(i%2==0){ // numeros pares
        console.log("Par:\t"+ i);
        quantidadeDePar++;
    }else{ // numeros impares
        console.log("Impar:\t"+ i);
        quantidadeDeImpar++;
    }
}
console.log("----------------------------------------------------")
console.log("Quantidade de numeros pares no intervalo:\t"+ quantidadeDePar);
console.log("Quantidade de numeros impares no intervalo:\t"+ quantidadeDeImpar);