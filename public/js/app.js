console.log('Client side JS file is loaded');

// fetch('https://puzzle.mead.io/puzzle').then(response => {
//   return response.json();
// }).then(people => {
//   console.log(people);
// });

const weatherForm = document.querySelector('form');
const searchValue = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const location = searchValue.value;

  messageOne.textContent = 'Loading...';
  messageTwo.textContent = '';

  fetch(`http://localhost:3000/weather?address=${location}`)
    .then((response) => {
      return response.json();
    }).then((data) => {
    if (data.error) {
      messageOne.textContent = data.error;
    } else {
      messageOne.textContent = data.location;
      messageTwo.textContent = data.forecast;
    }
  })

});