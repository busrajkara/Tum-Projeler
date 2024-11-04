// index.js

document.addEventListener("DOMContentLoaded", () => {
    const loginCards = document.querySelectorAll(".login-card");

    // Her kartı belirli bir gecikmeyle gösterir
    loginCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = 1;  // Kartı görünür yapar
            card.style.transform = "translateY(0)"; // Kartı yukarıdan aşağı kaydırır
        }, index * 200);  // Her kart için 200ms aralık bırakır
    });
});
