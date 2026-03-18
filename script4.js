const ValorFreteGratis = 150
let ValorTotal

function CalcularFrete() {
    ValorTotal = Number(document.getElementById("ValorTotal").value)
     if (ValorTotal >= ValorFreteGratis) {
        document.getElementById("Resultado").innerText = "Frete Gratis"
    } else {
        document.getElementById("Resultado").innerText = "Frete R$ 10,00"
    }
    document.getElementById("ValorTotal").value = ""
}