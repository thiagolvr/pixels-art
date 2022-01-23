const randomColor = document.getElementById('color-palette');
const board = document.getElementById('pixel-board');

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
};
firstColorBlack();

// REFERÊNCIAS
//
// A função que gera a cor foi retirada do site https://dev.to/akhil_001/generating-random-color-with-single-line-of-js-code-fhj
