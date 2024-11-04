document.addEventListener("DOMContentLoaded", () => {
    const target = 100; // Hedef değer
    let progress = 0;

    const progressText = document.getElementById("progress");
    const progressBar = document.getElementById("progress-fill");
    const result = document.getElementById("result");
    const tokens = document.querySelectorAll(".token");
    const playButton = document.getElementById("play-button");

    function updateProgress(value) {
        progress += value;
        progressText.textContent = progress;
        progressBar.style.width = `${Math.min(progress, target)}%`;

        if (progress === target) {
            result.textContent = "Tebrikler! Tam hedefi tutturdunuz!";
            disableButtons();
        } else if (progress > target) {
            result.textContent = "Maalesef hedefi aştınız, oyunu kaybettiniz.";
            disableButtons();
        }
    }

    function disableButtons() {
        tokens.forEach(token => {
            token.disabled = true;
        });
    }

    function resetGame() {
        progress = 0;
        progressText.textContent = progress;
        progressBar.style.width = "0";
        result.textContent = "";
        tokens.forEach(token => {
            token.disabled = false;
        });
    }

    tokens.forEach(token => {
        token.addEventListener("click", () => {
            const value = parseInt(token.getAttribute("data-value"));
            updateProgress(value);
        });
    });

    playButton.addEventListener("click", resetGame);
});
