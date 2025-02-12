// ---------------- Valores ------------------


let pontuacaoPorValor = 0;
let pontuacao = 0;

document.addEventListener("DOMContentLoaded", () => {
recuperarPontos()
contagemRegressiva()
contaPontos()
reiniciaJogo()
mostraFeedback()
})


const cards = window.document.querySelectorAll('div.card-1');
const botaoFinal = document.querySelector('.botao-final');
const dialogoPontos = document.getElementById('pontos')
const finalPontos = document.getElementById('pontos-final')
const pFeedback = document.getElementById('feedback')

// funções

function recuperarPontos() {
    if (sessionStorage.getItem('pontuacao')) {
        pontuacao = Number(sessionStorage.getItem('pontuacao'));
    } else {
        sessionStorage.getItem('pontuacao');
    }
}

function abrirDialogo() {
    document.getElementById('dialog').showModal();
    document.getElementById('dialog').style.display='block';
}

function fecharDialogo() {
    document.getElementById('dialog').close();
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
            sessionStorage.removeItem('horaInicio')
            clearInterval(intervaloTimer);
            
        } else {
            const minutos = Math.floor(tempoRestante / 60000);
            const segundos = Math.floor((tempoRestante % 60000) / 1000);
            document.querySelector('.timer h1').innerText = `${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;
        }
    }, 1000); // Atualiza a cada segundo
}

function reiniciaJogo(){
    botaoFinal.addEventListener('click', () => {
        sessionStorage.clear()
    })
    
}

function contaPontos(){
    cards.forEach(card =>{
        card.addEventListener('click', () => {
            if (card.classList.contains('selecionado')) {
                card.classList.remove('selecionado')
                if (card.classList.contains('correto')){
                    pontuacaoPorValor -= 10;
                    pontuacao -= 10;
                    
                } else {
                    pontuacao+=10;
                    pontuacaoPorValor += 10;
                
                }
            }  
            else {
                card.classList.add('selecionado')
                if (card.classList.contains('correto')){
                    pontuacaoPorValor += 10;
                    pontuacao+=10;
                } else {
                    pontuacaoPorValor -= 10;
                    pontuacao-=10;
                }
            }
            sessionStorage.setItem('pontuacao', pontuacao) 
            mostraPontos()
        })
    })
    
}

function mostraPontos(){
    dialogoPontos.innerText=`Você fez ${pontuacaoPorValor}/40 pontos!`
}

function mostraFeedback(){
    const pontuacaoFinal = sessionStorage.getItem('pontuacao');
    
    finalPontos.innerText =`${pontuacaoFinal} pontos!`
    if(pontuacaoFinal == 280){
        pFeedback.innerText='Parabéns! Você acertou tudo. Continue assim!'
    } else if (pontuacaoFinal >= 200){
        pFeedback.innerText='Parabéns! Você ganhou!'
    } else if (pontuacaoFinal >= 140){
        pFeedback.innerText = 'Você perdeu, mas acertou mais de 50%! Estude os valores um pouco mais e você conseguirá na próxima!'
    } else {
        pFeedback.innerText = 'Estude um pouco mais os valores, da próxima vez você conseguirá!'
    }
}








