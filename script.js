function toggleLike(button) {
    button.classList.toggle('liked');
}
const cartItems = document.querySelector('.cart-items');
let itemCount = 0;

function addToCart(productName, price) {
    const li = document.createElement('li');
    li.innerHTML = `${productName}: R$ ${price.toFixed(2)}`;
    cartItems.appendChild(li);
    itemCount++;
    updateCartCount();
}

function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    cartCount.textContent = itemCount;
}

document.querySelectorAll('.product button').forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.parentNode.querySelector('h2').textContent;
        const price = parseFloat(this.parentNode.querySelector('p').textContent.slice(3));
        addToCart(productName, price);
    });
});

const checkoutBtn = document.querySelector('.checkout-btn');
checkoutBtn.addEventListener('click', () => {
    alert('Compra finalizada!');
});

const modeSwitch = document.getElementById("mode-switch");
const header = document.querySelector("header");
const footer = document.querySelector('#footer');

modeSwitch.addEventListener("change", function() {
    if (modeSwitch.checked) {
        header.classList.remove("dark-mode");
        header.classList.add("light-mode");
        footer.classList.add('light-mode');
        footer.classList.remove('dark-mode');
    } else {
        header.classList.remove("light-mode");
        header.classList.add("dark-mode");
        footer.classList.add('dark-mode');
        footer.classList.remove('light-mode');
    }
});

let slideIndex = 0;

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Muda a imagem a cada 3 segundos
}
showSlides();