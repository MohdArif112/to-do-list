let addbtn = document.getElementsByClassName("todo-button")[0];
let input = document.getElementsByClassName("todo-input")[0];
let todos = document.getElementsByClassName("todos-container")[0];
addbtn.style.cursor="pointer"
// todos.style.display= "flex"

addbtn.addEventListener('click' ,function (){

    if(input.value.length == 0){
        alert("Input Field Can't be Empty")
    }
    else{
    
    let list = document.createElement('div');
    list.innerText = input.value;
    list.style.fontSize= "25px"
    list.style.margin="10px"
    list.style.color="white"
    todos.appendChild(list);
    let taskCompleted = document.createElement("button")
    taskCompleted.style.cursor="pointer"
    taskCompleted.style.width= "150px"
    taskCompleted.style.height= "25px"
    taskCompleted.style.fontSize= "20px"
    taskCompleted.style.marginRight="5px"
    
    input.value="";
    taskCompleted.innerText= "Completed";
    todos.appendChild(taskCompleted)

    
    taskCompleted.addEventListener('click',function strikeDown(){
        // count++;
        // list.style.textDecoration="line-through solid rbg(0,0,0)"
        if(list.className==="line-through"){
            list.classList.remove("line-through")
            list.style.color="white"
            taskCompleted.innerText="Completed"
        
        }
        else{
            list.setAttribute('class','line-through')
        taskCompleted.innerText="Uncompleted"
        list.style.color="green"
        }
    })


    let taskRemove = document.createElement("button")
    taskRemove.style.cursor="pointer"
    taskRemove.innerText= "Remove"
    taskRemove.style.width= "120px"
    taskRemove.style.height= "25px"
    taskRemove.style.fontSize= "20px"
    todos.appendChild(taskRemove)

    taskRemove.addEventListener('click', function removeTask(){

       let result= confirm("Are you sure")
       if(result){
        list.style.display="none";
        taskCompleted.style.display="none";
        taskRemove.style.display="none";
       }
    })
}

})

