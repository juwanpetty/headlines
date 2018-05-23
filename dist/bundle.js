/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const body = document.querySelector('body');\nconst sidebar = document.querySelector('.js-sidebar');\nconst sidebarIcon = document.querySelector('.js-menu');\nconst sidebarFooter = document.querySelector('.sidebar__footer');\nconst doneButton = document.querySelector('.js-done');\nconst sourceContainer = document.querySelector('.js-sources');\nconst articlesContainer = document.querySelector('.js-articles');\n\nlet inputList;\n\nfeather.replace();\n\n// adding click events to .js-menu and .js-done\nlet clickElements = document.querySelectorAll('.js-done, .js-menu');\nfor (let i = 0; i < clickElements.length; i++) {\n  clickElements[i].addEventListener(\"click\", function() {\n    toggleSidebar();\n  });\n}\n\n// this will only execute when the sidebar is open\nbody.addEventListener('click', () => {\n  if (!(sidebar.classList.contains('hidden'))) { // toggle sidebar ONLY when it does not contain class of 'hidden'\n    toggleSidebar();\n  }\n});\n\n// this stops the event from bubbling up to the body\nlet sidebarElements = document.querySelectorAll('.js-sidebar, .js-menu');\nfor (let i = 0; i < sidebarElements.length; i++) {\n  sidebarElements[i].addEventListener('click', function(e) {\n    e.stopPropagation();\n  });\n}\n\nfunction toggleSidebar() {\n  sidebarIcon.classList.toggle(\"sidebar-open\");\n  sidebar.classList.toggle(\"hidden\");\n  sidebarFooter.classList.toggle(\"hidden\");\n\n  updateSources();\n}\n\n// limit the number of checkboxes that can be checked (limit = 20)\nsourceContainer.addEventListener('change', (e) => {\n  const limit = 20;\n  let counter = 0;\n  let element = e.target; // get the element that was clicked inside the form\n  let inputList = document.querySelectorAll('.source__input');\n\n  for (let i = 0; i < inputList.length; i++) {\n    if (inputList[i].checked === true) {\n      counter++;\n    }\n  }\n\n  if (counter > limit) {\n    element.checked = false;\n  }\n});\n\n\nfunction apiString(string) {\n  let apiKey;\n\n  if (string == 'sources') {\n    apiKey = `https://newsapi.org/v2/${string}?country=us&apiKey=9e0f251af2d2433793804d01f677f4ba`;\n  } else {\n    apiKey = `https://newsapi.org/v2/top-headlines?sources=${string}&apiKey=9e0f251af2d2433793804d01f677f4ba`;\n  }\n  \n  return apiKey;\n}\n\n\n// Create a request variable and assign a new XMLHttpRequest object to it.\nvar request = new XMLHttpRequest();\n\nrequest.open('GET', apiString('sources'), true);\nrequest.onload = function () {\n\n  //categories to sift through\n  const categories = ['business', 'entertainment', 'technology', 'general', 'science', 'sports', 'health'];\n\n    // Begin accessing JSON data \n    let data = JSON.parse(this.response);\n    let sources = data.sources; \n\n    for (let i = 0; i < categories.length; i++) {\n      let filteredArray = sources.filter((sources) => {\n        return sources.category == categories[i];\n      });\n      \n      const h3 = document.createElement('h3');\n\n      // To capitalize the first letter of the category\n      let category = categories[i].split(\"\");\n      category[0] = category[0].toUpperCase();\n      category = category.join(\"\");\n\n      h3.textContent = category;\n\n      const sourceGroup = document.createElement('div');\n      sourceGroup.setAttribute('class', 'source__group');\n\n\n      for (let j = 0; j < filteredArray.length ; j++) {\n        let arraySource = filteredArray[j];\n  \n        const div = document.createElement('div');\n  \n        const input = document.createElement('input');\n        input.setAttribute('type', 'checkbox');\n        input.setAttribute('id', `${arraySource.id}`);\n        input.setAttribute('name', 'source');\n        input.setAttribute('value', `${arraySource.id}`);\n        input.setAttribute('class', 'source__input');\n  \n        const label = document.createElement('label');\n        label.setAttribute('for', `${arraySource.id}`);\n        label.textContent = arraySource.name;\n\n        sourceContainer.appendChild(h3);\n        sourceContainer.appendChild(sourceGroup);\n        sourceGroup.appendChild(div);\n        div.appendChild(input);\n        div.appendChild(label);\n      }\n    } \n\n    inputList = document.querySelectorAll('.source__input');\n\n    if (!localStorage.getItem('sources')) {\n      populateStorage();\n    } else {\n      setSources();\n    }\n};\nrequest.send();\n\n\n\nfunction populateArticles(sources) {\n  request = new XMLHttpRequest();\n\n  request.open('GET', apiString(sources), true);\n  request.onload = function () {\n    // Begin accessing JSON data \n    let data = JSON.parse(this.response);\n    let articles = data.articles; \n\n    for (let i = 0; i < 3; i++) {\n\n      let articleItem = document.createElement('li');\n      articleItem.setAttribute('class', 'article__item');\n\n      let articleLink = document.createElement('a');\n      articleLink.setAttribute('href', `${articles[i].url}`);\n\n      let imageContainer = document.createElement('div');\n      imageContainer.setAttribute('class', 'article__image__container');\n\n      let img = document.createElement('img');\n      img.src = articles[i].urlToImage;\n    \n      if (articles[i].urlToImage == null) { img.src = \"assets/placeholder.jpg\"; } // placeholder if no image path exists\n\n      // waits to load image to check its attributes\n      img.addEventListener(\"load\", () => {\n        if (img.naturalWidth <= 1) { img.src = \"assets/placeholder.jpg\"; } // displays placeholder if img is 1px (IGN)\n      });\n    \n      img.setAttribute('class', 'article__image');\n      img.setAttribute('alt', `image for \"${articles[i].title}\"`);\n\n      let articleDetails = document.createElement('div');\n      articleDetails.setAttribute('class', 'article__details');\n\n      let articleSource = document.createElement('p');\n      articleSource.setAttribute('class', 'article__source');\n      articleSource.textContent = articles[i].source.name;\n\n      if (articles[i].source.name === null) { articleSource.textContent = \"\"; }\n\n      let articleOverflow = document.createElement('div');\n      articleOverflow.setAttribute('class', 'article__overflow');\n\n      let articleTitle = document.createElement('h3');\n      articleTitle.setAttribute('class', 'article__title');\n      articleTitle.innerHTML = articles[i].title;\n\n      let articleDescription = document.createElement('p');\n      articleDescription.setAttribute('class', 'article__description');\n      articleDescription.innerHTML = articles[i].description;\n\n      articlesContainer.appendChild(articleItem);\n      articleItem.appendChild(articleLink);\n      articleLink.appendChild(imageContainer);\n      imageContainer.appendChild(img);\n      articleLink.appendChild(articleDetails);\n      articleDetails.appendChild(articleSource);\n      articleDetails.appendChild(articleOverflow);\n      articleOverflow.appendChild(articleTitle);\n      articleOverflow.appendChild(articleDescription);\n    }\n  };\n\n  request.send();\n}\n\nfunction setSources() {\n  let currentSources = localStorage.getItem('sources');\n\n  let sources = currentSources.split(',');\n\n  // compare sources array items with the array 'inputList'\n  for (let i = 0; i < sources.length; i++) {\n    for (let j = 0; j < inputList.length; j++) {\n\n      // if there is a match (id) set checked=true and break\n      if (sources[i] == inputList[j].id) {\n        inputList[j].checked = true;\n        break;\n      }\n\n    }\n  }\n\n  populateArticles(currentSources);\n}\n\nfunction updateSources() {\n  let formSourcesArray = [];\n  let storedSources = localStorage.getItem('sources');\n  inputList = document.querySelectorAll('.source__input');\n\n  // gather a list of all the checked sources\n  for (let i = 0; i < inputList.length; i++) {\n    // if there is a match (id) set checked=true and break\n    if (inputList[i].checked == true) {\n      formSourcesArray.push(inputList[i].id);\n    }\n  }\n\n  // there is more or less sources checked in the form\n  if ((formSourcesArray.length != storedSources.split(',').length)) {\n    storedSources = formSourcesArray.join(',');\n    update(storedSources);\n  } else {\n    // check to see if the saved string contains sources from the checked form\n    for (let i = 0; i < formSourcesArray.length; i++) {\n      // if any checkbox checked on the form is not in the key/value in localstorage \n      if ( !(storedSources.includes(formSourcesArray[i])) ) {\n        storedSources = formSourcesArray.join(',');\n        update(storedSources);\n      }\n    }\n  }\n\n  function update(sources) {\n    localStorage.setItem('sources', sources);\n    articlesContainer.innerHTML = \"\";\n    populateArticles(sources);\n  }\n}\n\n\nfunction populateStorage() {\n  let sources = [];\n  \n  // get a list of all the the sources\n  for (i = 0; i < inputList.length; i++) {\n    sources.push(inputList[i].id);\n  }\n  \n  // shuffle the array\n  sources.shuffle();\n\n  // grabs the first three indexes from the random array of sources\n  for (let i = 0; i < 3; i++) {\n    for (let j = 0; j < inputList.length; j++) {\n      // if the one of the first three sources matches a source, set its checked to true on the page\n      if (inputList[j].id == sources[i]) {\n        inputList[j].checked = true;\n        break;\n      }\n    }\n  }\n\n  // grap random sources from sidebar (3 max)\n  newSources = `${sources[0]},${sources[1]},${sources[2]}`;\n\n  // set the localstorage sources key/value pair\n  localStorage.setItem('sources', newSources);\n\n  populateArticles(newSources);\n}\n\nArray.prototype.shuffle = function() {\n  var input = this;\n   \n  for (var i = input.length-1; i >=0; i--) {\n   \n      var randomIndex = Math.floor(Math.random()*(i+1)); \n      var itemAtIndex = input[randomIndex]; \n       \n      input[randomIndex] = input[i]; \n      input[i] = itemAtIndex;\n  }\n  return input;\n}\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ })

/******/ });