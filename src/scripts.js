// Data específica para o contador
var dataEspecifica = new Date('2024-04-01');

function atualizarContador() {
    var dataAtual = new Date();
    var diferenca = dataEspecifica.getTime() - dataAtual.getTime();

    // Calcular dias, horas, minutos e segundos a partir da diferença
    var dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    var horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    var segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    // Exibir o contador na página HTML
    document.getElementById('contador').innerHTML = dias + "d " + horas + "h " + minutos + "m " + segundos + "s ";

    // Atualizar o contador a cada segundo
    setTimeout(atualizarContador, 1000);
}

// Iniciar o contador quando a página carregar
window.onload = function() {
    atualizarContador();
};
