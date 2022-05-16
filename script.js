"use strict";

var errorMsg = document.getElementById("error-msg");

init();

function init() {
  getValue();
  clearValue();
}

function getValue() {
  document
    .getElementById("input-data")
    .addEventListener("keyup", function (e) {
      let x = e.target.value;
      console.log(x)
      const regEx  = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/

      if (x.match(regEx)) {
      // if (x === 'xyzzz') {
        errorMsg.classList.add("hidden");
        
      } else {
        errorMsg.classList.remove("hidden");
      }
    });
}

function clearValue() {
  document
    .getElementById("click-button")
    .addEventListener("click", function () {
      document.getElementById("input-data").value = "";
      errorMsg.classList.add("hidden");
    });
}
