// ---------------- Valores ------------------


let pontuacaoPorValor = 0;
let pontuacao = 0;
document.addEventListener("DOMContentLoaded", () => {
recuperarPontos()
contagemRegressiva()
})

var cards = window.document.querySelectorAll('div.card-1')


cards.forEach(card =>{
    card.addEventListener('click', () => {
        if (card.classList.contains('selecionado')) {
            card.classList.remove('selecionado')
            if (card.classList.contains('correto')){
                pontuacaoPorValor -= 1;
                pontuacao -= 1
                
            } else {
                pontuacao+=1
                pontuacaoPorValor += 1;
                
            }
        }  
        else {
            card.classList.add('selecionado')
            if (card.classList.contains('correto')){
                pontuacaoPorValor += 1;
                pontuacao+=1
                console.log(pontuacaoPorValor)
                console.log(pontuacao)
            } else {
                pontuacaoPorValor -= 1;
                pontuacao-=1
                console.log(pontuacaoPorValor)
            }
        }
        sessionStorage.setItem('pontuacao', pontuacao) 
    })
})

let botaoFinal = document.querySelector('.botao-final');

botaoFinal.addEventListener('click', () => {
    // sessionStorage.removeItem('horaInicio')
    sessionStorage.clear()
} )


// funções

function recuperarPontos() {
    if (sessionStorage.getItem('pontuacao')) {
        pontuacao = Number(sessionStorage.getItem('pontuacao'));
    } else {
        sessionStorage.getItem('pontuacao');
    }
}

function abrirDialogo() {
    document.getElementById('myDialog').showModal();
    document.getElementById('myDialog').style.display='flex'
}

function fecharDialogo() {
    document.getElementById('myDialog').close();
}


function contagemRegressiva(){
    if (!sessionStorage.getItem('horaInicio')) {
        sessionStorage.setItem('horaInicio', Date.now());
    }

    const intervaloTimer = setInterval(function() {
        const tempoDecorrido = Date.now() - sessionStorage.getItem('horaInicio');
        const tempoRestante = 600000 - tempoDecorrido; // 10 minutos = 600.000 ms
        
        if (tempoRestante <= 0) {
            window.location.href = '/final.html';  
            clearInterval(intervaloTimer);

        } else {
            const minutos = Math.floor(tempoRestante / 60000);
            const segundos = Math.floor((tempoRestante % 60000) / 1000);
            document.querySelector('.timer h1').innerText = `${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;
        }
    }, 1000); // Atualiza a cada segundo

    
}




