let hasPressedStart = Boolean(false);
let hasPressedStop = Boolean(false);
let hasPressedStartSorting = new Boolean(false);
var delay;
disabledButtons(false);

const sortButton = document
  .getElementById("sortButton")
  .addEventListener("click", async function () {
    hasPressedStart = true;
    hasPressedStop = false;
    disabledButtons(true);
    await selectionSort();
    disabledButtons(false);
  });

const stopSortingButton = document
  .getElementById("stopSortingButton")
  .addEventListener("click", function () {
    hasPressedStop = true;
    disabledButtons(false);
  });
