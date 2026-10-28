const searchInput = document.getElementById("searchInput");
const studentTable = document.getElementById("studentTable");
const noResults = document.getElementById("noResults");

const studentRows = studentTable.querySelectorAll("tbody tr");

// Filter students while typing
searchInput.addEventListener("input", function() {

```
const searchText = searchInput.value.toLowerCase();

let visibleRows = 0;

studentRows.forEach(function(row) {

    const studentName =
        row.cells[1].textContent.toLowerCase();

    if (studentName.includes(searchText)) {

        row.style.display = "";

        visibleRows++;

    } else {

        row.style.display = "none";
    }
});

// Show message if no student matches
if (visibleRows === 0) {

    noResults.style.display = "block";

} else {

    noResults.style.display = "none";
}
```

});
