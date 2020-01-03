// 변수 선언
const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

// 현재 유저이름
const USER_LS = "currentUser",
    SHOWING_CN = "showing";

//이름 저장
function saveName(text){
    localStorage.setItem(USER_LS, text);
}

// 이름을 제출하고
function handleSubmit(event){
    event.preventDefault(); //그 페이지에 머물기
    const currentValue = input.value;
    paintGreeting(currentValue); //paintGreeting으로 내가 입력한 값 출력하기
    saveName(currentValue);
}

// currentUser==null일 경우, 이름 묻기
function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

//안녕 '누구' 출력하기
function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

//로컬스토리지에 있는 값 가져오기
function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    //currentUser가 없을 경우, 
    if (currentUser===null){
        askForName();
    } else{
        paintGreeting(currentUser);
    }
}


function init(){
    loadName();
}
init();{}
