const input = document.querySelector('#name-input')
const output = document.querySelector('#name-output')

input.oninput = () => {
    if (input.value.trim() == "") {
        return output.innerHTML = "Anonymous"
    }
    output.innerHTML = input.value.trim()

}




