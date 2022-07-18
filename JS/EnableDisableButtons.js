function toggleDisabledButtons(disabled) {
  if (disabled) {
    document.querySelectorAll(".algorithm__option").disabled = true;
    document.querySelectorAll(".algorithm__columnsQuantity").disabled = true;
  } else {
    document.querySelectorAll(".algorithm__option").disabled = false;
    document.querySelectorAll(".algorithm__columnsQuantity").disabled = false;
  }
}

toggleDisabledButtons(true);
