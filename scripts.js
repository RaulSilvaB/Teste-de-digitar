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

function iniciarContadorTempo() {

    if(intervaloTempo) clearInterval(intervaloTempo)
    
    tempoRestante = 60
    document.getElementById('contador-tempo').textContent = tempoRestante

    intervaloTempo = setInterval(() => {
        tempoRestante--
        document.getElementById('contador-tempo').textContent = tempoRestante

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

    const elementoEntrada = document.getElementById('entrada')
    elementoEntrada.value = ''
    elementoEntrada.disable = true

    clearInterval(intervaloTempo)

    document.getElementById('contador-certo').textContent = '0'
    document.getElementById('contador-errado').textContent = '0'
    document.getElementById('contador-tempo').textContent = '60'
    
    tempoRestante = 60
    contadorCerto = 0
    contadorErrado = 0

    document.getElementById('texto').children.forEach(element => {
        span.classList.remove('certo','errado')
    });
}

function mudarnivel(nivel){

    
}