const lightButton = document.getElementById("lightButton");
const darkButton = document.getElementById("darkButton");
const blueButton = document.getElementById("blueButton");
const currentTheme = document.getElementById("currentTheme");

// Function to change the theme
function changeTheme(themeName) {

```
document.body.setAttribute("data-theme", themeName);

currentTheme.textContent =
    themeName.charAt(0).toUpperCase() + themeName.slice(1);
```

}

// Light theme
lightButton.addEventListener("click", function() {
changeTheme("light");
});

// Dark theme
darkButton.addEventListener("click", function() {
changeTheme("dark");
});

// Blue theme
blueButton.addEventListener("click", function() {
changeTheme("blue");
});
