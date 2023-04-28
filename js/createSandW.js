'use strict';

// Global Varriables
let PBJArray = [];
let topBun = document.getElementById('top-bun');
let lettuce = document.getElementById('lettuce');
let tomato = document.getElementById('tomato');
let bottomBun = document.getElementById('bottom-bun');
let lettuceDown = document.getElementById('lettuce-down');
let menuBread = document.getElementById('menuBread');

// add or remove multiple classes:
//div.classList.add("foo", "bar", "baz");
//div.classList.remove("foo", "bar", "baz");


// lettuce.classList.add("grape");
lettuce.classList.add("strawberry");

let PBJArrayFromStorage = localStorage.getItem('PBJArray');
if (PBJArrayFromStorage) {
  PBJArray = JSON.parse(PBJArrayFromStorage);
} else {
  let danwich = new PBJ('Danwich', 'Wheat', 'Chunky', 'Grape', 'Optional: Bananas', 'Whole/Half', 'bananaOption', 5);
  let DanwichTwoPointO = new PBJ('DanwichTwoPointO', 'White', 'Chunky', 'Grape', 'Optional: Bananas', 'Whole/Half', 'chunkyPB', 8);
  let SmashTastic = new PBJ('SmashTastic', 'Wheat', 'Strawberry', 'Chunky', 'Optional: Bananas', 'Whole/Half', 'grapeSandwich', 10);
  let antonWich = new PBJ('AntonWich', 'Wheat', 'Smooth', 'Strawberry', 'Optional: Nutella', 'Whole/Half', 'strawberrySandwich', 15);

  PBJArray.push(danwich, DanwichTwoPointO, SmashTastic, antonWich);
  // PBJMenuArray.push(danwich, DanwichTwoPointO, SmashTastic, antonWich);
}


// Constructor
function PBJ(name, breadType, pbType, jellyType, bananas, cutInTwo, src = 'BioPic', votes = 0) {
  this.name = name;
  this.breadType = breadType;
  this.pbType = pbType;
  this.jellyType = jellyType;
  this.hasBananas = bananas;
  this.isCutInTwo = cutInTwo;
  this.src = `../img/${src}.jpeg`;
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
    cutType,
  );
  function redirectToPage() {
    //window.location.href = "https://peanutbutter-and-javascript.github.io/PB-JS/index.html";
    window.location.href = "https://www.google.com";
  }

  form.removeEventListener('submit', handleSubmit);
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
function breadChange(event){
if (event.target.value === "White"){
  if (topBun.classList.contains('wheat')){
    topBun.classList.remove('wheat');
  }
  topBun.classList.add("white");
}
else {
  if (topBun.classList.contains('white')){
    topBun.classList.remove('white');
  }
  topBun.classList.add("wheat")
};
breadChanged(event)
};

function breadChanged(event){
  if (event.target.value === "White"){
    if (bottomBun.classList.contains('wheat')){
      bottomBun.classList.remove('wheat');
    }
    bottomBun.classList.add("white");
  }
  else {
    if (bottomBun.classList.contains('white')){
      bottomBun.classList.remove('white');
    }
    bottomBun.classList.add("wheat")
  };
  };
// Executable Code


// Event Listeners
menuBread.addEventListener('change',breadChange);
