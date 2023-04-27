'use strict';

// Global Varriables


let chart = null;

const menuElement = document.getElementById('ul');
// let votes = 0;
let voteButton = document.getElementById('voteButton');
const menu = document.getElementById('menu');
// Constructor for chart?



function getDataFromStorage() {

  let storedPBJArray = localStorage.getItem('PBJArray');
  if (storedPBJArray) {
    PBJArray = JSON.parse(storedPBJArray);
    // if you need to reinstaciate the plain Js objects back into PBJ DO IT HERE!!!
    // PBJArray[0].votes++;
    PBJArray = storedPBJArray;
    // console.log('aftervoted', PBJArray);
  }
}


function handleVoteClick() {
  // preventDefault();
  chart.destroy();
  const selectedId = menu.options[menu.selectedIndex].text;
  // const selectedItem = PBJArray.find(item => item.name === selectedId);
  // console.log(selectedId);
  // selectedItem.votes++;
  for (let i = 0; i < PBJArray.length; i++) {
    if (PBJArray[i].name === selectedId) {

      PBJArray[i].votes++;
    }
  }
  // console.log(PBJArray);
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
    // console.log(PBJArray);
    let liName = document.createElement('li');
    liName.textContent = PBJArray[i].name;
    menuElement.appendChild(liName);

    let liIngredients = document.createElement('li');
    liIngredients.textContent = 'Ingredients: ' + PBJArray[i].breadType + '\n' + PBJArray[i].pbType + '\n' + PBJArray[i].jellyType + '\n' + PBJArray[i].hasBananas + '\n' + PBJArray[i].isCutInTwo;
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
    // PBJArray[0].votes++;
    PBJArray.push(storedPBJArray);
    PBJArray.push(PBJArray);
    // console.log('aftervoted', PBJArray);
  }
}

function viewResults() {
  renderChart();
  viewResultsBtn.removeEventListener('click', viewResults);
}

function renderChart() {
  menuRender();
  const ctx = document.getElementById('myChart');
  let pbjNames = [];
  let pbjVotes = [];

  for (let i = 0; i < PBJArray.length; i++) {
    // console.log(PBJArray[i]);
    let name = PBJArray[i].name;

    pbjNames.push(name);
    pbjVotes.push(PBJArray[i].votes);

  }
  // console.log(pbjVotes);
  // console.log(pbjNames);

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
  // console.log(pbjNames);
  // console.log(pbjVotes);
}

getDataFromStorage();
renderChart();










// Executable Code
menuRender();

for (let i = 0; i < PBJArray.length; i++) {
  const option = document.createElement('option');
  option.text = PBJArray[i].name;
  option.value = PBJArray[i];
  menu.add(option);
}

voteButton.addEventListener('click', handleVoteClick);

// Event Listeners
