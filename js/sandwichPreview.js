'use strict';

//sandwich elements

let topBun = document.getElementById('top-bun');
let lettuce = document.getElementById('lettuce');
let tomato = document.getElementById('tomato');
let bottomBun = document.getElementById('bottom-bun');
let lettuceDown = document.getElementById('lettuce-down');
//form elements
let menuBread = document.getElementById('menuBread');

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
// Executable Code


// Event Listeners
menuBread.addEventListener('change', breadChange);
