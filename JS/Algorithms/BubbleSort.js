async function bubbleSort() {
  const bars = document.querySelectorAll(".algorithm__bar");

  for (let i = 0; i < bars.length - 1; i++) {
    for (let j = 0; j < bars.length - i - 1; j++) {
      if (hasPressedStop) return;

      bars[j].getElementsByClassName.background = "#EAEBB2";
      bars[j + 1].getElementsByClassName.background = "#EAEBB2";

      if (bars[j].style.height > bars[j + 1].style.height) {
        await delayTime(delay.value);
        swap(ele[j], ele[j + 1]);
      }
      bars[j].style.background = "#ffffff";
      bars[j + 1].style.background = "#ffffff";
    }
    bars[bars.length - 1 - i].style.background = "#2BA153";
  }
  // bars[0].style.background = "#2BA153";
}

