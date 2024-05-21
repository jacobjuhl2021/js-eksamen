        
        
// Hent opgaver fra local storage, eller opret en tom liste
var todos = JSON.parse(localStorage.getItem("todos")) || [];

// Funktion til at vise opgaver
function visOpgaver() {
    var todoList = document.getElementById("todoList");
    // Ryd eksisterende listeelementer
    todoList.innerHTML = "";
    // Gennemgå opgaver og tilføj dem til listen
    todos.forEach(function(todo, index) {
        var listItem = document.createElement("li");
        listItem.textContent = todo;
        // Tilføj slet-knap til hver opgave
        var sletButton = document.createElement("button");
        sletButton.textContent = "Slet";
        sletButton.onclick = function() {
            sletOpgave(index);
        };
        listItem.appendChild(sletButton);
        todoList.appendChild(listItem);
    });
}

// Funktion til at tilføje en opgave
function tilføjOpgave(opgave) {
    todos.push(opgave);
    localStorage.setItem("todos", JSON.stringify(todos));
    visOpgaver();
}

// Funktion til at slette en opgave
function sletOpgave(index) {
    todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(todos));
    visOpgaver();
}

// Tilføj event listener til formular
document.getElementById("todoForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Forhindrer formular i at blive sendt
    var opgaveInput = document.getElementById("todo").value.trim(); // Hent værdien fra inputfeltet
    if (opgaveInput !== "") {
        tilføjOpgave(opgaveInput); // Tilføj opgave
        document.getElementById("todo").value = ""; // Ryd inputfeltet
    } else {
        alert("Venligst indtast en opgave."); // Vis fejl, hvis inputfeltet er tomt
    }
});

// Viser opgaver når siden indlæses
visOpgaver();