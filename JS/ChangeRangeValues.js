// Actualiza el valor de las columnas
var colsRange = document.getElementById("colsQuantity");
var toDisplayColsQuantity = document.getElementById("colsValue");

var speedRange = document.getElementById("speedRange");
var toDisplaySpeedQuantity = document.getElementById("speedValue");

// Coloca los valores en los rangos cuando carga la página
document.addEventListener("DOMContentLoaded", function () {
  toDisplayColsQuantity.innerHTML = colsRange.value;

  toDisplaySpeedQuantity.innerHTML = speedRange.value + " ms";
  delay = speedRange.value;
});

// Actualiza los valores de los cuando se cambia su valor
document.getElementById("colsQuantity").addEventListener("change", function () {
  toDisplayColsQuantity.innerHTML = colsRange.value;
});

document.getElementById("speedRange").addEventListener("change", function () {
  toDisplaySpeedQuantity.innerHTML = speedRange.value + " ms";
  delay = speedRange.value;
});
