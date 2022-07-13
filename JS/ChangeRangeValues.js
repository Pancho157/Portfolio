// Actualiza el valor de las columnas
var colsRange = document.getElementById("colsQuantity");
var toDisplayColsQuantity = document.getElementById("colsValue");

document.addEventListener("DOMContentLoaded", function () {
  toDisplayColsQuantity.innerHTML = colsRange.value;
});

document.getElementById("colsQuantity").addEventListener("change", function () {
  toDisplayColsQuantity.innerHTML = colsRange.value;
});

var speedRange = document.getElementById("speedRange");
var toDisplaySpeedQuantity = document.getElementById("speedValue");

document.getElementById("speedRange").addEventListener("change", function () {
  toDisplaySpeedQuantity.innerHTML = speedRange.value + " ms";
});
