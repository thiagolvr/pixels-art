const randomColor = document.getElementById('color-palette');
const board = document.getElementById('pixel-board');
const colors = randomColor.children;

const generateRandomColor = (div) => {
  var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
};

const createDiv = () => {
  const div = document.createElement('div');
  div.className = 'color';
  div.style.backgroundColor = `${generateRandomColor()}`;
  randomColor.appendChild(div);
};
createDiv();
createDiv();
createDiv();
createDiv();

const firstColorBlack = () => {
  const firstColor = document.getElementsByClassName('color')[0];
  firstColor.style.backgroundColor = 'black';
  firstColor.classList.add('selected');
};
firstColorBlack();

function onlyOneSelectedColor(event) {
  for (let index = 0; index < colors.length; index += 1) {
    colors[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

randomColor.addEventListener('click', onlyOneSelectedColor);

// REFERÊNCIAS
//
// A função que gera a cor foi retirada do site https://dev.to/akhil_001/generating-random-color-with-single-line-of-js-code-fhj
