const container = document.getElementById("container");
setInterval(() => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  container.style.backgroundColor = `rgb(${red},${green},${blue})`;
}, 1000);

const generateRandomColorArray = (sizeOfArray) => {
    colorsArray = []
    for(let i=0; i < sizeOfArray; i++) {
        const red = Math.floor(Math.random() * 255);
        const green = Math.floor(Math.random() * 255);
        const blue = Math.floor(Math.random() * 255);
        const color = `rgb(${red},${green},${blue})`
        const hexColor = rgbHex(color)

        colorsArray.push(`#${hexColor}`) 
    }
    return colorsArray
}

const generate = document.getElementById("generate-button")
generate.addEventListener("click", async () => {
    const inputField = document.getElementById("inputField")
    const clipboardIcon = document.getElementById("clipboard-icon")
    const colorsArray = await generateRandomColorArray(inputField.value)
    const clipboardButton = document.getElementById("basic-addon1")
    inputField.value = colorsArray
    inputField.select()
    clipboardButton.classList.add("btn-success")
    clipboardIcon.classList.remove("bi-clipboard")
    clipboardIcon.classList.add("bi-clipboard-check")
    document.execCommand("copy")
})

const clear = document.getElementById("clear-button")
clear.addEventListener("click", async () => {
    const inputField = document.getElementById("inputField")
    const clipboardIcon = document.getElementById("clipboard-icon")
    const colorsArray = await generateRandomColorArray(inputField.value)
    const clipboardButton = document.getElementById("basic-addon1")
    inputField.value = ""
    clipboardButton.classList.remove("btn-success")
    clipboardIcon.classList.add("bi-clipboard")
    clipboardIcon.classList.remove("bi-clipboard-check")
})