function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('#controls input')
const create = document.querySelector('[data-create]')
const destroy = document.querySelector('[data-destroy]')
const boxes = document.querySelector('#boxes')


create.addEventListener('click', handleCreate)
destroy.addEventListener('click', handleDestroy)


function handleCreate() {
  const amount = parseInt(input.value)
  if (amount >= 1 && amount <= 100) {
    destroyBoxes();
    createBoxes(amount);
    input.value = '';
  }
}

function createBoxes(amount) {
  let size = 30;
  const fragment = document.createDocumentFragment()
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(box);
    size += 10;
  }
  boxes.appendChild(fragment)
}

function handleDestroy() {
  destroyBoxes();
}
function destroyBoxes() {
  boxes.innerHTML = '';
}


