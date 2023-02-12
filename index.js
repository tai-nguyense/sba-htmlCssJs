const taskForm = document.querySelector("#taskForm");
const taskBtn = document.querySelector("#taskBtn");
const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");
taskForm.addEventListener("submit", function(e) {
    e.preventDefault();
    addTask();
});
taskBtn.addEventListener("click", function() {
    addTask();
});

function addTask() {
    taskText = taskInput.value.trim();
    if (taskText.length < 1) {
        return;
    }
    const newTd = document.createElement("td");
    newTd.classList.add("col-10")
    const newP = document.createElement("span");
    newP.textContent = taskInput.value;
    const newTdBtn = document.createElement("td");
    newTdBtn.classList.add("col-2")
    const newBtn = document.createElement("button");
    newBtn.setAttribute("type", "button");
    newBtn.textContent = "-";
    newBtn.classList.add("btn");
    addDelete(newBtn);
    const newTr = document.createElement("tr");
    newTr.classList.add("row");
    taskList.appendChild(newTr);
    newTr.appendChild(newTd);
    newTr.appendChild(newTdBtn);
    newTd.appendChild(newP);
    newTdBtn.appendChild(newBtn);
    taskInput.value = "";
}

function addDelete(delBtn) {
    delBtn.addEventListener("click", function() {
        const tr = delBtn.parentNode.parentNode;
        tr.parentNode.removeChild(tr);
    })
}