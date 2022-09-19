async function bubbleSort() {
  const bars = document.querySelectorAll(".algorithm__bar");
  // El primer loop es para recorrer todas las columnas
  // El segundo loop es para ir moviendolas
  for (let i = 0; i < bars.length - 1; i++) {
    for (let j = 0; j < bars.length - i - 1; j++) {
      // Para el algoritmo cuando se presiona el boton
      if (hasPressedStop == true) return;

      // coloca el color rojo a las barras que no se estan comparando
      bars[j].style.background = "#EAEBB2";
      bars[j + 1].style.background = "#EAEBB2";

      // Espera entre iteraciones del segundo loop
      await delayTime(delay);

      // Si el de la izquierda es mayor al de la derecha los cambia de lado
      if (parseInt(bars[j].style.height) > parseInt(bars[j + 1].style.height)) {
        swap(bars[j], bars[j + 1]);
      }

      // Coloca el color amarillo (comparación)
      bars[j].style.background = "#e43f5a";
      bars[j + 1].style.background = "#e43f5a";
    }
    // Coloca el color verde a las ya posicionadas
    bars[bars.length - 1 - i].style.background = "#2BA153";
  }
  // Coloca el color verde en la ultima iteración del primer loop
  bars[0].style.background = "#2BA153";
}
