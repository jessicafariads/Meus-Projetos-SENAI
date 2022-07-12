/*                                         Atividade Online 2 - LÓGICA DE PROGRAMAÇÃO
-Se a data do evento for posterior à data atual, permitir o evento; senão, alertar que o cadastro não será permitido por data inválida.
-Se o participante for maior de 18 anos, permitir o cadastro; senão, alertar que o cadastro não é permitido pela idade.
-Listar participantes e palestrantes por evento.
-Enquanto a quantidade de participantes for inferior a 100, permitir cadastro; senão, alertar que o cadastro não será permitido por ter excedido o limite.
-Criar fluxograma com todos os requisitos que devem ser atendidos pelo sistema.
*/

let listaDeParticipantes = ["Carlos","João","Iasmin","Rafael","Kethlen","Antoniely", "Antonio","Zilda"];
let quantidadeDeParticipantes =  listaDeParticipantes.length;
let listaDePalestrantes = ["Leonardo", "Oberlan", "Jacques", "Luis Rigo"];
let quantidadeDePalestrantes =  listaDePalestrantes.length;
let dataDoEvento = "23/07/2022";
//Informações de novo participante
let novoParticipante = "Jessica";
let idade = 18;
let dataDaInscricao = "05/07/2022";

if (quantidadeDeParticipantes<=100 && dataDaInscricao<dataDoEvento) { // Verifica se o evento já aconteceu ou a quantidade de participantes chegou ao limite
    if (idade>=18) { // Verifica se o novo participante é menor de idade
        listaDeParticipantes.push(novoParticipante);
        quantidadeDeParticipantes++;
        console.log("------------------------------------ ENCOMP 2022 ------------------------------------\n");
        console.log("Inscrição realizada com sucesso no Evento Encomp no dia " + dataDoEvento, "!\n");
        console.log("------------------------------- LISTA DE PALESTRANTES -------------------------------"); 
        for (let indice = 0; indice < quantidadeDePalestrantes; indice++) { // Lista os palestrantes do Evento
            const palestrante = listaDePalestrantes[indice];
            console.log(palestrante);
        }
        console.log("\n------------------------------- LISTA DE PARTICIPANTES -------------------------------"); 
        for (let indice = 0; indice < quantidadeDeParticipantes; indice++) { // Lista os participantes do Evento
            const participante = listaDeParticipantes[indice];
            console.log(participante);
        }
    }else{
        console.log("Inscrição não pode ser realizada! O participante é menor de 18 anos.");
    }
    
} else {
    if (quantidadeDeParticipantes>100) {
        console.log("Inscrição não pode ser realizada! A quantidade de participantes foi excedida!");
    } else {
        console.log("Inscrição não pode ser realizada! O evento já ocorreu.");
    }
}