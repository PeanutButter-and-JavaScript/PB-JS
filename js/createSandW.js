'use strict';

// Global Varriables
let PBJArray = [];

let PBJArrayFromStorage = localStorage.getItem('PBJArray');
if (PBJArrayFromStorage) {
  PBJArray = JSON.parse(PBJArrayFromStorage);
} else {
  let danwich = new PBJ('Danwich', 'Wheat', 'Chunky', 'Grape', 'Bananas', 'Whole/Half', 'img/...', 5);
  let DanwichTwoPointO = new PBJ('DanwichTwoPointO', 'White', 'Chunky', 'Grape', 'Bananas', 'Whole/Half', 'src',8);
  let SmashTastic = new PBJ('SmashTastic', 'Wheat', 'Strawberry', 'Chunky', 'Bananas', 'Whole/Half', 'src', 10);
  let antonWich = new PBJ('AntonWich', 'Wheat', 'Smooth', 'Strawberry', 'Nutella', 'Whole/Half', 'img/', 15);

  PBJArray.push(danwich, DanwichTwoPointO, SmashTastic, antonWich);
  // PBJMenuArray.push(danwich, DanwichTwoPointO, SmashTastic, antonWich);
}


// Constructor
function PBJ(name, breadType, pbType, jellyType, bananas, cutInTwo, src, votes = 0) {
  this.name = name;
  this.breadType = breadType;
  this.pbType = pbType;
  this.jellyType = jellyType;
  this.hasBananas = bananas;
  this.isCutInTwo = cutInTwo;
  this.src = `img/${src}.jpg`;
  this.votes = votes;

}

// Global Functions

let handleSubmit = function (event) {
  event.preventDefault();
  const name = event.target.name.value;
  const breadType = event.target.breadType.value;
  const pBType = event.target.pBType.value;
  const jellyType = event.target.jellyType.value;
  const bananaType = event.target.bananaType.value;
  const cutType = event.target.cutType.value;
  console.log(breadType, pBType, jellyType, bananaType, cutType);
  console.log(event);
  makePBJ(
    name,
    breadType,
    pBType,
    jellyType,
    bananaType,
    cutType
  );
  function redirectToPage() {
    //window.location.href = "https://peanutbutter-and-javascript.github.io/PB-JS/index.html";
    window.location.href = "https://www.google.com";
  }

  form.removeEventListener('submit',handleSubmit);
  console.log(PBJArray);
  console.log(breadType);
};


// function getDataFromStorage() {

//   let storedPBJArray = localStorage.getItem('PBJArray');
//   if (storedPBJArray) {
//     PBJArray = JSON.parse(storedPBJArray);
//     // if you need to reinstaciate the plain Js objects back into PBJ DO IT HERE!!!
//   }
// }

function makePBJ(name, breadType, pbType, jellyType, bananas, cutInTwo, src, votes) {
  let sando = new PBJ(name, breadType, pbType, jellyType, bananas, cutInTwo, src, votes);
  PBJArray.push(sando);
  storeDataInStorage();
}

function storeDataInStorage() {
  let strigifyPBJArray = JSON.stringify(PBJArray);
  localStorage.setItem('PBJArray', strigifyPBJArray);
}
// Executable Code


// Event Listeners
