const taskForm = document.querySelector("#taskForm");
const taskBtn = document.querySelector("#taskBtn");
const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");
taskForm.addEventListener("submit", function(e) {
    e.preventDefault();
});
taskBtn.addEventListener("click", function() {
    taskText = taskInput.value.trim();
    if (taskText.length < 1) {
        return;
    }
    const newTd = document.createElement("td");
    newTd.classList.add("row")
    newTd.style.display = "flex";
    const newP = document.createElement("span");
    newP.textContent = taskInput.value;
    newP.classList.add("col-11");
    const newBtn = document.createElement("button");
    newBtn.setAttribute("type", "button");
    newBtn.textContent = "-";
    newBtn.classList.add("btn", "deleteBtn", "col-1");
    addDelete(newBtn);
    const newTr = document.createElement("tr");
    taskList.appendChild(newTr);
    newTr.appendChild(newTd);
    newTd.appendChild(newP);
    newTd.appendChild(newBtn);
    taskInput.value = "";
});

function addDelete(delBtn) {
    delBtn.addEventListener("click", function() {
        const tr = delBtn.parentNode.parentNode;
        tr.parentNode.removeChild(tr);
    })
}