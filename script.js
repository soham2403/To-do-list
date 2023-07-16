const inputValue = document.getElementById("input");
const addInListContainer = document.getElementById("list-container");

function addTask() { 
    if (inputValue.value === '') {
        alert("Please add your task!!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputValue.value;
        addInListContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputValue.value = '';
    saveData();
}

addInListContainer.addEventListener("click",function(e){
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData() {
    localStorage.setItem("data",addInListContainer.innerHTML);
}

function showTask(){
    addInListContainer.innerHTML = localStorage.getItem("data");
}

showTask();