let todoInput = document.querySelector(".todo__input");
let todoList = document.querySelector(".todo__list");
let todoItem = document.querySelectorAll(".todo__item");




function createNewList(textEl){
    let newList = document.createElement("li");
    newList.setAttribute("class" , "todo__item");
    newList.innerHTML = textEl;
    console.log(newList);
    return newList;
}

function toggleDone(){
    todoList.addEventListener("click", (event)=>{
       if(event.target.classList.contains("todo__item")){
          event.target.classList.toggle("done");
       }
    })
}

function main(){
    todoInput.addEventListener("keypress" , (event) =>{
      if(event.keyCode === 13 && todoInput.value !== ""){
        let newListItem = createNewList(todoInput.value)
        todoList.insertBefore(newListItem  , todoList.firstElementChild)
        todoInput.value = "";
      }
    })
    toggleDone();
 }

main();



 
//! check enter btn pressedv
//! clear prev text in inputbox
//! create new list item and add to the ul 
//! add before the first element 
//! list toggle 