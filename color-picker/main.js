const colorBtn = document.querySelector("#color-btn")


// function to generate a random color
const randomColor = () => {

    const rValue = Math.floor(Math.random() * 256)
    const gValue = Math.floor(Math.random() * 256)
    const bValue = Math.floor(Math.random() * 256)

    return `rgb(${rValue},${gValue},${bValue})`

}


// function to add the color to background

const changeBackgroundBtn = document.querySelector("#ran-color-btn")

changeBackgroundBtn.addEventListener('click', () => {

    const pageBody = document.querySelector("body")

    const color = randomColor()

    pageBody.style.backgroundColor = color
    
})


// function to extract color values to be copied


const extractBackgroundColor = () => {

    const bodyColor = document.querySelector('body')

    const extractedColor = bodyColor.style.backgroundColor

    if (extractedColor != "") {
        return extractedColor
    }

    return `rgb(255, 255, 255)`


}




const rgbButton = document.querySelector("#rgb-copy-btn")

rgbButton.addEventListener('click', () => {

    console.log(extractBackgroundColor())


})

