// FACEBOOK

if (navigator.share !== undefined){
    navigator.share({
        title: "Jogo - Valores J&F",
        text:"Teste seus conhecimentos sobre os valores J&F",
        url:"https://jogovalores-e3h7.onrender.com"
    })
    .then(() => console.log("Successful share"))
    .catch((error) => console.log("Error sharing"))
}