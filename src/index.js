import controlerUserLogin from "./moduloControlerLogin.js";
import controleRotas from "./moduloControleRotas.js"
//Trazendo elementos do Bootstrap para uso da main Javascript.
var myModal = new bootstrap.Modal(document.getElementById('myModal'))
//Trazendo os botões da DOM em HTML.
const entrarUsuario = document.getElementById("btnEntrar");
entrarUsuario.addEventListener("click", (event)=>{
    let user = document.getElementById("usuario").value,
    senha = document.getElementById("senha").value;
    let alertModal = controlerUserLogin.loginInfo(user, senha);
    
    document.getElementById("titleModal").innerHTML=alertModal.title;
    document.getElementById("bodyModal").innerHTML=alertModal.bodyModal;
    document.getElementById("btnModalClose").innerHTML=alertModal.b1;
    document.getElementById("btnModalSave").innerHTML=alertModal.b2;

    myModal.show();
    setTimeout(carregarPagina, 5000);
    function carregarPagina(){
window.location.href=controleRota(localStorage.status, alertModal.idModal);
    }
});

const novoUsuario=document.getElementById("btnNovoUsuario");
novoUsuario.addEventListener("click",(event) => {
      window.location.href=controleRotasApp.validaRota("")
});


