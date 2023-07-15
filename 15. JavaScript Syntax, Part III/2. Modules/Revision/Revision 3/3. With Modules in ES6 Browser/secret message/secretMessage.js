import {showHide, changeBackgroundColor} from "../module/domFunctions.js";

let button = document.getElementById("btn");
let paragraph = document.getElementById("para");

button.addEventListener('click', () => {
    showHide(paragraph);
    changeBackgroundColor(button)
})