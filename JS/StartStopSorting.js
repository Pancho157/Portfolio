let hasPressedStart = Boolean(false);
let hasPressedStop = Boolean(false);
let hasPressedStartSorting = new Boolean(false);
var delay;

const sortButton = document
  .getElementById("sortButton")
  .addEventListener("click", async function () {
    hasPressedStart = true;
    hasPressedStop = false;
    disabledButtons(true);

    const bubbleSortAlgorithm = bubbleSortButton.classList.contains("active");
    const selectionSortAlgorithm =
      selectionSortButton.classList.contains("active");
    const insertionSortAlgorithm =
      insertionSortButton.classList.contains("active");

    if (bubbleSortAlgorithm) {
      await bubbleSort();
    } else if (selectionSortAlgorithm) {
      await selectionSort();
    } else if (insertionSortAlgorithm) {
      await insertionSort();
    } else {
      console.log("Ha ocurrido un error seleccionando el algoritmo");
    }

    disabledButtons(false);
  });

const stopSortingButton = document
  .getElementById("stopSortingButton")
  .addEventListener("click", function () {
    hasPressedStop = true;
    disabledButtons(false);
  });
