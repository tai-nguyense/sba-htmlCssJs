const taskForm = document.querySelector("#taskForm");
const taskBtn = document.querySelector("#taskBtn");
const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");
const navToggler = document.querySelector(".navbar-toggler");
const navIcon = document.querySelector(".nav-icon");
const wheelBtn = document.querySelector("#wheelSpinnerBtn");
const wheel = document.querySelector(".wheelContainer");

navToggler.addEventListener("click", function() {
    navIcon.classList.toggle("open");
})
taskForm.addEventListener("submit", function(e) {
    e.preventDefault();
    addTask();
});
taskBtn.addEventListener("click", function() {
    addTask();
});
wheelBtn.addEventListener("click", function() {
    spinWheel();
})

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
    newBtn.style.color = "rgba(255, 243, 243, 0.897)";
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

var randomDeg = 360 * 3 + Math.floor(Math.random() * 360 * 2);

function spinWheel() {
    randomDeg += 360 * 3 + Math.floor(Math.random() * 360 * 2);
    wheel.style.transform = "rotate(" + randomDeg + "deg)";
}