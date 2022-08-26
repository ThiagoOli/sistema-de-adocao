const submitBtn = document.querySelector(".submitBtn")

submitBtn.onclick = e => {
    const inputSearch = document.querySelector(".queryInput")

    
    let value = inputSearch.value.split(" ")
    value = value.map(word => {
        let modifiedWord = word.replace(word[0], word[0].toUpperCase())
        return modifiedWord
    }).join(" ")
    inputSearch.value = value
}

const root = document.documentElement
const body = document.querySelector("body")
root.style.setProperty("--bodyHeight", `${body.clientHeight}px`)