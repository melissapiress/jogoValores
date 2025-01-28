// ---------------- Valores ------------------
selecionaCarta()
let timerInterval = setInterval(contagemRegressiva, 1000);

let elementoTimer = document.querySelector('div.timer h1');
let tempoRestante = 40;

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
            } else {
            card.classList.add('selecionado')
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