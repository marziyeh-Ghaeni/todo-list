let addTodo=document.querySelector("#add-todo");
let content=document.querySelector(".content");
let divText=document.querySelector(".divText")
let cancel=document.querySelector(".cancel");
let save=document.querySelector(".save");
let myInput=document.querySelector(".myInput");
let myTodo;

//وقتی روی + کلیک شد یک div text باز شود
addTodo.addEventListener('click',function (e){
    divText.style.display="block";
})

//وقتی روی × کلیک شد div text بسته شود
cancel.addEventListener('click',function (e){
    divText.style.display="none";
    myInput.value=""
})
//وقتی روی  کلیک شد
save.addEventListener('click',function (e){
    myTodo=myInput.value;                      //اطلاعات داخل textarea ریخته شود داخل myTodo
    divText.style.display="none";

    let todoBox=document.createElement("div")
    todoBox.classList.add("todoBox");

    let contentTodo=document.createElement("div");
    contentTodo.classList.add("contentTodo");

    let checkbox=document.createElement("input");
    checkbox.setAttribute("type","checkbox");
    checkbox.classList.add("checkbox");

    let trash=document.createElement("i");
    trash.classList.add("fa-solid");
    trash.classList.add("fa-trash");
    trash.classList.add("trash");

    let edit=document.createElement("i");
    edit.classList.add("fa-solid");
    edit.classList.add("fa-pen-to-square");
    edit.classList.add("edit");

    contentTodo.textContent=myTodo;

    todoBox.append(trash);
    todoBox.append(edit);
    todoBox.append(contentTodo);
    todoBox.append(checkbox);
    content.append(todoBox);

    localStorage.setItem("todo",contentTodo.textContent);


    checkbox.addEventListener('change',function (){
        let check=checkbox.checked;
        if(check==true){
            contentTodo.style.textDecoration="line-through";
            contentTodo.style.color="#333";
        }else{
            contentTodo.style.textDecoration="none";
            contentTodo.style.color="#000";
        }
    })
    trash.addEventListener('click',function (e){
        myInput.value=""
        todoBox.style.display="none";
    })
    edit.addEventListener('click',function (e){
        todoBox.style.display="none";
        myInput.value=contentTodo.textContent;
        divText.style.display="block";
    })
    myInput.value=""
})
