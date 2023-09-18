// Esta função é responsável por alternar a classe 'liked' no botão de 'Curtir' para destacá-lo.
function toggleLike(button) {
    button.classList.toggle('liked');
}

// Aqui, selecionamos o elemento com a classe 'cart-items' para posteriormente adicionar itens ao carrinho.
const cartItems = document.querySelector('.cart-items');

// Esta variável rastreia a contagem total de itens no carrinho.
let itemCount = 0;

// A função 'addToCart' cria um novo item no carrinho com o nome do produto e o preço.
function addToCart(productName, price) {
    const li = document.createElement('li');
    li.innerHTML = `${productName}: R$ ${price.toFixed(2)}`;
    cartItems.appendChild(li);
    itemCount++;
    updateCartCount();
}

// A função 'updateCartCount' atualiza o contador de itens no carrinho.
function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    cartCount.textContent = itemCount;
}

// Aqui, usamos 'document.querySelectorAll' para selecionar todos os botões com a classe 'like-btn' em produtos.
document.querySelectorAll('.product button').forEach(button => {
    // Adicionamos um ouvinte de evento para cada botão que chama a função 'toggleLike' ao ser clicado.
    button.addEventListener('click', function() {
        // Aqui, obtemos o nome e o preço do produto com base nos elementos HTML próximos ao botão.
        const productName = this.parentNode.querySelector('h2').textContent;
        const price = parseFloat(this.parentNode.querySelector('p').textContent.slice(3));
        // Chamamos 'addToCart' para adicionar o produto ao carrinho.
        addToCart(productName, price);
    });
});

// Aqui, selecionamos o botão com a classe 'checkout-btn' e adicionamos um evento de clique para exibir um alerta.
const checkoutBtn = document.querySelector('.checkout-btn');
checkoutBtn.addEventListener('click', () => {
    alert('Compra finalizada!');
});

// Aqui, selecionamos o interruptor (switch) com o ID 'mode-switch'.
const modeSwitch = document.getElementById("mode-switch");

// Selecionamos os elementos do cabeçalho (header) e do rodapé (footer) com base em suas classes e IDs.
const header = document.querySelector("header");
const footer = document.querySelector('#footer');

// Adicionamos um ouvinte de evento ao interruptor (switch) para alternar entre os modos claro e escuro.
modeSwitch.addEventListener("change", function() {
    if (modeSwitch.checked) {
        // Se o interruptor estiver marcado (modo claro), adicionamos classes de 'light-mode'.
        header.classList.add("light-mode");
        header.classList.remove("dark-mode");
        footer.classList.add('light-mode');
        footer.classList.remove('dark-mode');
    } else {
        // Se o interruptor não estiver marcado (modo escuro), removemos as classes de 'light-mode'.
        header.classList.remove("light-mode");
        header.classList.add("dark-mode");
        footer.classList.add('dark-mode');
        footer.classList.remove('light-mode');
    }
});

// Esta parte do código é responsável por criar um carrossel de slides para as imagens.
let slideIndex = 0;

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Oculta todos os slides
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1; // Volta para o primeiro slide quando alcança o último
    }
    slides[slideIndex - 1].style.display = "block"; // Exibe o slide atual
    setTimeout(showSlides, 3000); // Chama recursivamente a função para avançar os slides a cada 3 segundos
}
showSlides(); // Inicializa o carrossel de slides
