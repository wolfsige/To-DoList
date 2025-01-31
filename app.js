const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")
const clearBtn = document.getElementById("clear-button")

function addTask(){
  if(inputBox.value === ""){
    alert("You must write something before adding it to the list!")
  }
  else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li)
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = ""
  saveData();
}

listContainer.addEventListener("click", function(event){
  if(event.target.tagName === "LI"){
    event.target.classList.toggle("checked");
    saveData();
  }
  else if(event.target.tagName === "SPAN"){
    event.target.parentElement.remove();
    saveData();
  }
}, false);

function saveData(){
  localStorage.setItem("data", listContainer.innerHTML)
}

function showTask(){
  listContainer.innerHTML = localStorage.getItem("data")
}

showTask()

clearBtn.addEventListener("click", function(event){
  localStorage.clear("data") 
  location.reload()
})