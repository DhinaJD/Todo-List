let todoInput = document.querySelector(".todo__input");
let todoList = document.querySelector(".todo__list");
let todoItem = document.querySelectorAll(".todo__item");
let closeIcon = document.querySelector(".closeIcon");

//Helper functions
function createNewList(textEl){
    let newList = document.createElement("li");
    newList.setAttribute("class" , "todo__item");
    newList.innerHTML = textEl;
    console.log(newList);
    return newList;
}
function CloseIconBind(){
  let closeIcon =document.createElement("span");
  closeIcon.classList.add("closeIcon");
  return closeIcon;
}
function toggleDone(){
    todoList.addEventListener("click", (event)=>{
       if(event.target.classList.contains("todo__item")){
          event.target.classList.toggle("done");
       }
       console.log(event.target);
    })
}

//Main function
function main(){
    todoInput.addEventListener("keypress" , (event) =>{
      if(event.keyCode === 13 && todoInput.value !== ""){
        let newListItem = createNewList(todoInput.value)
        todoList.insertBefore(newListItem  , todoList.firstElementChild)
        document.querySelector(".todo__item").appendChild(CloseIconBind())
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