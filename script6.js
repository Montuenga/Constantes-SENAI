const IdadeMinima = 18
let idade

function VerificarIdade() {
    idade = Number(document.getElementById("idade").value)
    if (idade >= IdadeMinima) {
        document.getElementById("Resultado").innerText = "Pode Cadastarar"
    } else {
        document.getElementById("Resultado").innerText = "Não pode Cadastarar"
    }
    }