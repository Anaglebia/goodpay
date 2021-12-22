import rotaApp from "./moduloRotas";

class ControleRotasApp{
    constructor(status, idRota, tela, linUrl){
        this.status=status;
        this.idRota=idRota;
        this.tela=tela;
        this.linUrl=linUrl;
    }
    validaRota(status, idRota){
        if(status=== "true"){
            return(rotaApp.find((rotaApp) => rotaApp.idRota === idRota));
        }else{
            alert(` Acesso Negado pelo o controlador pois seu status esta: ${status} de rotas e links:${idRotas}`) ;
            return(rotaApp.find((rotaApp) => rotaApp.idRota === idRota));
        }
    }
}

const ControleRotasApp=new ControleRotasApp()
export default ControleRotasApp;