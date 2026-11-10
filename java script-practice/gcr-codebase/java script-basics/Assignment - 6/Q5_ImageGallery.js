const gallery = document.getElementById("gallery");
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");

// Open image in modal using event delegation
gallery.addEventListener("click", function(event) {

```
if (event.target.tagName === "IMG") {

    modalImage.src = event.target.src;

    modal.classList.add("active");
}
```

});

// Clicking inside the modal should not close it
modalImage.addEventListener("click", function(event) {
event.stopPropagation();
});

// Close modal when clicking outside the image
modal.addEventListener("click", function() {
modal.classList.remove("active");
});
