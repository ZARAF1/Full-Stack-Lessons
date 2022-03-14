let element = document.querySelector("button");

function turnButtonRed (){
    this.style.backgroundColor='red';
    this.style.color='white';
    this.innerHTML='Red Button';
}

element.onclick=turnButtonRed;