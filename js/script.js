// ==========================
// SENHA
// ==========================

function verificarSenha() {
    const senha = document.getElementById("senha").value;

    const senhaCorreta = btoa("07062025");

    if (btoa(senha) === senhaCorreta) {
        window.location.href = "home.html";
    } else {
        alert("Data incorreta 😢");
    }
}

const campoSenha = document.getElementById("senha");

if (campoSenha) {
    campoSenha.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            verificarSenha();
        }
    });
}

// ==========================
// CONTADOR
// ==========================

function inicializarContador() {
    const contador = document.getElementById("contador");

    if (!contador) return;

    const dataInicio = new Date(2025, 5, 7);

    function atualizarContador() {
        const agora = new Date();
        const diff = Math.max(0, agora - dataInicio);

        const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
        const horas = Math.floor(diff / (1000 * 60 * 60)) % 24;
        const minutos = Math.floor(diff / (1000 * 60)) % 60;
        const segundos = Math.floor(diff / 1000) % 60;

        contador.innerHTML = `
            💖 Juntos há <br><br>
            <b>${dias}</b> dias,
            <b>${horas}</b> horas,
            <b>${minutos}</b> minutos e
            <b>${segundos}</b> segundos
        `;
    }

    atualizarContador();
    setInterval(atualizarContador, 1000);
}

document.addEventListener("DOMContentLoaded", inicializarContador);

// ==========================
// CORAÇÕES / FLORES
// ==========================

const heartsContainer = document.querySelector(".hearts");

if (heartsContainer) {
    const emojis = [
        "❤️", "💕", "💖", "💘", "💝",
        "😘", "😍", "🥰", "💞", "💗",
        "💓", "🌻", "🌹"
    ];

    setInterval(() => {
        if (document.hidden) return;

        const heart = document.createElement("div");

        heart.classList.add("heart");

        heart.innerHTML =
            emojis[Math.floor(Math.random() * emojis.length)];

        heart.style.left = Math.random() * 100 + "vw";

        heart.style.fontSize =
            Math.random() * 20 + 20 + "px";

        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 10000);

    }, 400);
}

// ==========================
// GALERIA INFINITA
// ==========================

const galeria = document.querySelector(".galeria");

if (galeria) {

    const imagensOriginais =
        Array.from(galeria.querySelectorAll("img"));

    if (imagensOriginais.length > 0) {

        const track = document.createElement("div");
        track.classList.add("galeria-track");

        imagensOriginais.forEach((img) => {
            track.appendChild(img.cloneNode(true));
        });

        imagensOriginais.forEach((img) => {
            const clone = img.cloneNode(true);
            clone.setAttribute("aria-hidden", "true");
            track.appendChild(clone);
        });

        galeria.innerHTML = "";
        galeria.appendChild(track);
    }
}

// ==========================
// LIGHTBOX
// ==========================

function iniciarLightbox() {

    const imagens =
        document.querySelectorAll(".galeria-track img");

    const lightbox =
        document.getElementById("lightbox");

    const lightboxImg =
        document.getElementById("lightbox-img");

    if (!lightbox || !lightboxImg) return;

    imagens.forEach((img) => {

        img.addEventListener("click", () => {

            lightbox.style.display = "flex";
            lightboxImg.src = img.src;

        });

    });

    lightbox.addEventListener("click", () => {
        lightbox.style.display = "none";
    });
}

document.addEventListener("DOMContentLoaded", iniciarLightbox);

// ==========================
// MÚSICA
// ==========================

const music = document.getElementById("bg-music");
const btn = document.getElementById("musicToggle");

if (music && btn) {

    const savedTime =
        localStorage.getItem("musicTime");

    if (savedTime) {
        music.currentTime = savedTime;
    }

    document.addEventListener("click", () => {

        music.play()
            .then(() => {
                btn.classList.add("playing");
            })
            .catch(() => {});

    }, { once: true });

    music.addEventListener("timeupdate", () => {

        localStorage.setItem(
            "musicTime",
            music.currentTime
        );

    });

    btn.addEventListener("click", () => {

        if (music.paused) {

            music.play();
            btn.classList.add("playing");

        } else {

            music.pause();
            btn.classList.remove("playing");

        }

    });

    // ==========================
    // NOTAS MUSICAIS
    // ==========================

    function createMusicNote() {

        const player =
            document.querySelector(".music-player");

        if (!player) return;

        const note =
            document.createElement("div");

        note.classList.add("music-note");

        const notes = ["🎵", "🎶"];

        note.innerHTML =
            notes[Math.floor(Math.random() * notes.length)];

        note.style.left =
            Math.random() * 40 + 10 + "px";

        note.style.top = "40px";

        player.appendChild(note);

        setTimeout(() => {
            note.remove();
        }, 2000);
    }

    setInterval(() => {

        if (!music.paused) {
            createMusicNote();
        }

    }, 900);
}

// ==========================
// MENSAGEM DE BOAS-VINDAS
// ==========================

function digitar(elemento, texto, velocidade = 80) {

    if (!elemento) return;

    let i = 0;
    elemento.innerHTML = "";

    function escrever() {

        if (i < texto.length) {

            elemento.innerHTML += texto.charAt(i);
            i++;

            setTimeout(escrever, velocidade);
        }
    }

    escrever();
}

// Exemplo:
digitar(
 document.getElementById("mensagem"),
 "Você é a melhor parte dos meus dias ❤️"
);

function atualizarContagemAniversario() {

    const elemento =
        document.getElementById("contagem-aniversario");

    if (!elemento) return;

    const aniversario =
        new Date(2026, 5, 7);

    const agora = new Date();

    const diferenca =
        aniversario - agora;

    if (diferenca <= 0) {

        elemento.innerHTML =
            "🎉 Hoje é nosso aniversário de 1 ano! ❤️";

        return;
    }

    const dias =
        Math.floor(
            diferenca / (1000 * 60 * 60 * 24)
        );

    elemento.innerHTML =
        `🎂 Faltam <strong>${dias}</strong> dias para nosso 1º aniversário ❤️`;
}

setInterval(atualizarContagemAniversario, 1000);
atualizarContagemAniversario();
