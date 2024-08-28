const createTodoButton = document.getElementById("createTodoButton");
const clearTodoButton = document.getElementById("clearTodoButton");

class Todo {
    constructor(title, description, dueDate, priority, list) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.list = list;
        this.progress = "Not Started";
        this.info = () => {
            return `TODO Data Points:\n title: ${this.title},\n description: ${this.description},\n due date: ${this.dueDate},\n priority: ${this.priority},\n list: ${this.list}`
        }
    }
};

function createTodo() {
    const titleInput = document.getElementById("title");
    const descriptionInput = document.getElementById("description");
    const dueDateInput = document.getElementById("dueDate");
    const priorityInput = document.getElementById("priority");
    const listInput = document.getElementById("list");

    const title = titleInput.value;
    const description = descriptionInput.value;
    const dueDate = dueDateInput.value;
    const priority = priorityInput.value;
    const list = listInput.value;

    if (title === "" && description === "") {
        alert("A title and description are required.")
    } else if (title === "" && description !== "") {
        alert("A title is required.")
    } else if (title !== "" && description === "") {
        alert("A description is required.")
    } else {
        const newTodo = new Todo(title, description, dueDate, priority, list);
        console.log(newTodo.info());
    }
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