'use strict';

// Global Varriables
const menuElement = document.getElementById('ul');

// Constructor for chart?


// Global Functions
function menuRender() {
  for (let i = 0; i < getDataFromStorage.PBJArray.length; i++) {
    let li = document.createElement('li');
    menuElement.appendChild(li);

  }
}


// Executable Code
getDataFromStorage();
menuRender();


// Event Listeners
