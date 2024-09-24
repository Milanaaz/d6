const input = document.getElementById("input");
const createButton = document.getElementById("create_button");
const todolist = document.getElementById("todo_list");

let todos = [];




const createTodo = () => {
    const inputValue = input.value.trim();
    if (inputValue === "") {
        input.value = "";
        return false;
    } else {

        const reversedText = inputValue.split("").reverse().join("");
        todos.push(reversedText);

        displayTodos();
        input.value = "";
    }
};


const displayTodos = () => {
    todolist.innerHTML = "";
    todos.forEach((todo, index) => {
        const div = document.createElement("div");
        const text = document.createElement("h3");
        const divs = document.createElement("div");
        const edit = document.createElement("button");
        const deleteBtn = document.createElement("button");

        deleteBtn.setAttribute("class", "delete_button");
        edit.setAttribute("class", "edit_button");
        divs.setAttribute("class", "buttons_div");
        div.setAttribute("class", "block_text");

        edit.innerHTML = "edit";
        deleteBtn.innerHTML = "delete";
        text.innerHTML = todo;


        deleteBtn.onclick = () => {
            todos.splice(index, 1);
            displayTodos();
        };






        edit.onclick = () => {
            const editedText = prompt(`Edit: ${todo}`).trim();
            if (editedText) {
                todos[index] = editedText.split("").reverse().join("");
                displayTodos();
            }
        };

        divs.append(edit, deleteBtn);
        div.append(text, divs);
        todolist.append(div);
    });
};


createButton.onclick = () => createTodo();

input.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
        createTodo();
    }
});
