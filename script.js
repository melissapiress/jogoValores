// ---------------- Valores ------------------
selecionaCarta()
let timerInterval = setInterval(contagemRegressiva, 1000);

let elementoTimer = document.querySelector('div.timer h1');
let tempoRestante = 75;
let pontuacao = 0;

if (pontuacao < 0){
    pontuacao = 0;
}

// funções

function abrirDialogo() {
document.getElementById('myDialog').showModal();
document.getElementById('myDialog').style.display='flex'
}

function fecharDialogo() {
document.getElementById('myDialog').close();
}

function selecionaCarta(){
    var cards = window.document.querySelectorAll('div.card-1')
    cards.forEach(card =>{
        card.addEventListener('click', () => {
            if (card.classList.contains('selecionado')) {
                card.classList.remove('selecionado')
                if (card.classList.contains('correto')){
                    pontuacao -= 1;
                    console.log(pontuacao);
                } else {
                    pontuacao += 1;
                    console.log(pontuacao)
                }
            } 
            else {
                card.classList.add('selecionado')
                if (card.classList.contains('correto')){
                    pontuacao += 1;
                    console.log(pontuacao)
                } else {
                    pontuacao -= 1;
                    console.log(pontuacao)
                }
            }
        })
    })
}

function contagemRegressiva(){
    let tempoFomatado= `00:${tempoRestante < 10 ? '0' : ''}${tempoRestante}`;
    elementoTimer.textContent = tempoFomatado;

    if (tempoRestante <= 10) {
        elementoTimer.classList.add('vermelho');
    }

    if (tempoRestante > 0) {
        tempoRestante--;
    } else {

        clearInterval(timerInterval);
    }
}



// ----------------------- POST ----------------------------