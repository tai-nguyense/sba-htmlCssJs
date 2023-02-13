const taskForm = document.querySelector("#taskForm");
const taskBtn = document.querySelector("#taskBtn");
const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");
const navToggler = document.querySelector(".navbar-toggler");
const navIcon = document.querySelector(".nav-icon");
const refreshWheelBtn = document.querySelector("#refreshWheelBtn");
const wheelSpinnerBtn = document.querySelector("#wheelSpinnerBtn");
const wheelContainer = document.querySelector(".wheelContainer");

const colorArray = [];
colorArray.push("rgba(251, 248, 204, 1)",
    "rgba(253, 228, 207, 1)",
    "rgba(255, 207, 210, 1)",
    "rgba(241, 192, 232, 1)",
    "rgba(207, 186, 240, 1)",
    "rgba(163, 196, 243, 1)",
    "rgba(144, 219, 244, 1)",
    "rgba(142, 236, 245, 1)",
    "rgba(152, 245, 225, 1)",
    "rgba(185, 251, 192, 1))");
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
    spinWheel();
    var counter = 0;
    $(taskArray).each(function() {
        counter++;
        const newDiv = document.createElement("div");
        newDiv.classList.add("wheelTask");
        newDiv.textContent = counter;
        var xDeg = 360 / taskArray.length;
        newDiv.style.transform = "rotate(" + xDeg * counter + "deg)";
        newDiv.style.backgroundColor = colorArray[counter - 1];
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