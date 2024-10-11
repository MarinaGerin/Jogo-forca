const palavras = ["javascript", "programacao"];
const letras = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let tentativasUsadas = 0;
let palavraSecreta, palavraOculta;
let jogando;

iniciarJogo();

function iniciarJogo() {
    console.log('Iniciando Jogo');
    let botoes = document.getElementById('botoes');
    botoes.innerHTML = '';
    letras.forEach((value, index) => {
        botoes.innerHTML += `<button id="btn-${value}" class="btn btn-outline-dark m-1" onclick="checarLetra('${value}')">${value}</button>`
    });
    
    jogando = true;
    tentativasUsadas = 0;
    palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)];
    palavraOculta = '';
    for (let i = 0; i < palavraSecreta.length; i++) {
        palavraOculta += '_ ';
    }
    document.querySelector('h2').innerHTML = palavraOculta;
    document.getElementById('btnReiniciar').classList.add('d-none');
    desenharForca();
}

function checarLetra(letra) {
    // console.log(letra);
    if (!jogando) return;
    let btn = document.getElementById('btn-'+letra);
    let achou = false;
    for (let i = 0; i < palavraSecreta.length; i++) {
        if (palavraSecreta[i] == letra.toLowerCase()) {
            achou = true;
            // 
        }
    }
    btn.classList.remove('btn-outline-dark');
    btn.classList.add(achou ? 'btn-primary': 'btn-danger')
    if (!achou) {
        tentativasUsadas += 1;
        desenharForca();
    }

}

function desenharForca() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 6;

    // base da forca
    ctx.beginPath();
    ctx.strokeStyle = '#006700';
    ctx.moveTo(20, canvas.height-10)
    ctx.lineTo(180, canvas.height-10);
    ctx.stroke();

    // poste 
    ctx.beginPath()
    ctx.strokeStyle = '#4e2708';
    ctx.moveTo(60, canvas.height-10);
    ctx.lineTo(60, 20);
    ctx.stroke();

    //trave
    ctx.beginPath();
    ctx.strokeStyle = '#4e2708';
    ctx.moveTo(57, 20);
    ctx.lineTo(123, 20);
    ctx.stroke();

    // corda
    ctx.beginPath();
    ctx.strokeStyle = '#4e2708'
    ctx.moveTo(120, 20);
    ctx.lineTo(120, 30);
    ctx.stroke();

    // trave diagonal
    ctx.beginPath();
    ctx.strokeStyle = '#4e2708'
    ctx.moveTo(80, 20);
    ctx.lineTo(60, 40);
    ctx.stroke()

    ctx.strokeStyle = '#000'
    ctx.lineWidth = 2


    // cabeça
    if (tentativasUsadas >= 1) {
        ctx.beginPath();
        ctx.arc(120, 45, 15, 0, Math.PI * 2)
        ctx.stroke();
    }

    //corpo
    if (tentativasUsadas >= 2) {
        ctx.beginPath();
        ctx.moveTo(120, 60);
        ctx.lineTo(120, 120);
        ctx.stroke();
    }

    // braço esquerdo
    if (tentativasUsadas >= 3) {
        ctx.beginPath();
        ctx.moveTo(120, 70);
        ctx.lineTo(100, 100);
        ctx.stroke();
    }

    // braço direito
    if (tentativasUsadas >= 4) {
        ctx.beginPath();
        ctx.moveTo(120, 70);
        ctx.lineTo(140, 100);
        ctx.stroke();
    }

    // perna esquerda
    if (tentativasUsadas >= 5) {
        ctx.beginPath();
        ctx.moveTo(120, 120);
        ctx.lineTo(100, 150);
        ctx.stroke();
    }

    // perna direita
    if (tentativasUsadas >= 6) {
        ctx.beginPath();
        ctx.moveTo(120, 120);
        ctx.lineTo(140, 150);
        ctx.stroke();
    }
}