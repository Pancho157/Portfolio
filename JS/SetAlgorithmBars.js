const barsQuantity = document.getElementById("colsQuantity").value;
var bars = Array.from(
  { length: barsQuantity },
  () => Math.floor(Math.random() * 29 + 1) // Math.random() * (max - min) + min
);

let barsContainer = document.getElementById("algorithm__algorithmContainer");

// Coloca las barras iniciales en el algoritmo
document.addEventListener("DOMContentLoaded", function () {
  bars.forEach((bar) => {
    barsContainer.innerHTML +=
      "<div class='algorithm__bar' style='height: " + bar * 10 + "px'></div>";
  });
});

// Genera un array de la longitud indicada en el range y lo coloca en el contenedor para las barras
document.getElementById("colsQuantity").addEventListener("change", function () {
  let barsQuantity = document.getElementById("colsQuantity").value;
  bars = Array.from(
    { length: barsQuantity },
    () => Math.floor(Math.random() * 29 + 1) // Math.random() * (max - min) + min
  );
  barsContainer.innerHTML = "";
  bars.forEach((bar) => {
    barsContainer.innerHTML +=
      "<div class='algorithm__bar' style='height: " + bar * 10 + "px'></div>";
  });
});

// Hace el cambio entre barras cuando lo llama algún algoritmo
function swap(bar1, bar2) {
  let temp = bar1.style.height;
  bar1.style.height = bar2.style.height;
  bar2.style.height = temp;
}

// Establece el tiempo que tardan las animaciónes cuando lo llama algun algoritmo de Sort
function delayTime(milisec) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, milisec);
  });
}
