//variável, seu valor pode ser alterado no decorrer  do programa
let listaDeEstudantes = ["Helena", "Chico", "Mário"];
let quantidadeDeEstudantes =  listaDeEstudantes.length;
console.log(quantidadeDeEstudantes);

//Estrutura for
console.log("\nEstrutura for");
for (let indice = 0; indice < quantidadeDeEstudantes; indice++) {
    const alunoCorrente = listaDeEstudantes[indice];
    console.log(alunoCorrente);
}

//Estrutura while
console.log("\nEstrutura While");
let indice=0;
while(indice < quantidadeDeEstudantes){
    const alunoCorrente = listaDeEstudantes[indice];
    console.log(alunoCorrente);
    indice++;
}

//Estrutura do... while
console.log("\nEstrutura do...while");
indice=0;
do{
    const alunoCorrente = listaDeEstudantes[indice];
    console.log(alunoCorrente);
    indice++;
}while(indice < quantidadeDeEstudantes);

for (let n = 1; n <= 10; n++) {
    console.log(n);
    
}