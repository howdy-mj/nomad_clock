const body = document.querySelector("body");

const IMG_NUM = 5;

// 이미지 가져오기
function paintImage(imgNumber){
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add('bgImage');
    body.prepend(image);
}

// 랜덤으로 숫자 (이미지 이름이 숫자일 경우)
function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUM);
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}
init();