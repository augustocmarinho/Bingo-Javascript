var usedNums = new Array(76);

function newCard() {
    for (var a = 1; a <= qtdJ; a++) {

        //Zerar Usados
        for (var i = 1; i < usedNums.length; i++) {
            usedNums[i] = false;
        }

        for (var i = 0; i < 24; i++) {
            setSquare(i, a);
        }

    }
}

function setSquare(thisSquare, jogador) {
    var currSquare = "j" + jogador + "_" + thisSquare;
    var newNum;

    do {
        newNum = Math.floor(Math.random() * 75) + 1;
    }
    while (usedNums[newNum]);

    usedNums[newNum] = true;
    document.getElementById(currSquare).innerHTML = newNum;
}

qtdJ = 2;

function setQtdJog() {
    document.getElementById("btnJogar").disabled = true;

    alert("Jogo Iniciado");

    qtdJ = document.getElementById("qtdJogadores").value;

    for (var i = 3; i <= qtdJ; i++) {

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
            '        <td id="squarefree"> Jog ' + i + '</td>' +
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