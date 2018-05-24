import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.scss/normalize.scss';
import './styles/style.scss';

import './icons';

const body = document.querySelector('body');
const sidebar = document.querySelector('.js-sidebar');
const sidebarIcon = document.querySelector('.js-menu');
const sidebarFooter = document.querySelector('.sidebar__footer');
const doneButton = document.querySelector('.js-done');
const sourceContainer = document.querySelector('.js-sources');
const articlesContainer = document.querySelector('.js-articles');

let inputList;


// adding click events to .js-menu and .js-done
let clickElements = document.querySelectorAll('.js-done, .js-menu');
for (let i = 0; i < clickElements.length; i++) {
  clickElements[i].addEventListener("click", function() {
    toggleSidebar();
  });
}

// this will only execute when the sidebar is open
body.addEventListener('click', () => {
  if (!(sidebar.classList.contains('hidden'))) { // toggle sidebar ONLY when it does not contain class of 'hidden'
    toggleSidebar();
  }
});

// this stops the event from bubbling up to the body
let sidebarElements = document.querySelectorAll('.js-sidebar, .js-menu');
for (let i = 0; i < sidebarElements.length; i++) {
  sidebarElements[i].addEventListener('click', function(e) {
    e.stopPropagation();
  });
}

function toggleSidebar() {
  sidebarIcon.classList.toggle("sidebar-open");
  sidebar.classList.toggle("hidden");
  sidebarFooter.classList.toggle("hidden");

  updateSources();
}

// limit the number of checkboxes that can be checked (limit = 20)
sourceContainer.addEventListener('change', (e) => {
  const limit = 20;
  let counter = 0;
  let element = e.target; // get the element that was clicked inside the form
  let inputList = document.querySelectorAll('.source__input');

  for (let i = 0; i < inputList.length; i++) {
    if (inputList[i].checked === true) {
      counter++;
    }
  }

  if (counter > limit) {
    element.checked = false;
  }
});


function apiString(string) {
  let apiKey;

  if (string == 'sources') {
    apiKey = `https://newsapi.org/v2/${string}?country=us&apiKey=9e0f251af2d2433793804d01f677f4ba`;
  } else {
    apiKey = `https://newsapi.org/v2/top-headlines?sources=${string}&apiKey=9e0f251af2d2433793804d01f677f4ba`;
  }
  
  return apiKey;
}


// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

request.open('GET', apiString('sources'), true);
request.onload = function () {

  //categories to sift through
  const categories = ['business', 'entertainment', 'technology', 'general', 'science', 'sports', 'health'];

    // Begin accessing JSON data 
    let data = JSON.parse(this.response);
    let sources = data.sources; 

    for (let i = 0; i < categories.length; i++) {
      let filteredArray = sources.filter((sources) => {
        return sources.category == categories[i];
      });
      
      const h3 = document.createElement('h3');

      // To capitalize the first letter of the category
      let category = categories[i].split("");
      category[0] = category[0].toUpperCase();
      category = category.join("");

      h3.textContent = category;

      const sourceGroup = document.createElement('div');
      sourceGroup.setAttribute('class', 'source__group');


      for (let j = 0; j < filteredArray.length ; j++) {
        let arraySource = filteredArray[j];
  
        const div = document.createElement('div');
  
        const input = document.createElement('input');
        input.setAttribute('type', 'checkbox');
        input.setAttribute('id', `${arraySource.id}`);
        input.setAttribute('name', 'source');
        input.setAttribute('value', `${arraySource.id}`);
        input.setAttribute('class', 'source__input');
  
        const label = document.createElement('label');
        label.setAttribute('for', `${arraySource.id}`);
        label.textContent = arraySource.name;

        sourceContainer.appendChild(h3);
        sourceContainer.appendChild(sourceGroup);
        sourceGroup.appendChild(div);
        div.appendChild(input);
        div.appendChild(label);
      }
    } 

    inputList = document.querySelectorAll('.source__input');

    if (!localStorage.getItem('sources')) {
      populateStorage();
    } else {
      setSources();
    }
};
request.send();



