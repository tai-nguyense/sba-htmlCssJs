const taskForm = document.querySelector("#taskForm")
const taskBtn = document.querySelector("#taskBtn");
const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");

taskBtn.addEventListener("onclick", function(){
    addNewTask()
})
function addNewTask(){
    taskBtn.style.backgroundColor = red;
    const newTd = document.createElement("td")
    newTd.textContent = taskInput
    const newBtn = document.createElement("button")
    newBtn.setAttribute("type","button")
    newBtn.textContent = "+"
    newBtn.classList.add("btn")
    const newTr = document.createElement("tr")
    taskList.appendChild(newTr)
    newTr.appendChild(newTd)
    newTr.appendChild(newBtn)
}
