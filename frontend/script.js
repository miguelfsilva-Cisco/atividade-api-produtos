async function carregarDados() {
    try {
        const url = "https://localhost:3000/";
        const resposta = await fetch(url);
        const produtos = await resposta.json();
        const areaProdutos = document.getElementById("lista-produtos");
        areaProdutos.innerHTML = "";
        console.log(produtos);
    } catch (erro) {
        console.error("Erro ao buscar dados da API:", erro);
    }
}
window.addEventListener("DOMContentLoaded", carregarDados);