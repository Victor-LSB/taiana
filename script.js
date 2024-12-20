// Array de imagens e mensagens
const images = ['imagem1.jpg', 'imagem2.jpg', 'imagem3.jpg', 'imagem4.jpg', 'imagem5.jpg', 'imagem6.jpg'];
const messages = ["Vai à merda, Taiana!", "Vai se fuder, Taiana!", "Taiana, vai tomar no seu cu", "Que seje", "Desgraça", "Tonhona"];

let currentIndex = 0;

// Função para mudar a imagem e a mensagem
function changeContent() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById('image').src = images[currentIndex];
    document.getElementById('message').textContent = messages[currentIndex];
}

// Adicionar evento de clique ao corpo da página
document.body.addEventListener('click', changeContent);

// Inicializar com a primeira imagem e mensagem
changeContent();