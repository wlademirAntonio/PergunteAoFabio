const entrar = document.querySelector(".entrar")
const entrarForm = document.querySelector(".entrar__form")
const insta = document.querySelector(".insta")

const chat = document.querySelector(".chat")
const chatForm = document.querySelector(".chat__form")
const chatInput = document.querySelector(".chat__input")
const chatMessages = document.querySelector(".chat__messages")

const messageFabio = () => {
    const rand = Math.floor(Math.random() * 30)
    var resp = "";

    if (rand == 0) {
        resp = "Humm raspa de parede"
    } else if (rand == 3) {
        resp = "Já pode ou tá cedo?"
    } else if (rand == 10) {
        resp = "A qualquer momento"
    } else if (rand == 13) {
        resp = "Isto"
    } else if (rand == 20) {
        resp = "Que isso cara"
    } else if (rand == 23) {
        resp = "Carlinhos... Meu ídolo"
    } else if (rand % 2 == 0) {
        resp = "Sim";
    } else if (rand % 2 == 1) {
        resp = "Não";
    }

    return resp
}

const createMessageSelfElement = (content) => {
    const div = document.createElement("div")

    div.classList.add("message--self")
    div.innerHTML = content

    return div
}

const createMessageOtherElement = (content) => {
    const div = document.createElement("div")
    const span = document.createElement("span")

    div.classList.add("message--other")
    span.classList.add("message--sender")

    div.appendChild(span)

    span.innerHTML = "Fábio"
    div.innerHTML += content

    return div
}

const scrollScreen = () => {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    })
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

    if (message != "") {

        chatInput.value = ""

        const self = createMessageSelfElement(message)
        const other = createMessageOtherElement(messageFabio())

        chatMessages.appendChild(self)
        scrollScreen()

        setTimeout(function() {
            chatMessages.appendChild(other) 
            scrollScreen()}, 1000)

    }

}

entrarForm.addEventListener("submit", handleSubmit)
chatForm.addEventListener("submit", sendMessage)