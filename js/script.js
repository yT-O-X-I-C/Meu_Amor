 // Senha (mude aqui para sua data)
 function verificarSenha() {
     const senha = document.getElementById("senha").value;
    if (senha === "07062025") {
         window.location.href = "home.html";
     } else {
         alert("Data incorreta 😢");
     }
}
 
 // Autoplay no celular
 document.addEventListener("click", function () {
     const audio = document.getElementById("bg-music");
     if (audio) {
         audio.play();
     }
 }, { once: true });
 
// Contador de tempo juntos
function inicializarContador() {
    const contador = document.getElementById("contador");

    if (!contador || contador.dataset.ready === "true") {
        return;
    }

    contador.dataset.ready = "true";
    const dataInicio = new Date(2025, 5, 7);

    function atualizarContador() {
        const agora = new Date();
        const diff = Math.max(0, agora - dataInicio);

        const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
        const horas = Math.floor(diff / (1000 * 60 * 60)) % 24;
        const minutos = Math.floor(diff / (1000 * 60)) % 60;
        const segundos = Math.floor(diff / 1000) % 60;
 
         contador.innerHTML =
            `💖 Juntos há <br><br>
            <b>${dias}</b> dias
            <b>${horas}</b> horas
            <b>${minutos}</b> minutos
            <b>${segundos}</b> segundos`;
    }

    atualizarContador();
    setInterval(atualizarContador, 1000);
}

inicializarContador();
document.addEventListener("DOMContentLoaded", inicializarContador);
 
 const heartsContainer = document.querySelector(".hearts");
 
 if (heartsContainer) {
    const emojis = ["❤️", "💕", "💖", "💘", "💝", "😘", "😍"];
 
     setInterval(() => {
         const heart = document.createElement("div");
         heart.classList.add("heart");
 
         // escolhe emoji aleatório
         heart.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
 
         // posição aleatória
         heart.style.left = Math.random() * 100 + "vw";
 
         // tamanho aleatório
         heart.style.fontSize = Math.random() * 20 + 20 + "px";
 
         heartsContainer.appendChild(heart);
 
         // remove depois de 10s
         setTimeout(() => {
             heart.remove();
         }, 10000);
     }, 400);
}

const galeria = document.querySelector(".galeria");
if (galeria) {
    const imagensOriginais = Array.from(galeria.querySelectorAll("img"));

    if (imagensOriginais.length > 0) {
        const track = document.createElement("div");
        track.classList.add("galeria-track");

        imagensOriginais.forEach((img) => {
            track.appendChild(img);
        });

        imagensOriginais.forEach((img) => {
            const clone = img.cloneNode(true);
            clone.setAttribute("aria-hidden", "true");
            track.appendChild(clone);
        });
 
        galeria.appendChild(track);
    }
}
 
 const imagens = document.querySelectorAll(".galeria img");
 const lightbox = document.getElementById("lightbox");
 const lightboxImg = document.getElementById("lightbox-img");
 
if (imagens.length > 0 && lightbox && lightboxImg) {
    imagens.forEach((img) => {
         img.addEventListener("click", () => {
             lightbox.style.display = "flex";
             lightboxImg.src = img.src;
         });
     });
 }
 
 if (lightbox) {
     lightbox.addEventListener("click", () => {
         lightbox.style.display = "none";
     });
 }
