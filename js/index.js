document.addEventListener("DOMContentLoaded", function() {

/* "iPhone 14" styling */

function displayTime() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  var time = hours + ':' + minutes;
  document.getElementById('time').innerHTML = time;
  setTimeout(displayTime, 1000);
}

displayTime();

/* Selected Store Branch */

const errorMessage = document.querySelector('#errorMessage');
const searchForm = document.querySelector('#searchForm');
const searchInput = document.querySelector('#searchInput');
const searchButton = document.querySelector('#searchButton');

searchInput.addEventListener('input', function() {
  if (searchInput.value.trim().length > 0) {
    searchButton.classList.remove('searchbuttoninactive');
    searchButton.classList.add('searchbuttonactive');
  } else {
    searchButton.classList.add('searchbuttoninactive');
    searchButton.classList.remove('searchbuttonactive');
  }
  
  if (!errorMessage.classList.contains('hide') && !isSearchTermValid(searchInput.value.trim().toLowerCase())) {
    errorMessage.classList.add('hide');
    searchInput.classList.remove('searcherror');
  }
});

searchForm.addEventListener('submit', function(event) {
  event.preventDefault();
  console.log('Form submitted!');
  const searchTerm = searchInput.value.trim().toLowerCase();
  
  if (isSearchTermValid(searchTerm)) {
    window.location.href = '3_productdetail.html';
  } else {
    searchInput.classList.add('searcherror');
    errorMessage.classList.remove('hide');
  }
});

searchInput.addEventListener('focus', function() {
  searchInput.placeholder = '';
});

searchInput.addEventListener('blur', function() {
  searchInput.placeholder = 'Enter a keyword, like "Apples"';
  searchInput.classList.remove('searcherror');
  errorMessage.classList.add('hide');
});

function isSearchTermValid(searchTerm) {
  const acceptedInputs = ["water chestnuts", "waterchestnuts", "waterchestnut", "chestnuts", "chestnut", "nuts", "nut", "water"];
  return acceptedInputs.includes(searchTerm);
}

});