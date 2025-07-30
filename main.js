const eH1 = document.querySelector("h1");
eH1.textContent = "olá mundo!";


const eTabuleiro = cria_tabuleiro();
document.body.append(eTabuleiro);

function cria_tabuleiro(){

    const novo_tabuleiro =  document.createElement("div");
        novo_tabuleiro.classList.add("tabuleiro");
        novo_tabuleiro.style.background = "lighgreen";
        novo_tabuleiro.style.minHeight = "25px";
        return novo_tabuleiro;
}