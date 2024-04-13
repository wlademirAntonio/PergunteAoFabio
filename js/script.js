const entrar = document.querySelector(".entrar")
const entrarForm = document.querySelector(".entrar__form")
const insta = document.querySelector(".insta")

const chat = document.querySelector(".chat")
const chatForm = document.querySelector(".chat__form")
const chatInput = document.querySelector(".chat__input")

const handleSubmit = (event) => {
    event.preventDefault()

    entrar.style.display = "none"
    chat.style.display = "flex"
    insta.style.display = "none"
}

entrarForm.addEventListener("submit", handleSubmit)