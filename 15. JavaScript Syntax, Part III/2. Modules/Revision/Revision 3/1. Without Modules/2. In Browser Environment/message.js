let button = document.getElementById("btn");
let paragraph = document.getElementById("para");

const showHide = domElement => {
    if (domElement.style.display === "none") {
        domElement.style.display = "block";
    } else {
        domElement.style.display = "none"
    }
}
button.addEventListener("click", () => {
    showHide(paragraph)
})
