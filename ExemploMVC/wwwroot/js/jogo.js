var btn_jogador1 = document.getElementById("btn_jogador_1");
var btn_jogador2 = document.getElementById("btn_jogador_2");
var btn_parar1 = document.getElementById("btn_parar_1");
var btn_parar2 = document.getElementById("btn_parar_2");

zerarPartida();

function iniciar() {
    $(btn_jogador1).removeAttr('disabled');
    $(btn_parar1).removeAttr('disabled');
    $('#btn_iniciar').attr('disabled', 'disabled')
}

function valorAleatorio() {
    min = Math.ceil(1);
    max = Math.floor(13);
    var aleatorio = Math.floor(Math.random() * (max - min)) + min;
    return aleatorio;
}

function jogador1() {

    var cartas1 = document.getElementById("cartas1");
    let numeroSorteado = valorAleatorio();
    $(cartas1).attr("src", '/images/' + numeroSorteado + '.png'); 
    addPontos(numeroSorteado, 'jogador1')

}

function addPontos(pontos, jogadorString) {
    let jogador = $(`#${jogadorString}`)
    let pontuacaoAnterior = parseInt(jogador.html())
    let total = pontos + pontuacaoAnterior
    jogador.html(total)

    console.log(jogadorString)
    let adversario = jogadorString == 'jogador1' ? 'jogador 2' : 'jogador 1'

    checaSeEstorou(total, adversario)
} 

function checaSeEstorou(total, jogador) {
    if (total > 21) fimDeJogo(jogador);
}

function parar1() {
    $(btn_jogador1).attr('disabled', 'disabled');
    $(btn_parar1).attr('disabled', 'disabled');

    $(btn_jogador2).removeAttr('disabled');
    $(btn_parar2).removeAttr('disabled');
}

function jogador2() {
    var cartas2 = document.getElementById("cartas2");
    let numeroSorteado = valorAleatorio();

    $(cartas2).attr("src", '/images/' + numeroSorteado + '.png');
    addPontos(numeroSorteado, 'jogador2')
}

function parar2() {
    let pontuacao1 = parseInt($('#jogador1').html())
    let pontuacao2 = parseInt($('#jogador2').html())

    if (pontuacao1 > pontuacao2) return fimDeJogo("jogador 1")
    if (pontuacao2 > pontuacao1) return fimDeJogo("jogador 2")
    return fimDeJogo("Empate")
}

function zerarPartida() {
    $(btn_jogador1).attr('disabled', 'disabled');
    $(btn_parar1).attr('disabled', 'disabled');
    $(btn_jogador2).attr('disabled', 'disabled');
    $(btn_parar2).attr('disabled', 'disabled');
    $('#jogador1').html('0');
    $('#jogador2').html('0');
}

function fimDeJogo(vencedor) {
    setTimeout(function () {
        vencedor == "Empate" ? alert('Aconteceu um empate!') : alert(`Acabou o jogo! O  ${vencedor} venceu!`)
    }, 150)

    $(btn_jogador1).attr('disabled', 'disabled');
    $(btn_parar1).attr('disabled', 'disabled');
    $(btn_jogador2).attr('disabled', 'disabled');
    $(btn_parar2).attr('disabled', 'disabled');
}

function reiniciar() {
    zerarPartida();
    iniciar()
}