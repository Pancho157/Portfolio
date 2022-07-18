function toggleDisabledButtons(disabled) {
  let bubbleSortButton = document.getElementById("bubbleSort");
  let selectionSortButton = document.getElementById("selectionSort");
  let insertionSortButton = document.getElementById("insertionSort");
  let quickSortButton = document.getElementById("quickSort");
  let colsRange = document.getElementById("colsQuantity");
  let speedRange = document.getElementById("speedValue");

  if (disabled === true) {
    bubbleSortButton.disabled = true;
    selectionSortButton.disabled = true;
    insertionSortButton.disabled = true;
    quickSortButton.disabled = true;
    colsRange.disabled = true;
    speedRange.disabled = true;
  } else {
    bubbleSortButton.disabled = false;
    selectionSortButton.disabled = false;
    insertionSortButton.disabled = false;
    quickSortButton.disabled = false;
    colsRange.disabled = false;
    speedRange.disabled = false;
  }
}

toggleDisabledButtons(false);
