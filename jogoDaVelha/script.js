const cellElements = document.querySelectorAll("[data-cell]")
const board = document.querySelector("[data-board]")
const winnerMessageTextElement = document.querySelector("[data-winning-message-text]")
const showWinnerMessage = document.querySelector("[data-winning-message]")
const restartButton = document.querySelector("[data-restart-button]")
let isOturn

const winningCombinatius = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  [0, 4, 8],
  [2, 4, 6],
]

const startGame = () => {
  isOturn = false
  for (const cell of cellElements) {
    cell.classList.remove("o")
    cell.classList.remove("x")
    cell.removeEventListener("click", handleClik)
    cell.addEventListener("click", handleClik, {once: true})
  }

  setBoardHouverClass()
  board.classList.add('x')
  showWinnerMessage.classList.remove("show-winning-menssage")
}

const endGame = (isdraw) => {
  if (isdraw) {
    winnerMessageTextElement.innerText = 'Velha!'
  } else {
    winnerMessageTextElement.innerText = isOturn ? 'o vencel' : 'x vencel'
  }

  showWinnerMessage.classList.add("show-winning-menssage")
}

const checkForwin = (currentPlayer) => {
  return winningCombinatius.some((combination) => {
    return combination.every((index) => {
      return cellElements[index].classList.contains(currentPlayer)
    })
  })
}

const checkForDraw = () => {
  return [...cellElements].every((cell) => {
    return cell.classList.contains("x") || cell.classList.contains("o");
  })
}
const placeMark = (cell, classToAdd) => {
  cell.classList.add(classToAdd)
}
const setBoardHouverClass = () => {

  board.classList.remove('o')
  board.classList.remove('x')
  if (isOturn) {
    board.classList.add('o')
  } else {
    board.classList.add('x')
  }
}
const swapTrurns = () => {
  isOturn = !isOturn

  setBoardHouverClass()

}

const handleClik = (e) => {
  //colocar a mar (x ou o)
  const cell = e.target
  const classToAdd = isOturn ? 'o' : 'x'

  placeMark(cell, classToAdd)

  const isWin = checkForwin(classToAdd)
  const isDraw = checkForDraw()

  //verificar por vitoria
  if (isWin) {
    endGame(false)

  }
  //verificar por velha
  else if (isDraw) {
    endGame(true)

  }
  //mudar o simbolo
  else {
    swapTrurns()
  }
}

startGame()
restartButton.addEventListener('click', startGame)
