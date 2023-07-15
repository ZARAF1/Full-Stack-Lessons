const showHide = domElement => {
    if (domElement.style.display === "none") {
        domElement.style.display = "block";
    } else {
        domElement.style.display = "none"
    }
}

const changeBackgroundColor = domElement => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)
    domElement.style.backgroundColor = `rgb(${red},${green},${blue})`
}

export {showHide, changeBackgroundColor}