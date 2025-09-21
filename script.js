''
document.addEventListener("DOMContentLoaded", function() {
    // Arrays de mensagens
    const dicas = [
        "Um pequeno passo todos os dias leva a grandes resultados! 🌟",
        "Seu corpo é seu templo, cuide bem dele com carinho. 💖",
        "Movimente-se hoje para ter mais saúde amanhã. 🌅",
        "A idade é apenas um número. A disposição é uma escolha! ✨",
        "Nunca é tarde para começar a se cuidar. Comece agora! 🚀",
        "Cada movimento conta. Celebre suas pequenas conquistas! 🎉",
        "Respire fundo e sinta a energia do seu corpo. 🌬️",
        "A dança é a linguagem da alma. Deixe seu corpo falar! 💃",
        "Um alongamento pela manhã pode mudar seu dia inteiro. ☀️",
        "Caminhar é uma forma de meditação em movimento. 🚶‍♀️"
    ];

    const lembretes = [
        "Que tal fazer uma caminhada de 10 minutos agora? 🚶‍♂️",
        "Hora de alongar os braços e as pernas! 🤸‍♀️",
        "Respire fundo 5 vezes e sinta-se renovado(a). 🫁",
        "Coloque uma música e dance por alguns minutos! 🎵",
        "Levante-se e faça alguns movimentos suaves. 🌸",
        "Beba um copo d'água e faça um alongamento. 💧",
        "Que tal subir e descer alguns degraus? 🪜",
        "Mova os ombros em círculos para relaxar. 🔄",
        "Faça alguns exercícios de respiração profunda. 🧘‍♀️",
        "Caminhe pela casa por alguns minutos. 🏠"
    ];

    // Elementos do DOM
    const dicaBtn = document.getElementById("dica-btn");
    const lembreteBtn = document.getElementById("lembrete-btn");
    const dicaTexto = document.getElementById("dica-texto");
    const diminuirBtn = document.getElementById("diminuir-btn");
    const aumentarBtn = document.getElementById("aumentar-btn");
    const contadorMinutos = document.getElementById("contador-minutos");
    const parabensMsg = document.getElementById("parabens-msg");

    // Variável para controlar os minutos
    let minutos = 0;

    // Função para mostrar dica motivacional
    dicaBtn.addEventListener("click", function() {
        const randomIndex = Math.floor(Math.random() * dicas.length);
        dicaTexto.textContent = dicas[randomIndex];
        dicaTexto.style.display = "flex";
        
        // Efeito de animação
        dicaTexto.style.opacity = "0";
        setTimeout(() => {
            dicaTexto.style.opacity = "1";
        }, 100);
    });

    // Função para mostrar lembrete de exercício
    lembreteBtn.addEventListener("click", function() {
        const randomIndex = Math.floor(Math.random() * lembretes.length);
        dicaTexto.textContent = lembretes[randomIndex];
        dicaTexto.style.display = "flex";
        
        // Efeito de animação
        dicaTexto.style.opacity = "0";
        setTimeout(() => {
            dicaTexto.style.opacity = "1";
        }, 100);
    });

    // Função para diminuir minutos
    diminuirBtn.addEventListener("click", function() {
        if (minutos > 0) {
            minutos--;
            contadorMinutos.textContent = minutos;
            verificarMeta();
        }
    });

    // Função para aumentar minutos
    aumentarBtn.addEventListener("click", function() {
        minutos++;
        contadorMinutos.textContent = minutos;
        verificarMeta();
    });

    // Função para verificar se atingiu a meta
    function verificarMeta() {
        if (minutos >= 30) {
            parabensMsg.classList.remove("parabens-hidden");
        } else {
            parabensMsg.classList.add("parabens-hidden");
        }
    }

    // Inicializar mensagem vazia
    dicaTexto.style.display = "none";

    // Adicionar efeitos de transição suaves
    dicaTexto.style.transition = "opacity 0.3s ease";
});
''
