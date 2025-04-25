const messageForm = document.getElementById('message-form');
const messageInput = document.getElementById('message-input');
const chatMessages = document.getElementById('chat-messages');

// Dicionário de respostas do bot
const responses = {
    "time": "Nosso time está entre os melhores do mundo, alcaçando o top 7 mundial em 2023 🔥. Nosso time é composto por: YEKINDAR (Mareks Galinskis), molodoy (Danil Golubenko), Hepa (Juan Borges), Sidde (Sidnei Macedo Pereira Filho), FalleN (Gabriel Toledo de Alcântara Sguario), KSCERATO (Kaike Silva Cerato) e Yuurih (Yuri Gomes dos Santos Boian)! ☕",

    "loja": "Você pode visitar nossa loja e comprar nossos produtos em https://www.furia.gg ou clicando na aba presente no cabeçalho acima! 🛒",

    "instagram": "Você pode seguir a FURIA no Instagram (@furiagg) e acompanhar todos nossos jogos mundialmente! 🌍",

    "partida": "Nossa última partida foi na PGL Bucharest 2025 contra a MongolZ, onde fomos superados por 2x0. Mas voltaremos mais fortes que nunca! 💪 ",

    "patrocinadores": "Nossos patrocinadores são: Adidas, Universidade Cruzeiro do Sul Virtual, Lenovo, Pokestars, Redbull e Hellmann's! 💜",

    "jogos": "Outros jogos que nossa equipe compete também são: PUBG, LOL, Rainbow 6, Valorant, Rocket League, Apex Legends, Free Fire e EA Sportts FC! 🎮"
};

// Função para adicionar mensagens ao chat
function appendMessage(sender, message) {
    const messageContainer = document.createElement('div');

    if (sender === 'user') {
        messageContainer.className = 'mensagem-usuario';
        const bubble = document.createElement('div');
        bubble.className = 'balao-mensagem usuario';
        bubble.textContent = message;
        messageContainer.appendChild(bubble);
    } else {
        messageContainer.className = 'mensagem-bot';

        const avatarDiv = document.createElement('div');
        avatarDiv.className = 'bot-avatar';
        const avatarImg = document.createElement('img');
        avatarImg.src = 'img/iconeBOT.png';
        avatarImg.alt = "Avatar do Bot";

        const bubble = document.createElement('div');
        bubble.className = 'balao-mensagem';
        bubble.textContent = message;

        avatarDiv.appendChild(avatarImg);
        messageContainer.appendChild(avatarDiv);
        messageContainer.appendChild(bubble);
    }

    chatMessages.appendChild(messageContainer);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Função para processar e responder a mensagem
function getBotResponse(message) {
    const userMessage = message.toLowerCase().trim();
    for (const keyword in responses) {
        if (userMessage.includes(keyword)) {
            return responses[keyword];
        }
    }
    return "Calma! Não consegui entender, você pode solicitar de novo?";
}

// Função de envio
function sendMessage() {
    const message = messageInput.value.trim();
    if (!message) return;

    appendMessage('user', message);
    messageInput.value = '';

    const botResponse = getBotResponse(message);
    setTimeout(() => {
        appendMessage('bot', botResponse);
    }, 500); // um delay bem legal
}

// Eventos do formulário
messageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    sendMessage();
});

// Script Rastro que segue o Mouse
document.addEventListener('mousemove', (e) => {
    const dot = document.createElement('div');
    dot.className = 'trail';
    dot.style.left = `${e.pageX}px`;
    dot.style.top = `${e.pageY}px`;

    document.body.appendChild(dot);

    // Remove o ponto após a animação
    setTimeout(() => {
        dot.remove();
    }, 500);
});
