import { get_tabuleiro } from "./discos.js";

const eH1 = document.querySelector("h1");
eH1.textContent = "olá mundo!";


const eTabuleiro = cria_tabuleiro();
document.body.append(eTabuleiro);

const tabuleiro = get_tabuleiro();

for (let i = 0; i < 7; i++ ){

    const eDisco = cria_disco();
    eTabuleiro.append(eDisco);
    eTabuleiro.append(eDisco);
    eDisco.dataset.cor = tabuleiro[i];
}

function cria_disco(){

    const novo_disco = document.createElement("div");
    novo_disco.classList.add("disco");
    return novo_disco;

}

function cria_tabuleiro(){

    const novo_tabuleiro =  document.createElement("div");
        novo_tabuleiro.classList.add("tabuleiro");
        novo_tabuleiro.style.background = "lighgreen";
        novo_tabuleiro.style.minHeight = "25px";
        return novo_tabuleiro;
}