'use strict';

//sandwich elements

let topBun = document.getElementById('top-bun');
let lettuce = document.getElementById('lettuce');
let tomato = document.getElementById('tomato');
let bottomBun = document.getElementById('bottom-bun');
let lettuceDown = document.getElementById('lettuce-down');

//form elements
let menuBread = document.getElementById('menuBread');
let lettuceToss = document.getElementById('lettuceToss');
let lettuceDownToss = document.getElementById('lettuceDownToss');
let tomatoChange = document.getElementById('menuTomato')
// add or remove multiple classes:
//div.classList.add("foo", "bar", "baz");
//div.classList.remove("foo", "bar", "baz");


// lettuce.classList.add("grape");
// lettuce.classList.add("strawberry");

function breadChange(event) {
  if (event.target.value === "White") {
    if (topBun.classList.contains('wheat')) {
      topBun.classList.remove('wheat');
    }
    topBun.classList.add("white");
  }
  else {
    if (topBun.classList.contains('white')) {
      topBun.classList.remove('white');
    }
    topBun.classList.add("wheat")
  };
  breadChanged(event)
};

function breadChanged(event) {
  if (event.target.value === "White") {
    if (bottomBun.classList.contains('wheat')) {
      bottomBun.classList.remove('wheat');
    }
    bottomBun.classList.add("white");
  }
  else {
    if (bottomBun.classList.contains('white')) {
      bottomBun.classList.remove('white');
    }
    bottomBun.classList.add("wheat")
  };
};

// lettuce.classList.add("grape");
// lettuce.classList.add("strawberry");

function lettuceChange(event) {
  if (event.target.value === "grape") {
    if (lettuce.classList.contains('strawberry')) {
      bottomBun.classList.remove('strawberry');
    }
    lettuce.classList.add("grape");
  }
  else {
    if (lettuce.classList.contains('grape')) {
      lettuce.classList.remove('grape');
    }
    lettuce.classList.add("strawberry")
  };
};

function lettuceDownChange(event) {
  if (event.target.value === "grape") {
    if (lettuceDown.classList.contains('strawberry')) {
      bottomBun.classList.remove('strawberry');
    }
    lettuceDown.classList.add("grape");
  }
  else {
    if (lettuceDown.classList.contains('grape')) {
      lettuce.classList.remove('grape');
    }
    lettuceDown.classList.add("strawberry")
  };
};
// Executable Code


// Event Listeners 
// menu bread is the select element; matches the value at the top of the page ex. getelementbyid.
//breadchange is the name of the function
menuBread.addEventListener('change', breadChange);

lettuceToss.addEventListener('change', lettuceChange);

lettuceDownToss.addEventListener('change', lettuceDownChange);
