const mouseBox = document.getElementById("mouseBox");
const coordinates = document.getElementById("coordinates");

// Display mouse coordinates
mouseBox.addEventListener("mousemove", function(event) {

```
coordinates.textContent =
    "X: " + event.clientX + ", Y: " + event.clientY;
```

});

// Place a red dot on double-click
mouseBox.addEventListener("dblclick", function(event) {

```
const boxPosition = mouseBox.getBoundingClientRect();

const x = event.clientX - boxPosition.left;
const y = event.clientY - boxPosition.top;

const redDot = document.createElement("div");

redDot.className = "redDot";

redDot.style.left = x + "px";
redDot.style.top = y + "px";

mouseBox.appendChild(redDot);
```

});
