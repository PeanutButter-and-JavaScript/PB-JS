'use strict';

// Global Varriables


let chart = null;

const menuElement = document.getElementById('ul');
// let votes = 0;
let voteButton = document.getElementById('voteButton');
const menu = document.getElementById('menu');

function getDataFromStorage() {

  let storedPBJArray = localStorage.getItem('PBJArray');
  if (storedPBJArray) {
    PBJArray = JSON.parse(storedPBJArray);
    // if you need to reinstaciate the plain Js objects back into PBJ DO IT HERE!!!
    PBJArray = storedPBJArray;
  }
}


function handleVoteClick() {
  // preventDefault();
  chart.destroy();
  const selectedId = menu.options[menu.selectedIndex].text;
  for (let i = 0; i < PBJArray.length; i++) {
    if (PBJArray[i].name === selectedId) {

      PBJArray[i].votes++;
    }
  }
  renderChart();
  // let getChart = document.getElementById('chart');
  // const ctx = document.getElementById('myChart');
  // canvas.parentNode.removeChild(canvas);
  // getChart.removeChild(ctx);
  // let newChart = document.createElement('canvas');
  // newChart.id = 'myChart';
  // getChart.appendChild(ctx);
  // let canvas = ctx.getContext('2d');
  // canvas.clearRect(0, 0, ctx.clientWidth, ctx.clientHeight);
  // setTimeout(() => {
  //   console.log("Delayed for 5 secondz.");
  // }, "5000");
}

voteButton.addEventListener('click', handleVoteClick);

function menuRender() {
  // getDataFromStorage();
  for (let i = 0; i < PBJArray.length; i++) {
    console.log(PBJArray);
    let liName = document.createElement('li');
    liName.textContent = `The ${PBJArray[i].name}`;
    menuElement.appendChild(liName);

    let liIngredients = document.createElement('li');
    liIngredients.textContent = `Ingredients: ${PBJArray[i].breadType}, ${PBJArray[i].pbType}, ${PBJArray[i].jellyType}, ${PBJArray[i].hasBananas} banana, ${PBJArray[i].isCutInTwo} sandwich`;
    menuElement.appendChild(liIngredients);

    let liSrc = document.createElement('li');
    liSrc.textContent = PBJArray[i].src;
    menuElement.appendChild(liSrc);

  }
}

function getDataFromStorage() {

  let storedPBJArray = localStorage.getItem('PBJArray');
  if (storedPBJArray) {
    PBJArray = JSON.parse(storedPBJArray);
    // if you need to reinstaciate the plain Js objects back into PBJ DO IT HERE!!!
  }
}

function renderChart() {
  const ctx = document.getElementById('myChart');
  let pbjNames = [];
  let pbjVotes = [];

  for (let i = 0; i < PBJArray.length; i++) {
    let name = PBJArray[i].name;

    pbjNames.push(name);
    pbjVotes.push(PBJArray[i].votes);

  }

  let config = {
    type: 'bar',
    data: {
      labels: pbjNames,
      datasets: [
        {
          label: 'PBJ Votes',
          data: pbjVotes,
          borderWidth: 1,
          backgroundColor: [
            'rgb(25, 117, 1, 1)'
          ],
          borderColor: [
            'rgb(25, 117, 1, 1)'
          ]
        },

      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  };
  chart = new Chart(ctx, config);
}

getDataFromStorage();
renderChart();


// Executable Code
menuRender();

//adds sandwiches to the drop down votes list
for (let i = 0; i < PBJArray.length; i++) {
  const option = document.createElement('option');
  option.text = PBJArray[i].name;
  option.value = PBJArray[i];
  menu.add(option);
}

voteButton.addEventListener('click', handleVoteClick);

// Event Listeners
