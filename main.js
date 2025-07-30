import { get_tabuleiro, seleciona } from "./discos.js";

const eH1 = document.querySelector("h1");
eH1.textContent = "CATATAU LANHOUSE !";


const eTabuleiro = cria_tabuleiro();
document.body.append(eTabuleiro);

const tabuleiro = get_tabuleiro();

for (let i = 0; i < 7; i++ ){

    const eDisco = cria_disco(tabuleiro[i],i);
    eTabuleiro.append(eDisco);
    eTabuleiro.append(eDisco);
    eDisco.dataset.cor = tabuleiro[i];
}

function atualiza_discos(){
    const tabuleiro =  get_tabuleiro();
    for ( let i = 0 ; i < eTabuleiro.children.length; i++ ){
        const disco = eTabuleiro.children[i];
        disco.dataset.cor = tabuleiro[disco.dataset.position];
    }
}

function disco_click(evento){
    const position = Number(evento.target.dataset.position);
    console.log("Click!" + position); 
    seleciona(position);
    atualiza_discos();
}

function cria_disco(cor, position){

    const novo_disco = document.createElement("div");
    novo_disco.classList.add("disco");
    novo_disco.dataset.cor = cor;
    novo_disco.dataset.position = position;
    novo_disco.addEventListener("click", disco_click);
    return novo_disco;

}

function cria_tabuleiro(){

    const novo_tabuleiro =  document.createElement("div");
        novo_tabuleiro.classList.add("tabuleiro");
        novo_tabuleiro.style.background = "lighgreen";
        novo_tabuleiro.style.minHeight = "25px";
        return novo_tabuleiro;
}