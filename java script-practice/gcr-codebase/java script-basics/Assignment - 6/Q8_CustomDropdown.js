const dropdown = document.getElementById("dropdown");
const dropdownButton = document.getElementById("dropdownButton");
const options = document.getElementById("options");
const selectedCourse = document.getElementById("selectedCourse");

// Open or close dropdown
dropdownButton.addEventListener("click", function() {

```
options.classList.toggle("show");
```

});

// Select an option using event delegation
options.addEventListener("click", function(event) {

```
if (event.target.classList.contains("option")) {

    const courseName = event.target.textContent;

    dropdownButton.textContent = courseName;

    selectedCourse.textContent =
        "Selected Course: " + courseName;

    options.classList.remove("show");
}
```

});

// Close dropdown when clicking outside
document.addEventListener("click", function(event) {

```
if (!dropdown.contains(event.target)) {

    options.classList.remove("show");
}
```

}, true);
