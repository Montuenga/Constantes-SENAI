const MediaMinima = 7;

function verificar() {
    // Pega os valores dos inputs e converte para número
    const nota1 = Number(document.getElementById("nota1").value) || 0;
    const nota2 = Number(document.getElementById("nota2").value) || 0;
    const nota3 = Number(document.getElementById("nota3").value) || 0;

    // Calcula a média
    const media = (nota1 + nota2 + nota3) / 3;

    // Seleciona a div de resultado
    const resultado = document.getElementById("resultado");

    // Verifica se está aprovado ou reprovado
    if (media >= MediaMinima) {
        resultado.innerText = `Sua média é: ${media.toFixed(2)} - APROVADO`;
        resultado.style.color = "green";
    } else {
        resultado.innerText = `Sua média é: ${media.toFixed(2)} - REPROVADO`;
        resultado.style.color = "red";
    }
}

// Adiciona o evento de clique ao botão
document.getElementById("verificarBtn").addEventListener("click", verificar);