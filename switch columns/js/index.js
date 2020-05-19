const submit = document.getElementsByClassName(`submit`)

const input = document.getElementById(`input`)

const toDoList = document.getElementById(`toDoList`)

const move = () => {
   
    var li = document.createElement("li");
    var node = document.createTextNode(input.value);
    var button = document.createElement("button")
    button.innerText = "In Progress"
    li.appendChild(node);
    li.appendChild(button)
    toDoList.appendChild(li);
}