function populateArticles(sources) {
  request = new XMLHttpRequest();

  request.open('GET', apiString(sources), true);
  request.onload = function () {
    // Begin accessing JSON data 
    let data = JSON.parse(this.response);
    let articles = data.articles; 

    for (let i = 0; i < 3; i++) {

      let articleItem = document.createElement('li');
      articleItem.setAttribute('class', 'article__item');

      let articleLink = document.createElement('a');
      articleLink.setAttribute('href', `${articles[i].url}`);

      let imageContainer = document.createElement('div');
      imageContainer.setAttribute('class', 'article__image__container');

      let img = document.createElement('img');
      img.src = articles[i].urlToImage;
    
      if (articles[i].urlToImage == null) { img.src = "assets/placeholder.jpg"; } // placeholder if no image path exists

      // waits to load image to check its attributes
      img.addEventListener("load", () => {
        if (img.naturalWidth <= 1) { img.src = "assets/placeholder.jpg"; } // displays placeholder if img is 1px (IGN)
      });
    
      img.setAttribute('class', 'article__image');
      img.setAttribute('alt', `image for "${articles[i].title}"`);

      let articleDetails = document.createElement('div');
      articleDetails.setAttribute('class', 'article__details');

      let articleSource = document.createElement('p');
      articleSource.setAttribute('class', 'article__source');
      articleSource.textContent = articles[i].source.name;

      if (articles[i].source.name === null) { articleSource.textContent = ""; }

      let articleOverflow = document.createElement('div');
      articleOverflow.setAttribute('class', 'article__overflow');

      let articleTitle = document.createElement('h3');
      articleTitle.setAttribute('class', 'article__title');
      articleTitle.innerHTML = articles[i].title;

      let articleDescription = document.createElement('p');
      articleDescription.setAttribute('class', 'article__description');
      articleDescription.innerHTML = articles[i].description;

      articlesContainer.appendChild(articleItem);
      articleItem.appendChild(articleLink);
      articleLink.appendChild(imageContainer);
      imageContainer.appendChild(img);
      articleLink.appendChild(articleDetails);
      articleDetails.appendChild(articleSource);
      articleDetails.appendChild(articleOverflow);
      articleOverflow.appendChild(articleTitle);
      articleOverflow.appendChild(articleDescription);
    }
  };

  request.send();
}

function setSources() {
  let currentSources = localStorage.getItem('sources');

  let sources = currentSources.split(',');

  // compare sources array items with the array 'inputList'
  for (let i = 0; i < sources.length; i++) {
    for (let j = 0; j < inputList.length; j++) {

      // if there is a match (id) set checked=true and break
      if (sources[i] == inputList[j].id) {
        inputList[j].checked = true;
        break;
      }

    }
  }

  populateArticles(currentSources);
}

function updateSources() {
  let formSourcesArray = [];
  let storedSources = localStorage.getItem('sources');
  inputList = document.querySelectorAll('.source__input');

  // gather a list of all the checked sources
  for (let i = 0; i < inputList.length; i++) {
    // if there is a match (id) set checked=true and break
    if (inputList[i].checked == true) {
      formSourcesArray.push(inputList[i].id);
    }
  }

  // there is more or less sources checked in the form
  if ((formSourcesArray.length != storedSources.split(',').length)) {
    storedSources = formSourcesArray.join(',');
    update(storedSources);
  } else {
    // check to see if the saved string contains sources from the checked form
    for (let i = 0; i < formSourcesArray.length; i++) {
      // if any checkbox checked on the form is not in the key/value in localstorage 
      if ( !(storedSources.includes(formSourcesArray[i])) ) {
        storedSources = formSourcesArray.join(',');
        update(storedSources);
      }
    }
  }

  function update(sources) {
    localStorage.setItem('sources', sources);
    articlesContainer.innerHTML = "";
    populateArticles(sources);
  }
}


function populateStorage() {
  let sources = [];
  
  // get a list of all the the sources
  for (let i = 0; i < inputList.length; i++) {
    sources.push(inputList[i].id);
  }
  
  // shuffle the array
  sources.shuffle();

  // grabs the first three indexes from the random array of sources
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < inputList.length; j++) {
      // if the one of the first three sources matches a source, set its checked to true on the page
      if (inputList[j].id == sources[i]) {
        inputList[j].checked = true;
        break;
      }
    }
  }

  // grap random sources from sidebar (3 max)
  let newSources = `${sources[0]},${sources[1]},${sources[2]}`;

  // set the localstorage sources key/value pair
  localStorage.setItem('sources', newSources);

  populateArticles(newSources);
}

Array.prototype.shuffle = function() {
  var input = this;
   
  for (var i = input.length-1; i >=0; i--) {
   
      var randomIndex = Math.floor(Math.random()*(i+1)); 
      var itemAtIndex = input[randomIndex]; 
       
      input[randomIndex] = input[i]; 
      input[i] = itemAtIndex;
  }
  return input;
}