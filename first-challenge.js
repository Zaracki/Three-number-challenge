
function setNewImage() {
  document.getElementById("button-one").src = "/images/Button-pressed.png";
}

function setOldImage() {
  document.getElementById("button-one").src = "/images/Button-unchecked.png";
}

function setNewImageSec() {
  document.getElementById("button-two").src = "/images/Button-pressed.png";
}

function setOldImageSec() {
  document.getElementById("button-two").src = "/images/Button-unchecked.png";
}

function setNewImageThird() {
  document.getElementById("button-three").src = "/images/Button-pressed.png";
}

function setOldImageThird() {
  document.getElementById("button-three").src = "/images/Button-unchecked.png";
}




document.getElementById("button-one").onclick = function () {
  let textOne = document.getElementById("text-one").value;
  if (textOne === "red"){
    document.getElementById("number-one").style.color = "red";
  } else {
    document.getElementById("number-one").style.color = "white";
  }
}

document.getElementById("button-two").onclick = function () {
  let textOne = document.getElementById("text-two").value;
  if (textOne === "green"){
    document.getElementById("number-two").style.color = "green";
  } else {
    document.getElementById("number-two").style.color = "white";
  }
}

document.getElementById("button-three").onclick = function () {
  let textOne = document.getElementById("text-three").value;
  if (textOne === "blue"){
    document.getElementById("number-three").style.color = "blue";
  } else {
    document.getElementById("number-three").style.color = "white";
  }
}

document.getElementById("win-button").onclick = function () {
  let textOne = document.getElementById("text-one").value;
  let textTwo = document.getElementById("text-two").value;
  let textThree = document.getElementById("text-three").value;
  if (textOne === "red", textTwo === "green", textThree === "blue"){
    document.getElementById("win").style.display = "block";
  } else {
    document.getElementById("number-three").style.display = "none";
  }
}