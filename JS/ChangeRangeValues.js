// Actualiza el valor de las columnas
var colsRange = document.getElementById("colsQuantity");
var toDisplayColsQuantity = document.getElementById("colsValue");

document.getElementById("colsQuantity").addEventListener("change", function () {
  toDisplayColsQuantity.innerHTML = colsRange.value;
});


// Actualiza el valor de la velocidad de la animación
var speedRange = document.getElementById("speedRange");
var toDisplaySpeedQuantity = document.getElementById("speedValue");

document.getElementById("speedRange").addEventListener("change", function () {
  toDisplaySpeedQuantity.innerHTML = speedRange.value + " ms";
});
