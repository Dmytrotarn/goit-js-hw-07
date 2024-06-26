function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector('.change-color')
const body = document.querySelector('body')
const currentColor = document.querySelector('.color')

button.addEventListener('click', changeColor)

function changeColor() {
  const randomColor = getRandomHexColor()
  button
  body.style.backgroundColor = randomColor
  currentColor.innerHTML = randomColor
}