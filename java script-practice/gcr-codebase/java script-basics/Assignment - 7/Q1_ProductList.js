const productInput = document.getElementById("productInput");
const addButton = document.getElementById("addButton");
const productList = document.getElementById("productList");

// Function to add a product
function addProduct() {
    const productName = productInput.value.trim();

    if (productName === "") {
        alert("Please enter a product name.");
        return;
    }

    const listItem = document.createElement("li");

    const nameSpan = document.createElement("span");
    nameSpan.className = "product-name";
    nameSpan.textContent = productName;

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.className = "edit-button";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-button";

    listItem.append(nameSpan, editButton, deleteButton);
    productList.appendChild(listItem);

    productInput.value = "";
}

// Add button event
addButton.addEventListener("click", addProduct);

// Event delegation for Edit and Delete
productList.addEventListener("click", function(event) {

    const listItem = event.target.closest("li");

    if (!listItem) {
        return;
    }

    // Delete product
    if (event.target.classList.contains("delete-button")) {
        listItem.remove();
    }

    // Edit product
    if (event.target.classList.contains("edit-button")) {

        const nameSpan = listItem.querySelector(".product-name");

        if (listItem.querySelector("input")) {
            return;
        }

        const editInput = document.createElement("input");
        editInput.value = nameSpan.textContent;

        nameSpan.replaceWith(editInput);
        editInput.focus();

        // Save changes when input loses focus
        function saveEdit() {
            const newName = document.createElement("span");

            newName.className = "product-name";
            newName.textContent =
                editInput.value.trim() || "Unnamed product";

            if (editInput.parentNode) {
                editInput.replaceWith(newName);
            }
        }
        editInput.addEventListener("blur", saveEdit);
        // Save on Enter
        editInput.addEventListener("keydown", function(keyEvent) {
            if (keyEvent.key === "Enter") {
                editInput.blur();
            }
        });
    }
});