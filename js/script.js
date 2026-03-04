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
const contador = document.getElementById("contador");
if (contador) {
    const dataInicio = new Date("2025-06-07");

    setInterval(() => {
        const hoje = new Date();
        const diff = hoje - dataInicio;

        const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
        contador.innerText = `Estamos juntos há ${dias} dias 💖`;
    }, 1000);
}
