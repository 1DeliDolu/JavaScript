document.querySelector('#getOne').addEventListener('click',getOne);

document.querySelector('#getAll').addEventListener('click',getAll);

function getOne(){

}

function getAll(){
    var urlME="https://jsonplaceholder.typicode.com/posts";
    var xhrME = new XMLHttpRequest();
    xhrME.open('GET',urlME,true);
    xhrME.onload= function(){
        if(this.status===200){
            console.log(this.responseText);
        }

    }
    xhrME.send();
}