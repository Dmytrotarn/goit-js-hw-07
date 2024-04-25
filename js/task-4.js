const form = document.querySelector("form");

form.addEventListener("submit", onSubmit);
function onSubmit(event) {
    event.preventDefault()
    const email = event.target.elements.email.value.trim()
    const password = event.target.elements.password.value.trim()
    const message = {
        email: `${email}`,
        password: `${password}`
    }
    if (email === "" || password === "") {
        alert("All form fields must be filled in")
    } else {
        console.log(message)
    }

    event.target.reset()
}

