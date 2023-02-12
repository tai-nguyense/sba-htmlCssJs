const taskForm = document.querySelector("#taskForm");
const taskBtn = document.querySelector("#taskBtn");
const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");
taskForm.addEventListener("submit", function(e){
    alert("test");
    e.preventDefault();
});
taskBtn.addEventListener("click", function(){
    taskBtn.style.backgroundColor = red;
    const newTd = document.createElement("td");
    newTd.textContent = taskInput.value;
    const newBtn = document.createElement("button");
    newBtn.setAttribute("type","button");
    newBtn.textContent = "+";
    newBtn.classList.add("btn");
    const newTr = document.createElement("tr");
    taskList.appendChild(newTr);
    newTr.appendChild(newTd);
    newTr.appendChild(newBtn);
    taskInput.value = "";
});
