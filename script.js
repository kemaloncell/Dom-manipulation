const widthInput = document.querySelector('#widthInput');
const heightInput = document.getElementById('heightInput');
const back_color = document.getElementById('back_color');
const thickness = document.getElementById('thickness');
const type = document.getElementById('type');
const frame_color = document.getElementById('frame_color');
const external_space = document.getElementById('external_space');
const inner_space = document.getElementById('inner_space');
const rotateInput = document.getElementById('rotateInput');
const createdBtn = document.getElementById('created');
const rightDiv = document.querySelector('.rightDiv');

/*function that will run when clicked*/

createdBtn.addEventListener('click', createdDiv);
function createdDiv() {
  rightDiv.style.cssText = `
  width:${widthInput.value}px; 
  height:${widthInput.value}px;
  background-color:${back_color.value};
  border-width:${thickness.value};
  border-style:${type.value};
  border-color:${frame_color.value};
  margin:${external_space.value}px;
  padding:${inner_space.value}px;
  transform:rotate(${rotateInput.value}deg);
  `;
}
