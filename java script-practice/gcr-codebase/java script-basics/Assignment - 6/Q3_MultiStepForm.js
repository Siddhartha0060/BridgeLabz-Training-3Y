const steps = document.querySelectorAll(".step");

const stepNumber = document.getElementById("stepNumber");
const backButton = document.getElementById("backButton");
const nextButton = document.getElementById("nextButton");

const error = document.getElementById("error");
const summary = document.getElementById("summary");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

let currentStep = 0;

// Display the current step
function showStep() {

    steps.forEach(function(step, index) {
        step.classList.toggle("active", index === currentStep);
    });

    stepNumber.textContent = currentStep + 1;

    backButton.style.display =
        currentStep === 0 ? "none" : "inline-block";

    nextButton.textContent =
        currentStep === 2 ? "Submit" : "Next";

    error.textContent = "";
}

// Validate the current step
function isCurrentInputValid() {

    if (currentStep === 0) {
        return nameInput.value.trim() !== "";
    }

    if (currentStep === 1) {
        return emailInput.checkValidity() &&
               emailInput.value.trim() !== "";
    }

    return passwordInput.value.length >= 6;
}

// Next and Submit button
nextButton.addEventListener("click", function() {

    if (!isCurrentInputValid()) {

        if (currentStep === 0) {
            error.textContent = "Please enter your name.";
        } else if (currentStep === 1) {
            error.textContent = "Please enter a valid email.";
        } else {
            error.textContent =
                "Password must contain at least 6 characters.";
        }

        return;
    }

    if (currentStep < 2) {

        currentStep++;

        showStep();

    } else {

        document.getElementById("multiStepForm").style.display = "none";

        summary.innerHTML =
            "<h3>Form Completed</h3>" +
            "<p>Name: " + escapeText(nameInput.value) + "</p>" +
            "<p>Email: " + escapeText(emailInput.value) + "</p>" +
            "<p>Password: " +
            "*".repeat(passwordInput.value.length) + "</p>";

        stepNumber.parentElement.textContent = "Summary";
    }
});

// Back button
backButton.addEventListener("click", function() {

    if (currentStep > 0) {

        currentStep--;

        showStep();
    }
});

// Display user input as text, not HTML
function escapeText(value) {

    const element = document.createElement("div");

    element.textContent = value;

    return element.innerHTML;
}

// Show the first step
showStep();