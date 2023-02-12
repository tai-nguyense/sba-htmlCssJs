const taskForm = document.querySelector("#taskForm");
const taskBtn = document.querySelector("#taskBtn");
const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");
const allDeleteBtns = document.querySelector(".deleteBtn")

taskForm.addEventListener("submit", function(e){
    e.preventDefault();
});
taskBtn.addEventListener("click", function(){
    taskText = taskInput.value.trim()
    if(taskText.length===0){
        return;
    }
    const newTd = document.createElement("td");
    newTd.textContent = taskText;
    const newBtn = document.createElement("button");
    newBtn.setAttribute("type","button");
    newBtn.textContent = "-";
    newBtn.classList.add("btn deleteBtn");
    const newTr = document.createElement("tr");
    taskList.appendChild(newTr);
    newTr.appendChild(newTd);
    newTr.appendChild(newBtn);
    taskInput.value = "";
});
for(const delBtn of allDeleteBtns){
    delBtn.addEventListener("click", function(){
        liToDel = delBtn.parentNode;
        liToDel.parentNode.removeChild(liToDel);
    })
}