// Your code here
const input= document.querySelector('#addToDo');
const ul =document.querySelector("ul");
const li= document.querySelectorAll("li");
const i= document.querySelector("i");


function delete_task(e){
    
   ul.removeChild(e.target);
}

const addTask= (e)=>{
    if(e.keyCode===13){
        const li= document.createElement("li");
        li.innerHTML= `<span><i class="fa fa-trash"></i></span> ${e.target.value} `;
        ul.appendChild(li);
        e.target.value="";
    }
}

input.addEventListener("keydown",addTask)
ul.addEventListener("click",delete_task)
i.addEventListener("click",delete_task)

