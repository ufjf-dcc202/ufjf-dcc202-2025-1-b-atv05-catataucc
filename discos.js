const tabuleiro = 
    ["preto",
    "preto",
    "preto",
    "transparente",
    "branco",
    "branco",
    "branco"];


export function get_tabuleiro() {
    return[...tabuleiro];
}

function mover(origem, destino) { 

    if(tabuleiro[destino] !== "transparente") return;
    if(Math.abs(destino-origem) > 2 ) return;
    if(destino-origem === 2 && tabuleiro[origem + 1 ] === "transparente"){
        return;
    }
    if(destino-origem === -2 && tabuleiro[origem - 1 ] === "transparente"){
        return;
    }

    tabuleiro[destino] = tabuleiro[origem];
    tabuleiro[origem] = "transparente";

}