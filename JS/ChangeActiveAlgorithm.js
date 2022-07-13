let list = document.querySelectorAll(".algorithm__option");
for (let i = 0; i < list.length; i++) {
  list[i].onclick = function () {
    let j = 0;
    while (j < list.length) {
      list[j++].className = "frontShadow algorithm__option";
    }
    list[i].className = "frontShadow algorithm__option active";
  };
}
