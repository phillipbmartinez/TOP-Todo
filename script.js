const createTodoButton = document.querySelector("#createTodoButton");
const clearTodoButton = document.querySelector("#clearTodoButton");
let todoList = [];

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
    todoList.push(newTodo); // Add to array for now for testing, will use local storage
    console.log(newTodo.info());

};

// Creat todo, logs to console for now
createTodoButton.addEventListener("click", (event) => {
    event.preventDefault();
    createTodo();
})

// Clear form
clearTodoButton.addEventListener("click", () => {
    document.getElementById("newTodoForm").reset();
});