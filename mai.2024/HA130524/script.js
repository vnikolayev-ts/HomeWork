

function addTask(status, task, list) {
  let li = document.createElement("li");
  let checkbox = document.createElement("input");
  let text = document.createElement("div");
  let button = document.createElement("button");
  checkbox.setAttribute("type", "checkbox")

  checkbox.checked = status;

  text.innerHTML = task;
  button.textContent ="Delete";
  li.appendChild(checkbox);
  li.appendChild(text);
  li.appendChild(button);

  list.appendChild(li);
}


function getTodos(myList) {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((json) =>
      json.forEach((taskObject) => {
        console.log(taskObject);
        let toDoCompleted = (taskObject.completed);
        addTask(toDoCompleted, (taskObject.title), myList)
          })
        );
    }
    
    let myList = document.getElementById('myList');
    getTodos(myList);