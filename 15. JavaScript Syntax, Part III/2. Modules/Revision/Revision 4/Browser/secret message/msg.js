import {toggleElement, changeBgColor} from '../dom functions/domFunctions.js'

const secretPara = document.getElementById("secretPara");
const secretButton = document.getElementById("secretButton")


secretButton.addEventListener("click", () => {
    toggleElement(secretPara);
    changeBgColor(secretPara);
})
