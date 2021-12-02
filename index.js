let counter = 0; // using let, since we'll update this variable
const counterEl = document.querySelector('#counter');
const incrementButton = document.querySelector('#inc-button');

incrementButton.addEventListener('click', () => {
  counter += 1;
  counterEl.innerText = counter;
});