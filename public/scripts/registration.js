const date = new Date().toISOString().slice(0, 10)
const dateImput = document.querySelector(".date")
dateImput.min = date

const reqElements = document.querySelectorAll(".reqElements")
const submitBtn = document.querySelector(".submitBtn")

function checkInput(inputs) {
    let filled = true

    inputs.forEach(input => {
        if (input.value === "") {
            filled = false
        }
    })

    return filled
}

reqElements.forEach(input => {
    input.onkeypress = () => {
        if (checkInput(reqElements)) {
            submitBtn.disabled = false
            submitBtn.style.background = "linear-gradient(to bottom right, #43cacd, #94abd0)"
        } else {
            submitBtn.disabled = true
        }
    }
})

function capFirstLetter(input) {
    let value = input.value
    value = value.replace(value[0], value[0].toUpperCase())
    input.value = value
}

function capMultLetters(input) {
    let value = input.value.split(" ")
    value = value.map(word => {
        let modifiedWord = word.replace(word[0], word[0].toUpperCase())
        return modifiedWord
    }).join(" ")
    input.value = value
}

submitBtn.onclick = e => {
    reqElements.forEach(input => {
        if (input.classList.contains("firstWord")) {
            capFirstLetter(input)
        } else if (input.classList.contains("multWord")) {
            capMultLetters(input)
        }
    })


    if (date <= dateImput.value) {
        const modal = document.querySelector(".modal")
        modal.classList.add("success")
    }
}

const root = document.documentElement
const body = document.querySelector("body")
root.style.setProperty("--bodyHeight", `${body.clientHeight}px`)