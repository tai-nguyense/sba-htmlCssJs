const taskForm = document.querySelector("#taskForm");
const taskBtn = document.querySelector("#taskBtn");
const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");
const navToggler = document.querySelector(".navbar-toggler");
const navIcon = document.querySelector(".nav-icon");
const refreshWheelBtn = document.querySelector("#refreshWheelBtn");
const wheelSpinnerBtn = document.querySelector("#wheelSpinnerBtn");
const wheelContainer = document.querySelector(".wheelContainer");

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

function addTask() {
    taskText = taskInput.value.trim();
    if (taskText.length < 1) {
        return;
    } else if (getTaskArray().length >= 10) {
        alert("Task List reached max size of 10 already.")
        return;
    }
    const newTd = document.createElement("td");
    newTd.classList.add("col-10")
    const newP = document.createElement("span");
    newP.textContent = taskInput.value;
    newP.classList.add("taskText")
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

function getTaskArray() {
    var taskArray = [];
    $('.taskText').each(function() {
        taskArray.push(this.textContent);
    })
    return taskArray;
}

refreshWheelBtn.addEventListener("click", function() {
    var taskArray = getTaskArray();
    refreshWheel(taskArray);
})

function refreshWheel(taskArray) {
    var wheelTask = wheelContainer.lastElementChild;
    while (wheelTask) {
        wheelContainer.removeChild(wheelTask);
        wheelTask = wheelContainer.lastElementChild;
    }
    if (taskArray.length === 0) {
        return;
    }
    var counter = 0;
    spinWheel();
    $(taskArray).each(function() {
        counter++;
        const newDiv = document.createElement("div");
        newDiv.classList.add("wheelTask");
        newDiv.textContent = counter;
        var xDeg = 360 / taskArray.length;
        newDiv.style.transform = "rotate(" + xDeg * counter + "deg)";
        wheelContainer.append(newDiv);
    })
}

wheelSpinnerBtn.addEventListener("click", function() {
    spinWheel();
})
var randomDeg = 360 * 3 + Math.floor(Math.random() * 360 * 2);

function spinWheel() {
    randomDeg += 360 * 3 + Math.floor(Math.random() * 360 * 2);
    wheelContainer.style.transform = "rotate(" + randomDeg + "deg)";
}