"use strict";


// Opgave 3
let fruitListContent = document.querySelector(".fruitList");

// Eksempel array
let fruits = ["Apple", "Banana", "Orange", "Mango", "Dragonfruit", "Strawberry", "Blueberry"];

// Opgave 4
let content = "";

// forEach loop
fruits.forEach(function (fruit) {
  content += `<li>${fruit}</li>`;
});

// indsæt i HTML
fruitListContent.innerHTML = content;




























