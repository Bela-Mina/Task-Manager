

const button = document.querySelector("#addBtn");
const taskManager = document.querySelector("#taskManager")
const taskList = document.querySelector("#taskList")
//////
// now the event listener

button.addEventListener("click", function() {
    const list = document.createElement("li");
    let theValue = taskManager.value.trim();
    if(!theValue) {
        return 
    }   
    taskManager.value = ""
    list.append(theValue);
    taskList.append(list)// you did not assign task list in the js
// it must inside it 

})
//first step work like this 
// "Learn JavaScript" → valid → add ✅
// ""                 → empty → stop ❌
// "     "            → trim → empty → stop ❌

