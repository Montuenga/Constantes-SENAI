const VelocidadeInicial = 10
let VelocidadeAtual = VelocidadeInicial

function acelerar() {
    VelocidadeAtual = VelocidadeAtual + 5
    document.getElementById("VelocidadeAtual").innerText = "A velocidade atual é: "
     + VelocidadeAtual + "km/h"
}

function desacelerar() {
    VelocidadeAtual = VelocidadeAtual - 5
    document.getElementById("VelocidadeAtual").innerText = "A velocidade atual é: "
     + VelocidadeAtual + "km/h"
}