const paletteFather = document.getElementById('color-palette');
const paletteChilds = paletteFather.children;
const pixelBoard = document.getElementById('pixel-board');
const clearButton = document.getElementById('clear-board');
const input = document.getElementById('board-size');
const generateButton = document.getElementById('generate-board');

// função que gera as cores aleatórias
const generateRandomColor = () => {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return randomColor;
};
// função que cria as quatro div filha da paleta e adiciona as cores aleatórias geradas pela função acima
const createPaletteChilds = () => {
  for (let index = 1; index < 5; index += 1) {
    const div = document.createElement('div');
    div.className = 'color';
    div.style.backgroundColor = `${generateRandomColor()}`;
    paletteFather.appendChild(div);
  }
};
createPaletteChilds();

// função que define a cor preta como cor inicial a primeira div
const firstColorBlack = () => {
  const firstColor = document.getElementsByClassName('color')[0];
  firstColor.style.backgroundColor = 'black';
  firstColor.classList.add('selected');
};
firstColorBlack();

// função que adiciona a classe selected em apenas uma div de cada vez
function onlyOneSelectedColor(event) {
  for (let index = 0; index < paletteChilds.length; index += 1) {
    paletteChilds[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

// função que pinta os pixels com as cores da paleta (falhando)
const paintPixels = (event) => {
  if (event.target.className === 'pixel') {
    event.target.style.backgroundColor =
      document.querySelector('.color.selected').style.backgroundColor;
  }
};

const cleared = () => {
  const pixel = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
};
let pixelSize = 5;

const createBoard = (pixelSize) => {
  for (let index = 0; index < pixelSize; index += 1) {
    const pixelLine = document.createElement('div');
    pixelLine.classList.add('pixel-line');
    pixelBoard.appendChild(pixelLine);
    for (let index = 0; index < pixelSize; index += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixelLine.appendChild(pixel);
    }
  }
};
createBoard(pixelSize);

const customBoard = () => {
  let inputNumbers = input.value;
  if (inputNumbers === '') {
    alert('Board Inválido!');
  } else if (inputNumbers < 5 && inputNumbers <= 50) {
    alert('número inválido');
  }
  const pixel = document.querySelectorAll('.pixel');
  let pixelLineFather = document.getElementsByClassName('pixel-line');

  while (pixelLineFather.length > 0) {
    pixelLineFather[0].parentNode.removeChild(pixelLineFather[0]);
  }
  createBoard(inputNumbers);
};

function addListener() {
  generateButton.addEventListener('click', customBoard);
  clearButton.addEventListener('click', cleared);
  pixelBoard.addEventListener('click', paintPixels);
  paletteFather.addEventListener('click', onlyOneSelectedColor);
}
addListener();

// REFERÊNCIAS
//
// A função que gera a cor foi retirada do site https://dev.to/akhil_001/generating-random-color-with-single-line-of-js-code-fhj
