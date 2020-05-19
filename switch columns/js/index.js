const submit = document.getElementsByClassName(`submit`)

const input = document.getElementById(`input`)

const toDoList = document.getElementById(`toDoList`)

const move = () => {
   
    var li = document.createElement("li");
    var node = document.createTextNode(input.value);
    li.appendChild(node);
    toDoList.appendChild(li);
}