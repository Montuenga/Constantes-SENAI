const precoProduto = 50
const taxaEntrega = 10
const desconto = 20
let quantidade
let total
let cliente
let conta

function CalcularCompra() {
    quantidade = Number(document.getElementById("quantidade").value)
    cliente = document.getElementById("cliente").value

    conta = (precoProduto * quantidade)
    total = conta + taxaEntrega

    let descontoaplicado = 0

if (total > 200) {
    total = total - desconto
    descontoaplicado = desconto
}
    
    document.getElementById("Resultado").innerText =
    "Cliente: " + cliente +
    "\nQuantidade: " + quantidade + 
    "\nPorduto: " + conta +
    "\n Entrega: " + taxaEntrega +
    "\nDesconto: " + descontoaplicado + 
    "\n Total: " + total
}