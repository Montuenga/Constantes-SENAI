const MaximoUsuarios = 100
let UsuariosOnline = 0

function Entrar() {
    if(UsuariosOnline < MaximoUsuarios) {
    UsuariosOnline +=1
    document.getElementById("UsuariosOnline").innerText = "Usuários online: "
     + UsuariosOnline + "/" + MaximoUsuarios
}else {
    document.getElementById("UsuariosOnline").innerText =
     "Limite de usuários atingido"
}
}
 function Sair() {
    if(UsuariosOnline > 0)
    UsuariosOnline -=1
    document.getElementById("UsuariosOnline").innerText = "Usuários online: "
     + UsuariosOnline + "/" + MaximoUsuarios
 }