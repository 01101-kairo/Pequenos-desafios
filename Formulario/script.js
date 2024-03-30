const form = document.querySelector(`#form`)
const username = document.querySelector(`#username`)
const email = document.querySelector(`#email`)
const password = document.querySelector(`#password`)
const passwordConfirmation = document.querySelector(`#password-confirmation`)

form.addEventListener("submit", (e) => {
    e.preventDefault()
    checkInputs()
})

function checkInputs() {
    const usernameValue = username.value
    const emailValue = email.value
    const passwordValue = password.value
    const passwordConfirmationValue = passwordConfirmation.value

    if (usernameValue === "") {
        setErrorFor(username, "O nome de usuario é obrigatorio.")
    } else {setSucessFor(username)}

    if (emailValue === "") {
        setErrorFor(email, "O email do usuario é obrigatorio.")
    } else {setSucessFor(email)}

    if (passwordValue === "") {
        setErrorFor(password, "A senha é obrigatorio.")
    } else if (passwordValue.length < 7) {
        setErrorFor(password, "A senha precisa de nominimo 7 caracteres.")
    } else {setSucessFor(password)}

    if (passwordConfirmationValue === "") {
        setErrorFor(passwordConfirmation, "A Confirmação da senha é obrigatorio.")
    } else if (passwordConfirmationValue !== passwordValue) {
        setErrorFor(passwordConfirmation, "Senha incopativel")
    } else {
        setSucessFor(passwordConfirmation)
    }

    const formControls = form.querySelectorAll('.form-control')

    const formIsValid = [...formControls].every((formControls) => {
        return (formControls.className === "form-control sucess")
    })

    if (formIsValid) {
        console.log('O formulario ta 100% valido')
    }
}


function setErrorFor(input, message) {
    const formControl = input.parentElement
    const small = formControl.querySelector("small")

    // add msg de erro
    small.innerText = message
    // add a class de erro
    formControl.className = "form-control error"
}


function setSucessFor(input) {
    const formControl = input.parentElement
    //add a class de sucess
    formControl.className = "form-control sucess"
}
