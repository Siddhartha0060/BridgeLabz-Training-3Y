const message = document.getElementById("message");
const counter = document.getElementById("counter");
const resetButton = document.getElementById("resetButton");

const maximumCharacters = 100;

// Update the character counter
function updateCounter() {

    const remaining = maximumCharacters - message.value.length;

    counter.textContent = remaining + " characters remaining";

    counter.classList.remove("warning", "full");

    if (remaining <= 20 && remaining > 0) {
        counter.classList.add("warning");
    }

    if (remaining === 0) {
        counter.classList.add("full");
    }
}

// Update counter when user types
message.addEventListener("input", updateCounter);

// Prevent typing more than 100 characters
message.addEventListener("keydown", function(event) {

    if (
        message.value.length >= maximumCharacters &&
        event.key.length === 1 &&
        !event.ctrlKey &&
        !event.metaKey
    ) {
        event.preventDefault();
    }
});

// Reset the text
resetButton.addEventListener("click", function() {

    message.value = "";

    updateCounter();
});

// Display the initial counter
updateCounter();