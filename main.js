
var usedNums = new Array(76);

qtdJ = null;
jogador=[];
pontuacao=[];

function setQtdJog() {
    document.getElementById("btnJogar").style = "display:none";
    document.getElementById("jogadores").style = "display:none";
    document.getElementById("btnSortear").style = "";
    document.getElementById("sorteados").style = "text-align: center";

    alert("Jogo Iniciado");

    qtdJ = document.getElementById("qtdJogadores").value;

    for (var i = 0; i < qtdJ; i++) {
        jogador[i]=new Array();
        pontuacao[i]=0;
        document.getElementById("tabelas").innerHTML += '' +
            '<div class="col-md-6">' +
            '<table id="bingotable" style="margin:10px">' +
            '    <tr>' +
            '        <th class="orange">B</th>' +
            '        <th class="orange">I</th>' +
            '        <th class="orange">N</th>' +
            '        <th class="orange">G</th>' +
            '        <th class="orange">O</th>' +
            '    </tr>' +
            '    <tr>' +
            '        <td id="j' + i + '_0"> &nbsp;</td>' +
            '        <td id="j' + i + '_1"> &nbsp;</td>' +
            '        <td id="j' + i + '_2"> &nbsp;</td>' +
            '        <td id="j' + i + '_3"> &nbsp;</td>' +
            '        <td id="j' + i + '_4"> &nbsp;</td>' +
            '    </tr>' +
            '    <tr>' +
            '        <td id="j' + i + '_5"> &nbsp;</td>' +
            '        <td id="j' + i + '_6"> &nbsp;</td>' +
            '        <td id="j' + i + '_7"> &nbsp;</td>' +
            '        <td id="j' + i + '_8"> &nbsp;</td>' +
            '        <td id="j' + i + '_9"> &nbsp;</td>' +
            '    </tr>' +
            '    <tr>' +
            '        <td id="j' + i + '_10"> &nbsp;</td>' +
            '        <td id="j' + i + '_11"> &nbsp;</td>' +
            '        <td id="squarefree"> Jog ' + (i+1) + '</td>' +
            '        <td id="j' + i + '_12"> &nbsp;</td>' +
            '        <td id="j' + i + '_13"> &nbsp;</td>' +
            '    </tr>' +
            '    <tr>' +
            '        <td id="j' + i + '_14"> &nbsp;</td>' +
            '        <td id="j' + i + '_15"> &nbsp;</td>' +
            '        <td id="j' + i + '_16"> &nbsp;</td>' +
            '        <td id="j' + i + '_17"> &nbsp;</td>' +
            '        <td id="j' + i + '_18"> &nbsp;</td>' +
            '    </tr>' +
            '    <tr>' +
            '        <td id="j' + i + '_19"> &nbsp;</td>' +
            '        <td id="j' + i + '_20"> &nbsp;</td>' +
            '        <td id="j' + i + '_21"> &nbsp;</td>' +
            '        <td id="j' + i + '_22"> &nbsp;</td>' +
            '        <td id="j' + i + '_23"> &nbsp;</td>' +
            '    </tr>' +
            '</table>' +
            '</div>';
    }

    newCard();

}

function newCard() {
    var num=null;
    for (var jg = 0; jg < qtdJ; jg++) {

        for (var i = 0; i < 24; i++) {
            num=preencheCartela(i, jg);
            
            jogador[jg].push(num);

        }

        //Zerar Usados
        for (var i = 0; i < usedNums.length; i++) {
            usedNums[i] = false;
        }

    }
    console.log(jogador);

}

function preencheCartela(thisSquare, jogador) {
    var currSquare = "j" + jogador + "_" + thisSquare;
    
    var newNum = getRandom();

    document.getElementById(currSquare).innerHTML = newNum;
    return newNum;
}

function getRandom(){
    var newNum;

    do {
        newNum = Math.floor(Math.random() * 75) + 1;
    }
    while (usedNums[newNum]);

    usedNums[newNum] = true; 
    
    return newNum;
}


function sorteia(){

   var sorteado = getRandom();  

   document.getElementById("sorteados").innerHTML +="<span class='badge'>"+ sorteado+"</span>";

    for(var j = 0;j<jogador.length;j++){
            for(var i =0;i<=24;i++){
            if(jogador[j][i]===sorteado){
                pontuacao[j]++;
                document.getElementById('j'+j+'_'+i+'').style = "background-color: lightgreen;";
                if(pontuacao[j]==24){
                    alert("O jogador "+(j+1)+" Venceu!");
                    document.getElementById("btnSortear").disabled = true;
                }
            }
        }
    }
}