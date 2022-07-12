let listaDeEstudantes = [];
let quantidadeDeEstudantes =  listaDeEstudantes.length;
console.log(quantidadeDeEstudantes);
for (let n = 0; n < 5; n++) {
    let op = prompt('Deseja inserir um aluno na lista? (s/n)');

    if (op==='s') {
        var nome = prompt('Digite o nome: ');
        listaDeEstudantes.push(nome);
        quantidadeDeEstudantes++;
    } else {
        console.log('Lista completa! Bye...');
    }
}