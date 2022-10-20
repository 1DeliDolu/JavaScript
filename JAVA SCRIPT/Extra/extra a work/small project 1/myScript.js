function writeText(){
    textElement.innerHTML = text.slice(0,idx);
    idx++;
    if(idx>text.length){
        idx=1;
    }
    setTimeout(() => {writeText();
    }, speed);
}
speedElement.addEventListener('input',(e) => {
    speed = 300 / e.target.value;
});