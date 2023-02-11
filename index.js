const taskForm = document.querySelector("#taskForm")
const taskBtn = document.querySelector("#taskBtn");
const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");


taskForm.addEventListener("onclick", function(e){
    e.preventDefault()
})
taskBtn.addEventListener("onclick", function(){
    addNewTask()
})
function addNewTask(){
    const newTh = document.createElement("th")
    newTh.setAttribute("scope", "row")
    const newTd = document.createElement("td")
    newTd.textContent = taskInput
    const newBtn = document.createElement("button")
    newBtn.setAttribute("type","button")
    newBtn.textContent = "+"
    newBtn.classList.add("btn")
    const newTr = document.createElement("tr")
    taskList.appendChild(newTr)
    newTr.appendChild(newTh)
    newTr.appendChild(newLi)
}
