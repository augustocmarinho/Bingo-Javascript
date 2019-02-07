
/*Declaração de variaveis globais a serem usadas*/
usedNums = new Array(76);   //Números usados ou não
qtdJ = null;                //Quantidade de Jogadores
NomeJogador = [];           //Nomes dos Jogadores
jogador = [];               //Dados de cada Jogador
pontuacao = [];             //Pontuação de cada Jogador
Nsorteados = "";            //Registro de números sorteados

/* Função para Iniciar Jogo */
function Jogar() {
    //Ocultando e exibindo elemetos da tela ao iniciar jogo
    document.getElementById("btnJogar").style = "display:none";
    document.getElementById("jogadores").style = "display:none";
    document.getElementById("btnSortear").style = "";
    document.getElementById("sorteado").style = "text-align: center";
    document.getElementById("Todossorteados").style = "text-align: center";
    document.getElementById("opcoes").style = "";

    //Definindo quantidade de jogadores
    qtdJ = document.getElementById("qtdJogadores").value;

    //Criando Tabelas para cada Jogador
    for (var i = 0; i < qtdJ; i++) {
        jogador[i] = new Array();    //Definindo um SubArray(bidimensional) para cada jogador
        pontuacao[i] = new Array();  //Definindo um SubArray(bidimensional) para cada jogador
        NomeJogador[i] = prompt("Qual o nome do jogador " + (i + 1) + " ?", "");

        document.getElementById("tabelas").innerHTML += '' +
            '<div class="col-md-6">' +
            '<h4 style="padding-left:10px">' + NomeJogador[i] + '</h4>' +
            '<table id="tabelaBingo" style="margin:10px">' +
            '    <tr>' +
            '        <th class="tituloBingo">B</th>' +
            '        <th class="tituloBingo">I</th>' +
            '        <th class="tituloBingo">N</th>' +
            '        <th class="tituloBingo">G</th>' +
            '        <th class="tituloBingo">O</th>' +
            '    </tr>' +
            '    <tr>' +
            '        <td id="j' + i + '_0"> </td>' +
            '        <td id="j' + i + '_1"> </td>' +
            '        <td id="j' + i + '_2"> </td>' +
            '        <td id="j' + i + '_3"> </td>' +
            '        <td id="j' + i + '_4"> </td>' +
            '    </tr>' +
            '    <tr>' +
            '        <td id="j' + i + '_5"> </td>' +
            '        <td id="j' + i + '_6"> </td>' +
            '        <td id="j' + i + '_7"> </td>' +
            '        <td id="j' + i + '_8"> </td>' +
            '        <td id="j' + i + '_9"> </td>' +
            '    </tr>' +
            '    <tr>' +
            '        <td id="j' + i + '_10"> </td>' +
            '        <td id="j' + i + '_11"> </td>' +
            '        <td id="centro">Web!</td>' +
            '        <td id="j' + i + '_12"> </td>' +
            '        <td id="j' + i + '_13"> </td>' +
            '    </tr>' +
            '    <tr>' +
            '        <td id="j' + i + '_14"> </td>' +
            '        <td id="j' + i + '_15"> </td>' +
            '        <td id="j' + i + '_16"> </td>' +
            '        <td id="j' + i + '_17"> </td>' +
            '        <td id="j' + i + '_18"> </td>' +
            '    </tr>' +
            '    <tr>' +
            '        <td id="j' + i + '_19"> </td>' +
            '        <td id="j' + i + '_20"> </td>' +
            '        <td id="j' + i + '_21"> </td>' +
            '        <td id="j' + i + '_22"> </td>' +
            '        <td id="j' + i + '_23"> </td>' +
            '    </tr>' +
            '</table>' +
            '</div>';
    }

    newCard();

}
/*Função para Armazenar numeros das cartelas*/
function newCard() {
    var num = null;
    for (var jg = 0; jg < qtdJ; jg++) {
        //Preenche cartela e salva o número
        for (var i = 0; i < 24; i++) {
            num = preencheCartela(i, jg);
            jogador[jg].push(num);
        }

        //Zerar Números Usados
        for (var i = 0; i < usedNums.length; i++) {
            usedNums[i] = false;
        }
    }
    //console.log(jogador); //Debug
    
    alert("Jogo Iniciado");


}
/*Função para selecionar numeros das cartelas e preencher*/
function preencheCartela(Quadrado, jogador) {
    var PQuadrado = "j" + jogador + "_" + Quadrado;

    var newNum = getRandom();

    document.getElementById(PQuadrado).innerHTML = newNum;
    return newNum;
}

/*Gerar Números Aleatórios não repetidos(com base na variavel UsedNums) */
function getRandom() {
    var newNum;

    do {
        newNum = Math.floor(Math.random() * 75) + 1;
    }
    while (usedNums[newNum]);

    usedNums[newNum] = true;

    return newNum;
}

/*Função sorteio do Bingo */
function sorteia() {
    var sorteado = getRandom();
    Nsorteados += " |" + sorteado + "| ";

    //Informa Número Sorteado
    document.getElementById("sorteado").innerHTML = "<h1><span class='badge badge-primary'>" + sorteado + "</span></h1>";

    //Preenche quadrados sorteados
    for (var j = 0; j < jogador.length; j++) {
        for (var i = 0; i <= 24; i++) {
            if (jogador[j][i] === sorteado) {
                pontuacao[j].push(sorteado);;
                document.getElementById('j' + j + '_' + i + '').style = "background-color: lightgreen;";
                //Testa se existe ganhador
                if (pontuacao[j].length == 24) {
                    alert("O jogador: '" + NomeJogador[j] + "' Venceu!");
                    document.getElementById("btnSortear").disabled = true;
                }
            }
        }
    }
}
/*Visualizar números sorteados */
function verSorteados() {
    if (Nsorteados == "")
        alert("Não foi sorteado nenhum número até o momento");
    else
        alert(Nsorteados);
}
/*Verificar Acertos */
function vericarSorteados() {
    var qtd = document.getElementById("nVerificar").value;
    var ok = false;
    for (var j = 0; j < jogador.length; j++) {
        if (pontuacao[j].length >= qtd) {
            alert("O jogador: '" + NomeJogador[j] + "' já marcou " + pontuacao[j].length + " números, sendo eles: " + pontuacao[j].toString());
            ok = true;
        }
    }
    if (!ok) {
        alert("Ninguém marcou números até o momento.");
    }
}

/*Reiniciar o Jogo */
function reiniciar() {
    
    var reiniciar = confirm("Tem certeza?");

    if (reiniciar) {
        //window.location.reload();
        document.getElementById("btnJogar").style = "";
        document.getElementById("jogadores").style = "";
        document.getElementById("btnSortear").style = "display:none";
        document.getElementById("sorteado").style = "display:none";
        document.getElementById("Todossorteados").style = "display:none";
        document.getElementById("opcoes").style = "display:none";
        document.getElementById("tabelas").innerHTML = '';
        document.getElementById("sorteado").innerHTML = '';
        document.getElementById("btnSortear").disabled = false;

        usedNums = new Array(76);
        qtdJ = null;
        NomeJogador = [];
        jogador = [];
        pontuacao = [];
        Nsorteados = "";
    }
}