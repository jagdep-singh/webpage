document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector(".main-button");
    const clearButton = document.querySelector(".clear-button");
    const textElement = document.getElementById("text");

    button.addEventListener("click", function() {
        textElement.textContent = "What did u think would happen🤣🤣";
    });

    clearButton.addEventListener("click", function() {
        textElement.textContent = "";
    });
});
