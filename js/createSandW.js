'use strict';

// Global Varriables
let PBJArray = [];

// Constructor
function PBJ(name, breadType, pbType, jellyType, bananas, cutInTwo, src) {
  this.name = name;
  this.breadType = breadType;
  this.pbType = pbType;
  this.jellyType = jellyType;
  this.hasBananas = bananas;
  this.isCutInTwo = cutInTwo;
  this.src = `img/${src}.jpg`;
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
  makePBJ(
    name,
    breadType,
    pBType,
    jellyType,
    bananaType,
    cutType
  );
  console.log(PBJArray);
};

function storeDataInStorage() {
  let strigifyPBJArray = JSON.stringify(PBJArray);
  localStorage.setItem('PBJArray', strigifyPBJArray);
}

// function getDataFromStorage() {

//   let storedPBJArray = localStorage.getItem('PBJArray');
//   if (storedPBJArray) {
//     PBJArray = JSON.parse(storedPBJArray);
//     // if you need to reinstaciate the plain Js objects back into PBJ DO IT HERE!!!
//   }
// }

function makePBJ(name, breadType, pbType, jellyType, bananas, cutInTwo, src) {
  let sando = new PBJ(name, breadType, pbType, jellyType, bananas, cutInTwo, src);
  PBJArray.push(sando);
  storeDataInStorage();
}

// Executable Code

makePBJ('Danwich', 'wheat', 'chunky', 'grape', true, true, 'img/...');
makePBJ('DanwichTwoPointO', 'white', 'chunky', 'grape', true, true, 'src');
makePBJ('SmashTastic', 'wheat', 'strawberry', 'chunky', true, true, 'src');

// Event Listeners



console.log(PBJArray);
