const createTodoButton = document.querySelector("#createTodoButton");
const clearTodoButton = document.querySelector("#clearTodoButton");
let tempTodoList = [
    { title: "Test1", description: "Testing local storage", dueDate: "2024-08-30", priority: "Low", list: "N/A" },
    { title: "Test2", description: "Testing local storage", dueDate: "2024-09-05", priority: "High", list: "N/A" },
];

let todoList = JSON.parse(localStorage.getItem("tempTodoList")) || [];
console.log(todoList);

class Todo {
    constructor(title, description, dueDate, priority, list) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.list = list;
        this.progress = "Not Started";
    }

    info() {
        return `TODO Data Points:\n title: ${this.title},\n description: ${this.description},\n due date: ${this.dueDate},\n priority: ${this.priority},\n list: ${this.list}`
    }
};

// Function to validate the two required fields
function validateInputs(title, description) {
    if (title === "" && description === "") {
        alert("A title and description are required.")
    } else if (title === "" && description !== "") {
        alert("A title is required.")
    } else if (title !== "" && description === "") {
        alert("A description is required.")
    }
    return null; // No errors
};

function createTodo() {
    const title = document.querySelector("#title").value.trim();
    const description = document.querySelector("#description").value.trim();
    const dueDate = document.querySelector("#dueDate").value.trim();
    const priority = document.querySelector("#priority").value.trim();
    const list = document.querySelector("#list").value.trim();

    // Validate inputs
    const errorMessage = validateInputs(title, description);
    if (errorMessage) {
        alert(errorMessage);
        return;
    }

    // Create new Todo item and log it to the console
    const newTodo = new Todo(title, description, dueDate, priority, list);
    todoList.push(newTodo);
    localStorage.setItem("tempTodoList", JSON.stringify(todoList));
    console.log(todoList);
};

// Create todo, logs to console for now
createTodoButton.addEventListener("click", (event) => {
    event.preventDefault();
    createTodo();
});

// Clear form
clearTodoButton.addEventListener("click", () => {
    document.getElementById("newTodoForm").reset();
});

function deleteListItem(pos) {
    // Retrieve and parse the existing list from localStorage
    let todoList = JSON.parse(localStorage.getItem("tempTodoList")) || [];

    // Ensure the position is within the bounds of the array
    if (pos >= 0 && pos < todoList.length) {
        // Remove the item at the specified position
        todoList.splice(pos, 1);

        // Save the updated list back to localStorage
        localStorage.setItem("tempTodoList", JSON.stringify(todoList));
    } else {
        console.error("Position out of bounds");
    }
};