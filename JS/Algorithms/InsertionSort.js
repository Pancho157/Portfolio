async function insertionSort() {
  const bars = document.querySelectorAll(".algorithm__bar");

  // coloca la primer barra en verde
  bars[0].style.background = "#2BA153";

  for (let i = 1; i < bars.length; i++) {
    // frena si se presiona el boton para parar el algoritmo
    if (hasPressedStop == true) return;

    let j = i - 1; // ultima barra recorrida
    let key = bars[i].style.height;
    bars[i].style.background = "#EAEBB2";

    await delayTime(delay);
    if (hasPressedStop == true) {
      return;
    }

    while (j >= 0 && parseInt(bars[j].style.height) > parseInt(key)) {
      if (hasPressedStop == true) {
        return;
      }
      bars[j].style.background = "#EAEBB2";
      bars[j + 1].style.height = bars[j].style.height;
      j--;

      // Espera el dilay indicado
      await delayTime(delay);

      if (hasPressedStop == true) return;

      for (let k = i; k >= 0; k--) {
        bars[k].style.background = "#2BA153";
      }
    }
    bars[j + 1].style.height = key;
    bars[i].style.background = "#2BA153";
  }
}
