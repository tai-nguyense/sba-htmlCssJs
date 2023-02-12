const taskForm = document.querySelector("#taskForm");
const taskBtn = document.querySelector("#taskBtn");
const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");
const allDeleteBtns = document.querySelector(".deleteBtn");
taskForm.addEventListener("submit", function(e) {
    e.preventDefault();
});
taskBtn.addEventListener("click", function() {
    taskText = taskInput.value.trim();
    if (taskText.length < 1) {
        return;
    }
    const newTd = document.createElement("td");
    newTd.textContent = taskInput.value;
    const newBtn = document.createElement("button");
    newBtn.setAttribute("type", "button");
    newBtn.textContent = "-";
    newBtn.classList.add("btn", "deleteBtn");
    addDelete(newBtn);
    const newTr = document.createElement("tr");
    taskList.appendChild(newTr);
    newTr.appendChild(newTd);
    newTr.appendChild(newBtn);
    taskInput.value = "";
});

function addDelete(delBtn) {
    delBtn.addEventListener("click", function() {
        const tr = delBtn.parentNode;
        tr.parentNode.removeChild(tr);
    })
}