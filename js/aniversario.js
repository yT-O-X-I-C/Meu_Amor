// ==========================
// CONFIGURAÇÕES E CONSTANTES
// ==========================
const DATA_ALVO = new Date(2025, 5, 7); // 07 de Junho de 2025

// ==========================
// LIBERAR APENAS EM 07/06/2026
// ==========================

function verificarBloqueio() {
    const hoje = new Date();
    const dataLiberacao = new Date(2026, 5, 7); // 07 de Junho de 2026

if (hoje < dataLiberacao) {
    document.documentElement.innerHTML = `
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>💖 Página Especial 💖</title>
            <style>
                html, body {
                    margin: 0;
                    padding: 0;
                    width: 100%;
                    height: 100vh;
                    background-color: #121212 !important;
                    font-family: 'Segoe UI', sans-serif;
                    color: white;
                    overflow: hidden;
                }
                .navbar-bloqueio {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    padding: 15px 20px;
                    box-sizing: border-box;
                    z-index: 9999;
                }
                .btn-voltar {
                    display: inline-flex;
                    align-items: center;
                    text-decoration: none;
                    color: white;
                    background: rgba(255, 255, 255, 0.1);
                    padding: 8px 16px;
                    border-radius: 20px;
                    font-weight: 600;
                    font-size: 0.9rem;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    transition: all 0.3s ease;
                }
                .btn-voltar:hover {
                    background: rgba(255, 255, 255, 0.2);
                    transform: translateY(-2px);
                }
                .conteudo-bloqueio {
                    width: 100%;
                    height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    text-align: center;
                    box-sizing: border-box;
                    padding: 20px;
                }
                h1 { font-size: 2rem; margin-bottom: 10px; }
                p { font-size: 1.2rem; opacity: 0.9; }
                strong { color: #ff4b5c; font-size: 1.4rem; display: block; margin-top: 15px; }
            </style>
        </head>
        <body>
            <header class="navbar-bloqueio">
                <a href="home.html" class="btn-voltar">⬅ Voltar para Home</a>
            </header>
            <div class="conteudo-bloqueio">
                <h1>💖 Página Especial 💖</h1>
                <p>Esta surpresa será desbloqueada em</p>
                <strong>07/06/2026 ❤️</strong>
            </div>
        </body>
    `;
    
    throw new Error("Página bloqueada até a data especificada.");
}
}

//verificarBloqueio()


// ==========================
// CONTADOR DE TEMPO
// ==========================
function atualizarContador() {
    const contador = document.getElementById("contador-aniversario");
    if (!contador) return;

    const agora = new Date();
    const diff = agora - DATA_ALVO;

    if (diff < 0) {
        contador.innerHTML = "O grande dia está chegando! ❤️";
        return;
    }

    // Cálculos matemáticos convertendo milissegundos
    const umSegundo = 1000;
    const umMinuto = umSegundo * 60;
    const umaHora = umMinuto * 60;
    const umDia = umaHora * 24;

    const dias = Math.floor(diff / umDia);
    const horas = Math.floor((diff % umDia) / umaHora);
    const minutos = Math.floor((diff % umaHora) / umMinuto);
    const segundos = Math.floor((diff % umMinuto) / umSegundo);

    contador.innerHTML = `
        ❤️ <strong>${dias.toLocaleString("pt-BR")}</strong> dias<br>
        ⏰ <strong>${horas.toString().padStart(2, '0')}</strong> horas<br>
        🕒 <strong>${minutos.toString().padStart(2, '0')}</strong> minutos<br>
        ⌛ <strong>${segundos.toString().padStart(2, '0')}</strong> segundos
    `;
}
setInterval(atualizarContador, 1000);
atualizarContador();

// ==========================
// NOSSA MÚSICA
// ==========================

const abrirVideo = document.getElementById("abrir-video");
const videoContainer = document.getElementById("video-container");
const nossoVideo = document.getElementById("nosso-video");

if (abrirVideo && videoContainer && nossoVideo) {

    abrirVideo.addEventListener("click", () => {

        videoContainer.classList.toggle("show");

        if(videoContainer.classList.contains("show")){

            abrirVideo.innerHTML = "❤️ Fechar Vídeo";

            setTimeout(() => {
                nossoVideo.play();
            }, 300);

        }else{

            abrirVideo.innerHTML = "▶ Ouvir Nossa História";

            nossoVideo.pause();
            nossoVideo.currentTime = 0;

        }
    });

}

