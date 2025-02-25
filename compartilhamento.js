function copiarLink() {
    let link = "https://jogovalores-e3h7.onrender.com";
    navigator.clipboard.writeText(link).then(() => {
        alert("Link copiado!");
    });
}