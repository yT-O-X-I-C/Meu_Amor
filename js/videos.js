const videos = document.querySelectorAll("video");
const progressBars = document.querySelectorAll(".progress");

let currentVideo = null;

/* AUTOPLAY INTELIGENTE */

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

const video = entry.target;

if(entry.isIntersecting){

if(currentVideo && currentVideo !== video){
currentVideo.pause();
}

video.play();
currentVideo = video;

}else{

video.pause();

}

});

},{threshold:0.7});

videos.forEach(video=>{
observer.observe(video);
});

/* BARRA DE PROGRESSO */

videos.forEach((video,index)=>{

video.addEventListener("timeupdate",()=>{

if(video.duration){

const progress = (video.currentTime / video.duration) * 100;

progressBars[index].style.width = progress + "%";

}

});

});

/* BOTÃO DE SOM */

const soundBtns = document.querySelectorAll(".sound-btn");

soundBtns.forEach((btn,index)=>{

btn.addEventListener("click",()=>{

const video = videos[index];

video.muted = !video.muted;

btn.textContent = video.muted ? "🔇" : "🔊";

});

});

/* BOTÃO DE LIKE */

const likeBtns = document.querySelectorAll(".like-btn");

likeBtns.forEach(btn=>{

btn.addEventListener("click",()=>{

btn.classList.toggle("liked");

btn.textContent = btn.classList.contains("liked") ? "💖" : "❤️";

});

});

/* PAUSAR TODOS QUANDO TROCAR DE ABA */

document.addEventListener("visibilitychange",()=>{

if(document.hidden){

videos.forEach(video=>{
video.pause();
});

}

});

/* CORAÇÕES SUBINDO AO CLICAR */

const videoCards = document.querySelectorAll(".video-card");

videoCards.forEach(card => {

card.addEventListener("click", (e) => {

const heart = document.createElement("div");

heart.classList.add("heart");

heart.innerHTML = "❤️";

/* posição do clique */

const rect = card.getBoundingClientRect();

heart.style.left = (e.clientX - rect.left) + "px";
heart.style.top = (e.clientY - rect.top) + "px";

card.appendChild(heart);

/* remover depois da animação */

setTimeout(()=>{
heart.remove();
},1800);

});

});

const music = document.getElementById("bg-music");
const btn = document.getElementById("musicToggle");

/* continuar música entre páginas */

if(localStorage.getItem("musicTime")){
music.currentTime = localStorage.getItem("musicTime");
}

/* autoplay automático */

window.addEventListener("load",()=>{

music.play().catch(()=>{});

});

/* salvar tempo da música */

setInterval(()=>{

localStorage.setItem("musicTime",music.currentTime);

},1000);

/* botão ligar/desligar */

btn.addEventListener("click",()=>{

if(music.paused){

music.play();
btn.classList.add("playing");

}else{

music.pause();
btn.classList.remove("playing");

}

});

btn.classList.add("playing");

/* NOTAS MUSICAIS ANIMADAS */

function createMusicNote(){

const player = document.querySelector(".music-player");

const note = document.createElement("div");

note.classList.add("music-note");

const notes = ["🎵","🎶"];

note.innerHTML = notes[Math.floor(Math.random()*notes.length)];

note.style.left = Math.random()*40 + 10 + "px";
note.style.top = "40px";

player.appendChild(note);

setTimeout(()=>{
note.remove();
},2000);

}

/* gerar notas quando música estiver tocando */

setInterval(()=>{

if(!music.paused){

createMusicNote();

}

},900);
