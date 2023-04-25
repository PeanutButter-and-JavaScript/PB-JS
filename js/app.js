'use strict';

// Global Varriables
const menuElement = document.getElementById('ul');
let PBJMenuArray = [];
// Constructor for chart?


// Global Functions
function getDataFromStorage() {

  let storedPBJArray = localStorage.getItem('PBJArray');
  if (storedPBJArray) {
    PBJMenuArray = JSON.parse(storedPBJArray);
    // if you need to reinstaciate the plain Js objects back into PBJ DO IT HERE!!!
  }
}

function menuRender() {
  getDataFromStorage();
  for (let i = 0; i < PBJMenuArray.length; i++) {
    console.log(PBJMenuArray);
    let liName = document.createElement('li');
    liName.textContent = PBJMenuArray[i].name;
    menuElement.appendChild(liName);

    let liIngredients = document.createElement('li');
    liIngredients.textContent = 'Ingredients: ' + PBJMenuArray[i].breadType + '\n' + PBJMenuArray[i].pbType + '\n' + PBJMenuArray[i].jellyType + '\n' + PBJMenuArray[i].hasBananas + '\n' + PBJMenuArray[i].isCutInTwo;
    menuElement.appendChild(liIngredients);

    let liSrc = document.createElement('li');
    liSrc.textContent = PBJMenuArray[i].src;
    menuElement.appendChild(liSrc);

  }
}


// Executable Code
menuRender();


// Event Listeners
