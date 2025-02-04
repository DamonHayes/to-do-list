c = 0
 
var tasklist = document.getElementById("list")


// the add task to list button
var buttons = document.getElementById("AddTo")
buttons.addEventListener("click", function(){addtoList()})

document.querySelector("#tasker").addEventListener('keypress', function(e) {
    if(e.key == "Enter"){
        addtoList()
    }

})



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

    //makes the new li have a unique id
    li.id = c
    c += 1

    //adds the button on the end of the task to delete "or move to completed"
    var deleteButton = document.createElement("button")
    deleteButton.appendChild(document.createTextNode("Check"))
    deleteButton.addEventListener("click", function(){moveToCompleted(li.id)})
    li.appendChild(deleteButton)

    tasklist.appendChild(li)

    //clears the input value
    document.getElementById("tasker").value = ""
}

function moveToCompleted(finishedTask){
    var taskremove = document.getElementById(finishedTask)
    var finishedList = document.getElementById("flist")

    taskremove.removeChild(taskremove.childNodes[1])
    
    

    var finishedButton = document.createElement("button")
    finishedButton.appendChild(document.createTextNode("Delete"))
    finishedButton.addEventListener("click", function(){deleter(taskremove.id)})

    taskremove.appendChild(finishedButton)

    finishedList.appendChild(taskremove)

    



}


function deleter(x){
    console.log("calling deleter", x)
    var taskremove = document.getElementById(x)
    var finishedList = document.getElementById("flist")

    finishedList.removeChild(taskremove)
}
