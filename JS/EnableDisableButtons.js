var bubbleSortButton = document.getElementById("bubbleSort");
var selectionSortButton = document.getElementById("selectionSort");
var insertionSortButton = document.getElementById("insertionSort");
function disabledButtons(disabled) {
  // let quickSortButton = document.getElementById("quickSort");
  let colsRange = document.getElementById("colsQuantity");
  let speedRange = document.getElementById("speedValue");
  let sortButton = document.getElementById("sortButton");
  let stopSortingButton = document.getElementById("stopSortingButton");

  if (disabled === true) {
    bubbleSortButton.disabled = true;
    selectionSortButton.disabled = true;
    insertionSortButton.disabled = true;
    // quickSortButton.disabled = true;
    colsRange.disabled = true;
    speedRange.disabled = true;
    sortButton.disabled = true;
    stopSortingButton.disabled = false;
  } else {
    bubbleSortButton.disabled = false;
    selectionSortButton.disabled = false;
    insertionSortButton.disabled = false;
    // quickSortButton.disabled = false;
    colsRange.disabled = false;
    speedRange.disabled = false;
    sortButton.disabled = false;
    stopSortingButton.disabled = true;
  }
}

disabledButtons(false);
