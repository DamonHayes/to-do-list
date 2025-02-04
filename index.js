c = 0
 
var tasklist = document.getElementById("list")


// the add task to list button
var buttons = document.getElementById("AddTo")
buttons.addEventListener("click", function(){addtoList()})



//function called apon by "add task button"
function addtoList() {
    //grabs the input value
    let inputs = document.getElementById("tasker").value
    
    //checks to see if input feild has anyting in it. if not it doesnt add anything to the task list
    if(inputs == ""){
        return;
    }

    //adds the input value to the list
    var li = document.createElement("li")
    li.appendChild(document.createTextNode(inputs))

    //adds the button on the end of the task to delete "or move to completed"
    var deleteButton = document.createElement("button")
    
    //makes the new li have a unique id
    li.id = c
    c += 1
    deleteButton.appendChild(document.createTextNode("Delete"))
    deleteButton.addEventListener("click", function(){moveToCompleted(li.id)})
    li.appendChild(deleteButton)

    tasklist.appendChild(li)

    //clears the input value
    document.getElementById("tasker").value = ""
}

function moveToCompleted(finishedTask){
    var taskremove = document.getElementById(finishedTask)
    var finishedList = document.getElementById("flist")
    
    console.log(taskremove.childNodes)
    taskremove.removeChild(taskremove.childNodes[1])
    finishedList.appendChild(taskremove)


}



