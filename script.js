const randomColor = document.getElementById('color-palette');

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
