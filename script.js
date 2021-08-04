"use strict";
// debugger;
let count = 1;
let blocks = [];
var checkarr;
const card = document.getElementById("card");

for (let i = 1; i <= 9; i++) {
  blocks[i] = document.getElementById(i);
}

blocks.forEach(function (block) {
  block.addEventListener("click", function () {
    if (count == 1 && block.innerHTML == "") {
      block.innerHTML = "<p>X</p>";
      count = 2;
      finish();
    } else if (count == 2 && block.innerHTML == "") {
      block.innerHTML = "<p>O</p>";
      count = 1;
      finish();
    } else {
      alert("Choose another block");
    }
  });
});

function finish() {
  checkarr = blocks.map(function (block) {
    if (block.innerHTML !== "") {
      return true;
    } else {
      return false;
    }
  });
  checkarr[0] = true;
  if (checkarr.every((v) => v === true)) {
    whoWinner();
  }
}

function whoWinner() {
  if (
    blocks[1].innerHTML == blocks[2].innerHTML &&
    blocks[1].innerHTML == blocks[3].innerHTML
  ) {
    // alert(`Winner is ${blocks[1].innerHTML.charAt(3)}`);
    card.innerHTML = `<p id="meseege">Winner is ${blocks[1].innerHTML.charAt(3)}</p>`;
    card.style.display = "block";
    reset();
  } else if (
    blocks[4].innerHTML == blocks[5].innerHTML &&
    blocks[4].innerHTML == blocks[6].innerHTML
  ) {
    // alert(`Winner is ${blocks[4].innerHTML.charAt(3)}`);
    card.innerHTML = `<p id="meseege">Winner is ${blocks[1].innerHTML.charAt(3)}</p>`;
    card.style.display = "block";
    reset();
  } else if (
    blocks[7].innerHTML == blocks[8].innerHTML &&
    blocks[7].innerHTML == blocks[9].innerHTML
  ) {
    // alert(`Winner is ${blocks[7].innerHTML.charAt(3)}`);
    card.innerHTML = `<p id="meseege">Winner is ${blocks[1].innerHTML.charAt(3)}</p>`;
    card.style.display = "block";
    reset();
  } else if (
    blocks[1].innerHTML == blocks[5].innerHTML &&
    blocks[1].innerHTML == blocks[9].innerHTML
  ) {
    // alert(`Winner is ${blocks[1].innerHTML.charAt(3)}`);
    card.innerHTML = `<p id="meseege">Winner is ${blocks[1].innerHTML.charAt(3)}</p>`;
    card.style.display = "block";
    reset();
  } else if (
    blocks[3].innerHTML == blocks[5].innerHTML &&
    blocks[3].innerHTML == blocks[7].innerHTML
  ) {
    // alert(`Winner is ${blocks[3].innerHTML.charAt(3)}`);
    card.innerHTML = `<p id="meseege">Winner is ${blocks[1].innerHTML.charAt(3)}</p>`;
    card.style.display = "block";
    reset();
  } else if (
    blocks[1].innerHTML == blocks[4].innerHTML &&
    blocks[1].innerHTML == blocks[7].innerHTML
  ) {
    // alert(`Winner is ${blocks[1].innerHTML.charAt(3)}`);
    card.innerHTML = `<p id="meseege">Winner is ${blocks[1].innerHTML.charAt(3)}</p>`;
    card.style.display = "block";
    reset();
  } else if (
    blocks[2].innerHTML == blocks[5].innerHTML &&
    blocks[2].innerHTML == blocks[8].innerHTML
  ) {
    // alert(`Winner is ${blocks[2].innerHTML.charAt(3)}`);
    card.innerHTML = `<p id="meseege">Winner is ${blocks[1].innerHTML.charAt(3)}</p>`;
    card.style.display = "block";
    reset();
  } else if (
    blocks[3].innerHTML == blocks[6].innerHTML &&
    blocks[3].innerHTML == blocks[9].innerHTML
  ) {
    // alert(`Winner is ${blocks[3].innerHTML.charAt(3)}`);
    card.innerHTML = `<p id="meseege">Winner is ${blocks[1].innerHTML.charAt(3)}</p>`;
    card.style.display = "block";
    reset();
  } else {
    // alert("Nobody won");
    card.innerHTML = `<p id="meseege">Winner is ${blocks[1].innerHTML.charAt(3)}</p>`;
    card.style.display = "block";
    reset();
  }
}

function reset() {
  setTimeout(() => {blocks.forEach(function (block) {
    block.innerHTML = "";
    card.style.display = 'none';
  });
  count = 1}, 3000);
}