// ==========================================
// SINCRONIZAR BARRA DO SPOTIFY COM O VÍDEO
// ==========================================
const videoPlayer = document.getElementById("nosso-video");
const barraProgresso = document.getElementById("spotifyProgress");
const textoTempoAtual = document.getElementById("timeCurrent");
const textoTempoTotal = document.getElementById("timeTotal");

if (videoPlayer && barraProgresso && textoTempoAtual && textoTempoTotal) {

    // Função auxiliar para formatar segundos em MM:SS
    function formatarTempo(segundos) {
        if (isNaN(segundos)) return "0:00";
        const minutos = Math.floor(segundos / 60);
        const segundosRestantes = Math.floor(segundos % 60);
        return `${minutos}:${segundosRestantes.toString().padStart(2, '0')}`;
    }

    // 1. Carrega a duração total assim que o vídeo estiver pronto
    videoPlayer.addEventListener("loadedmetadata", () => {
        textoTempoTotal.textContent = formatarTempo(videoPlayer.duration);
    });

    // Caso o vídeo já tenha carregado antes do script rodar
    if (videoPlayer.duration) {
        textoTempoTotal.textContent = formatarTempo(videoPlayer.duration);
    }

    // 2. Atualiza a barra e o cronômetro em tempo real durante o play
    videoPlayer.addEventListener("timeupdate", () => {
        const atual = videoPlayer.currentTime;
        const total = videoPlayer.duration;

        if (total > 0) {
            // Calcula a porcentagem assistida
            const porcentagem = (atual / total) * 100;
            barraProgresso.style.width = `${porcentagem}%`;
        }

        // Atualiza o texto do tempo atual (ex: 0:15)
        textoTempoAtual.textContent = formatarTempo(atual);
    });
}


// ==========================
// CHUVA DE CORAÇÕES
// ==========================
function criarChuvaDeCoracoes(qtd = 1) {
    const heartsContainer = document.querySelector(".hearts");
    if (!heartsContainer) return;

    const emojis = ["❤️", "💕", "💖", "💘", "💝", "💞", "🌹", "🥰"];

    for (let i = 0; i < qtd; i++) {
        setTimeout(() => {
            const heart = document.createElement("div");
            heart.classList.add("heart");
            
            heart.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
            heart.style.left = `${Math.random() * 100}vw`;
            heart.style.fontSize = `${20 + Math.random() * 25}px`;
            
            // Variabilidade na velocidade da animação CSS (opcional, se usar no CSS)
            heart.style.animationDuration = `${5 + Math.random() * 5}s`; 

            heartsContainer.appendChild(heart);

            // Remove o elemento após o fim da animação para não pesar o navegador
            setTimeout(() => heart.remove(), 8000);
        }, i * 100);
    }
}

// Chuva contínua suave (apenas com a aba visível)
setInterval(() => {
    if (!document.hidden) criarChuvaDeCoracoes(1);
}, 600);

// ==========================
// INTERAÇÃO DA SURPRESA
// ==========================
const btnSurpresa = document.getElementById("abrir-surpresa");
const surpresa = document.getElementById("surpresa");

if (btnSurpresa && surpresa) {
    btnSurpresa.addEventListener("click", () => {
        surpresa.classList.remove("hidden");
        surpresa.style.display = "block"; // Garante a exibição dependendo do seu CSS
        criarChuvaDeCoracoes(50);
        btnSurpresa.innerHTML = "❤️ Eu Te Amo ❤️";
        btnSurpresa.disabled = true;
    });
}

// ==========================
// LIGHTBOX DAS FOTOS (Otimizado com Event Delegation)
// ==========================
const galeria = document.querySelector(".galeria-aniversario");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

if (galeria && lightbox && lightboxImg) {
    // Escuta o clique na galeria inteira, mas só age se for em uma imagem
    galeria.addEventListener("click", (e) => {
        if (e.target.tagName === "IMG") {
            lightbox.style.display = "flex";
            lightboxImg.src = e.target.src;
        }
    });

    lightbox.addEventListener("click", () => {
        lightbox.style.display = "none";
    });
}


