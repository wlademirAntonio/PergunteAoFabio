const entrar = document.querySelector(".entrar")
const entrarForm = document.querySelector(".entrar__form")
const insta = document.querySelector(".insta")

const chat = document.querySelector(".chat")
const chatForm = document.querySelector(".chat__form")
const chatInput = document.querySelector(".chat__input")
const chatMessages = document.querySelector(".chat__messages")

const createMessageSelfElement = (content) => {
    const div = document.createElement("div")

    div.classList.add("message--self")
    div.innerHTML = content

    return div
}

const handleSubmit = (event) => {
    event.preventDefault()

    entrar.style.display = "none"
    chat.style.display = "flex"
    insta.style.display = "none"
}

const sendMessage = (event) => {
    event.preventDefault()

    const message = chatInput.value

    chatInput.value = ""

    const element = createMessageSelfElement(message)

    if (message != "") {

        chatMessages.appendChild(element)

    }

}

entrarForm.addEventListener("submit", handleSubmit)
chatForm.addEventListener("submit", sendMessage)