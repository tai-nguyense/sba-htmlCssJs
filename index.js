const taskForm = document.querySelector("#taskForm");
const taskBtn = document.querySelector("#taskBtn");
const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");
const navToggler = document.querySelector(".navbar-toggler");
const navIcon = document.querySelector(".nav-icon");
const wheelSpinnerBtn = document.querySelector("#wheelSpinnerBtn");
const wheelContainer = document.querySelector(".wheelContainer");
const result = document.querySelector(".result");
const hoorayContainer = document.querySelector(".hoorayContainer");

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
    newTr.appendChild(newTdBtn);
    newTr.appendChild(newTd);
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

wheelSpinnerBtn.addEventListener("click", function() {
    var taskArray = getTaskArray();
    if (taskArray.length === 0) {
        return;
    }
    if (taskArray.length < 10) {
        var size = taskArray.length;
        for (var i = size; i < 10; i++) {
            var randTask = Math.floor(Math.random() * size);
            taskArray.push(taskArray[randTask]);
        }
    }
    refreshWheel(taskArray);
})

function refreshWheel(taskArray) {
    var wheelTask = wheelContainer.lastElementChild;
    while (wheelTask) {
        wheelContainer.removeChild(wheelTask);
        wheelTask = wheelContainer.lastElementChild;
    }
    if (taskArray.length === 0) {
        alert("Please enter some tasks first");
        return;
    }
    spinWheel(taskArray);
    var counter = 0;
    $(taskArray).each(function() {
        const newDiv = document.createElement("div");
        newDiv.classList.add("wheelTask");
        newDiv.textContent = taskArray[counter];
        var xDeg = 360 / taskArray.length;
        newDiv.style.transform = "rotate(" + xDeg * (counter + 1) + "deg)";
        newDiv.style.backgroundColor = colorArray[counter];
        wheelContainer.append(newDiv);
        counter++;
    })
}

var randomDeg = 360 * 3 + Math.floor(Math.random() * 360 * 2);

function spinWheel(taskArray) {
    if (taskArray.length === 0) {
        return;
    }
    randomDeg += 360 * 3 + Math.floor(Math.random() * 360 * 2);
    wheelContainer.style.transform = "rotate(" + randomDeg + "deg)";
    setTimeout(showTask(randomDeg, taskArray), 5000);
}

function showTask(randomDeg, taskArray) {
    randomDeg = randomDeg % 360;
    var resultTask = 0;
    if (randomDeg >= 0 && randomDeg < 36) {
        resultTask = taskArray[1];
    } else if (randomDeg >= 36 && randomDeg < 72) {
        resultTask = taskArray[0];
    } else if (randomDeg >= 72 && randomDeg < 108) {
        resultTask = taskArray[9];
    } else if (randomDeg >= 108 && randomDeg < 144) {
        resultTask = taskArray[8];
    } else if (randomDeg >= 144 && randomDeg < 180) {
        resultTask = taskArray[7];
    } else if (randomDeg >= 180 && randomDeg < 216) {
        resultTask = taskArray[6];
    } else if (randomDeg >= 216 && randomDeg < 252) {
        resultTask = taskArray[5];
    } else if (randomDeg >= 252 && randomDeg < 288) {
        resultTask = taskArray[4];
    } else if (randomDeg >= 288 && randomDeg < 324) {
        resultTask = taskArray[3];
    } else if (randomDeg >= 324 && randomDeg < 360) {
        resultTask = taskArray[2];
    }
    result.innerHTML = resultTask;
}

document.addEventListener("scroll", function() {
    if (window.scrollY + window.innerHeight + 100 > document.body.scrollHeight) {
        effect();
    }
})
var hooRotate = 0;

function effect() {
    hooRotate += 720;
    hoorayContainer.style.transform = "rotate(" + hooRotate + "deg)";
}