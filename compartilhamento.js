function copiarLink() {
    let link = "Testei o meu conhecimento sobre os valores do grupo com esse jogo. Teste você também! https://jogovalores-e3h7.onrender.com";
    navigator.clipboard.writeText(link).then(() => {
        alert("Link copiado!");
    });
}