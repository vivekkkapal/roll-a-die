
const imageEl = document.querySelector("img");

function getnum1to6(){
    return Math.ceil(Math.random()*6)
}

function getrandomurl(){
    const num = ['one','two','three','four','five','six'];
    const randomword = num[getnum1to6()-1];
    const url = `https://img.icons8.com/windows/300/dice-${randomword}.png`;
    return url;
}

function cahngeImage(){
    imageEl.src = getrandomurl();
}
