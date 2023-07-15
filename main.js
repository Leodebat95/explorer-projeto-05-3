const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

const main = document.querySelector("main")
const cookieCard = document.querySelector("#cookieTextContainer")
const imageButton = document.querySelector(".screen1 img")
const resetButton = document.querySelector("button")

const phrases = document.querySelector(".phrases-cookie");
const phrasesStorage = [
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
  "Não há que ser forte. Há que ser flexível.",
  "A juventude não é uma época da vida, é um estado de espírito.",
  "Você é do tamanho do seu sonho.",
  "O pessimista vê a dificuldade em cada oportunidade; O otimista vê a oportunidade em cada dificuldade.",
  "A vida trará coisas boas se tiveres paciência."
]



function toggleScreen() {

  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}


function handleImageClick(event) {
  
  event.preventDefault()

  phrases.innerText = phrasesStorage[Math.round(Math.random() * 5)]

  main.style.marginTop = "0"
  
  cookieCard.style.animation = "card 1.8s ease-in-out"
  
  toggleScreen()
}


function handleResetClick(event) {

  event.preventDefault()

  main.style.marginTop = "-5rem"

  toggleScreen()
}



imageButton.addEventListener("click", handleImageClick)

resetButton.addEventListener("click", handleResetClick)
