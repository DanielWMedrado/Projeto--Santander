const scrollWrapper = document.querySelector('.scroll-wrapper');
const items = document.querySelectorAll('.cards.carousel-item');
let currentIndex = 0;
const itemWidth = items[0].offsetWidth + 18; // Considerando a largura do item e a margem entre eles

function scrollLeft1() {
    if (currentIndex > 0) {
        currentIndex--;
        updateScroll();
    }
}

function scrollRight() {
    if (currentIndex < items.length - 6) {
        currentIndex++;
        updateScroll();
    }
}

function updateScroll() {
    const offset = -currentIndex * itemWidth;
    scrollWrapper.style.transform = `translateX(${offset}px)`;

    // Habilitar ou desabilitar o botão scroll-left
    const prevButton = document.querySelector('.prev');
    prevButton.disabled = currentIndex === 0; // Desabilita o botão quando o índice atual é 0
}