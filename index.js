const taskForm = document.querySelector("#taskForm")
const taskBtn = document.querySelector("#taskBtn");
const taskInput = document.querySelector("#taskInput");

taskForm.addEventListener("onclick", function(e){
    e.preventDefault();
})
taskBtn.addEventListener("onclick", function(){
    alert("clicked")
});
