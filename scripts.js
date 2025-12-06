const textos = [

  "Aprender a digitar é essencial. Comece com práticas diárias.",
  "As crianças correm descalças na areia da praia, enquanto o sol se põe lentamente no horizonte dourado ao longe.",
  "Na tranquila tarde de verão, o vento suave balança as árvores, enquanto as flores exalam um doce perfume que enche o ar ao redor do jardim perfumado.",
  "Sob o céu estrelado da noite, os animais da floresta começam a se recolher em suas tocas, enquanto os grilos cantam sua sinfonia noturna, acompanhados pelo suave murmúrio do riacho que serpenteia entre as pedras.",
  "No coração da cidade agitada, o trânsito flui incessantemente, enquanto as luzes dos prédios brilham intensamente, refletindo-se nas águas calmas do rio que corta a metrópole, criando um cenário urbano de beleza única, onde o caos e a serenidade se encontram harmoniosamente.",

];


let contadorCerto = 0;
let contadorErrado = 0;
let intervaloTempo;
let tempoRestante = 60;
let textAtual = ''

const elementoEntrada = document.getElementById('entrada');
const elementoTexto = document.getElementById('texto');
const spanCerto = document.getElementById('contador-certo');
const spanErrado = document.getElementById('contador-errado');
const spanTempo = document.getElementById('contador-tempo');



function iniciarContadorTempo() {

    if(intervaloTempo) clearInterval(intervaloTempo)
    
    tempoRestante = 60
    spanTempo.textContent = tempoRestante

    intervaloTempo = setInterval(() => {
        tempoRestante--
        spanTempo.textContent = tempoRestante

        if(tempoRestante <= 0){
            clearInterval(intervaloTempo)
            verificarResultado()
        }
    },1000)

}

function verificarResultado() {

    const porcetagemCerta = contadorCerto / textAtual.length

    if(porcetagemCerta >= 0.8) {
        alert(`Parabéns! Você foi aprovado`)
    } else{
        alert('Tente novamente')
    }

    resetar()

}

function resetar(){

    
    elementoEntrada.value = ''
    elementoEntrada.disabled = true

    clearInterval(intervaloTempo)

    spanCerto.textContent = '0'
    spanErrado.textContent = '0'
    spanTempo.textContent = '60'
    
    tempoRestante = 60
    contadorCerto = 0
    contadorErrado = 0
    

    Array.from(elementoTexto.children).forEach(span => {
        span.classList.remove('certo', 'errado');
    });
    
    elementoTexto.innerHTML = 'Escolha um nível para começar.';
}

function mudarNivel(nivel){

    resetar()

    textAtual = textos[nivel - 1]
    elementoTexto.innerHTML = textAtual.split('').map(char => `<span>${char}</span>`).join('')

    document.getElementById('entrada').disabled = false  
   

}

elementoEntrada.addEventListener('input', function(){

    if(tempoRestante === 60) iniciarContadorTempo()

    const entradaTexto = this.value

    if(entradaTexto.length > textAtual.length ){

        this.value = entradaTexto.substring(0,textAtual.length)
        return
    }

    contadorCerto = 0
    contadorErrado = 0

    Array.from(elementoTexto.children).forEach((span,index) => {

        if (index < entradaTexto.length) {
            
        if (entradaTexto[index] == span.textContent) {
            span.classList.add('certo')
            span.classList.remove('errado')

            contadorCerto++
            
        } else {
            span.classList.add('errado')
            span.classList.remove('certo')

            contadorErrado++
            
        }
        } else {
            span.classList.remove('certo','errado')
        }

      

    })

    spanCerto.textContent = contadorCerto
    spanErrado.textContent = contadorErrado

    if(entradaTexto.length == textAtual.length){
        verificarResultado()
    }

})