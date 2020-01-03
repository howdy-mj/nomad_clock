const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

let toDos = []; //업데이트를 해야하기 때문에 let

// 다 쓴 todo 지우기
function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    //filter는 함수 하나를 차례대로 실행, 체크된 것들 삭제
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id); //li.id는 string이라 변환 필요
    }); 
    toDos = cleanToDos; //삭제한 데이터로 업데이트하기
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); //object를 string으로 변경
}

// to do list 채우기
function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length +1;

    delBtn.innerText = "X";
    delBtn.addEventListener("click", deleteToDo);

    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId; //list에 id 추가해서 식별자 추가
    toDoList.appendChild(li);

    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj); //array 안에 하나씩 추가
    saveToDos(); //localstorage에 호출, toDos안에 넣은 후에 호출
}

//내용 입력시 출력하고 input창은 초기화
function handleSubmit(event){
    event.preventDefault(event);
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

// toDo list가 없을 경우
function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    // todolist가 없을 경우에만 채워넣으면 되기 때문에 else는 필요 없음
    
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            //콘솔창에 바로 todolist에 뭘 썼는지 출력
            //console.log(toDo.text);
            paintToDo(toDo.text); //저장하기
        }); 
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}
init();