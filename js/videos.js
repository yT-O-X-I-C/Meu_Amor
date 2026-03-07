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