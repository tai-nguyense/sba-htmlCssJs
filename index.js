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
    const newP = document.createElement("p")
    newP.textContent = taskInput.value
    const newBtn = document.createElement("button")
    newBtn.textContent = "-"
    const newLi = document.createElement("li")
    newLi.appendChild(newP)
    newLi.apenndChild(newBtn)
    taskList.appendChild(newLi)
}
