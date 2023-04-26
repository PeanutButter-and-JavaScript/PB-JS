'use strict';

// Global Varriables
const menuElement = document.getElementById('ul');
let PBJMenuArray = [];
// let votes = 0;
let voteButton = document.getElementById('voteButton');
const menu = document.getElementById('menu');
// Constructor for chart?



function getDataFromStorage() {

  let storedPBJArray = localStorage.getItem('PBJArray');
  if (storedPBJArray) {
    PBJMenuArray = JSON.parse(storedPBJArray);
    // if you need to reinstaciate the plain Js objects back into PBJ DO IT HERE!!!
    // PBJMenuArray[0].votes++;
    console.log('aftervoted', PBJMenuArray);
  }
}


function handleVoteClick() {
  // event.preventDefault();
  const selectedId = menu.options[menu.selectedIndex].text;
  const selectedItem = PBJMenuArray.find(item => item.name === selectedId);
  console.log(selectedId);
  selectedItem.votes++;
  console.log(PBJMenuArray);
}

voteButton.addEventListener('click',handleVoteClick);

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

for (let i = 0; i < PBJMenuArray.length; i++) {
  const option = document.createElement('option');
  option.text = PBJMenuArray[i].name;
  option.value = PBJMenuArray[i];
  menu.add(option);
}

voteButton.addEventListener('click', handleVoteClick);

// Event Listeners
