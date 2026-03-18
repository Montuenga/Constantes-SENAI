let pontuacao

function CalcularClassificação() {
    
    pontuacao = Number(document.getElementById("pontuacao").value)

if(pontuacao < 100) {
    document.getElementById("Resultado").innerText = 
    "Sua classificação é: Iniciante."
} else if(pontuacao < 250) {
    document.getElementById("Resultado").innerText = 
    "Sua classificação é: Intermediário."
} else if(pontuacao < 500) {
    document.getElementById("Resultado").innerText = 
    "Sua classificação é: Avançado."
} else {
    document.getElementById("Resultado").innerText = 
    "Sua classificação é: Master."
}
}