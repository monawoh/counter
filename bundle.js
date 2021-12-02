(() => {
  // index.js
  var counter = 0;
  var counterEl = document.querySelector("#counter");
  var incrementButton = document.querySelector("#inc-button");
  incrementButton.addEventListener("click", () => {
    counter += 1;
    counterEl.innerText = counter;
  });
})();
