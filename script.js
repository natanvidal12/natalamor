const mensagem = `Meu amor ❤️

Para a pessoa que mudou tudo dentro de mim:
Desde que você chegou, meu mundo ficou mais calmo, mais bonito e mais verdadeiro.
Você não é só alguém que eu amo — você é o lugar onde meu coração descansa.

Neste Natal, eu não te entrego apenas um presente,
te entrego a promessa de continuar escolhendo você todos os dias,
mesmo quando a vida for difícil, mesmo quando o caminho não for fácil.

Obrigado por ser minha paz nos dias caóticos,
meu sorriso nos momentos simples
e meu lar em qualquer lugar.

Feliz Natal, meu amor 🎄❤️
Feliz 2 meses de nós.
Que seja só o começo de uma história linda.
Eu te amo mais do que consigo explicar.`;

let index = 0;
let modalAberto = false;

function abrirCarta() {
    const envelope = document.querySelector('.envelope');

    if (envelope.classList.contains('aberto')) return;

    envelope.classList.add('aberto');

    const texto = document.getElementById('texto');
    texto.innerHTML = '';
    index = 0;

    const intervalo = setInterval(() => {
        texto.innerHTML += mensagem[index];
        index++;
        if (index >= mensagem.length) clearInterval(intervalo);
    }, 40);
}



function criarPresente() {
    if (modalAberto) return;

    const presente = document.createElement("div");
    presente.classList.add("presente");
    presente.innerText = "🎁";

    presente.style.left = Math.random() * 100 + "vw";
    presente.style.animationDuration = (10 + Math.random() * 5) + "s";

    presente.onclick = (e) => {
        e.stopPropagation();
        abrirModal();
    };
    document.body.appendChild(presente);
    setTimeout(() => presente.remove(), 15000);
}

setInterval(criarPresente, 800);

const fotos = [
  "assets/WhatsApp Image 2025-11-26 at 13.43.03.jpeg",
  "assets/WhatsApp Image 2025-11-26 at 13.43.04 (2).jpeg",
  "assets/WhatsApp Image 2025-12-09 at 18.08.17.jpeg"
];

let indice = Math.floor(Math.random() * fotos.length);
let intervaloFotos;

function abrirModal() {
    const modal = document.getElementById("modalFotos");
    if (modal.style.display === "flex") return;

    modal.style.display = "flex";
    mostrarFotoAleatoria();
}




function trocarFoto() {
    document.getElementById("fotoAtual").src = fotos[indice];
    indice = (indice + 1) % fotos.length;
}

function fecharModal() {
    document.getElementById("modalFotos").style.display = "none";
}




function mostrarFotoAleatoria() {
    const img = document.getElementById("fotoAtual");
    const indiceAleatorio = Math.floor(Math.random() * fotos.length);
    img.src = fotos[indiceAleatorio];
}

let ultimaFoto = -1;

function mostrarFotoAleatoria() {
    let indiceAleatorio;
    do {
        indiceAleatorio = Math.floor(Math.random() * fotos.length);
    } while (indiceAleatorio === ultimaFoto);

    ultimaFoto = indiceAleatorio;
    document.getElementById("fotoAtual").src = fotos[indiceAleatorio];
}

