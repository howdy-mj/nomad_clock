// 블록(범위) 지정
const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

// 출력할 것 입력
function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes}:${
        seconds < 10 ? `0${seconds}` : seconds}`; 
        // 10보다 작다면 앞에껄, 아니라면 뒤에껄 실행
}

// 초기화
function init(){
    getTime();
    setInterval(getTime, 1000);
}
init();

