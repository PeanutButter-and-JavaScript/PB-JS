'use strict';

// Global Varriables
let PBJArray = [];

let PBJArrayFromStorage = localStorage.getItem('PBJArray');
if (PBJArrayFromStorage) {
  PBJArray = JSON.parse(PBJArrayFromStorage);
} else {
  let danwich = new PBJ('Danwich', 'wheat', 'chunky', 'grape', true, true, 'img/...');
  let DanwichTwoPointO = new PBJ('DanwichTwoPointO', 'white', 'chunky', 'grape', true, true, 'src');
  let SmashTastic = new PBJ('SmashTastic', 'wheat', 'strawberry', 'chunky', true, true, 'src');
  let antonWich = new PBJ('antonWich', 'wheat', 'smooth', 'strawberry', false, false, 'img/');

  PBJArray.push(danwich, DanwichTwoPointO, SmashTastic, antonWich);
}


// Constructor
function PBJ(name, breadType, pbType, jellyType, bananas, cutInTwo, src) {
  this.name = name;
  this.breadType = breadType;
  this.pbType = pbType;
  this.jellyType = jellyType;
  this.hasBananas = bananas;
  this.isCutInTwo = cutInTwo;
  this.src = `img/${src}.jpg`;
  this.votes = 0;

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



console.log(PBJArray);
