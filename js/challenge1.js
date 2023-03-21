function setNewImage1() {
  document.getElementById("button-turn-red").src = "/images/CH-button-pushed.png";
}

function setOldImage1() {
  document.getElementById("button-turn-red").src = "/images/CH-button-notpushed.png";
}

function setNewImage2() {
  document.getElementById("button-turn-green").src = "/images/CH-button-pushed.png";
}

function setOldImage2() {
  document.getElementById("button-turn-green").src = "/images/CH-button-notpushed.png";
}

function setNewImage3() {
  document.getElementById("button-turn-blue").src = "/images/CH-button-pushed.png";
}

function setOldImage3() {
  document.getElementById("button-turn-blue").src = "/images/CH-button-notpushed.png";
}



// Make first check turn red when pushed and input gets the correct answer "red".
function changeImage1() {
  let textOne = document.getElementById("text-one").value;
  if (textOne === "red"){
      document.getElementById("button-turn-red").src = "/images/Red-button-pushed.png";
      
      document.getElementById("button-turn-red").onmouseover = function() {mouseOver()};
      document.getElementById("button-turn-red").onmouseout = function() {mouseOut()};
      
  } else {
      document.getElementById("button-turn-red").src = "/images/CH-button-notpushed.png";
  }
}

function changeImage2() {
  let textOne = document.getElementById("text-two").value;
  if (textOne === "green"){
      document.getElementById("button-turn-green").src = "/images/Green-button-pushed.png";
      
      document.getElementById("button-turn-green").onmouseover = function() {mouseOver()};
      document.getElementById("button-turn-green").onmouseout = function() {mouseOut()};
      
  } else {
      document.getElementById("button-turn-green").src = "/images/CH-button-notpushed.png";
  }
}

function changeImage3() {
  let textOne = document.getElementById("text-three").value;
  if (textOne === "blue"){
      document.getElementById("button-turn-blue").src = "/images/Blue-button-pushed.png";
      
      document.getElementById("button-turn-blue").onmouseover = function() {mouseOver()};
      document.getElementById("button-turn-blue").onmouseout = function() {mouseOut()};
      
  } else {
      document.getElementById("button-turn-blue").src = "/images/CH-button-notpushed.png";
  }
}

document.getElementById("win-button").onclick = function () {
  let textOne = document.getElementById("text-one").value;
  let textTwo = document.getElementById("text-two").value;
  let textThree = document.getElementById("text-three").value;
  if (textOne === "red", textTwo === "green", textThree === "blue"){
    document.getElementById("youwin").style.display = "block";
    document.getElementById("ch1-next-button").style.display = "block";
  } else {
    document.getElementById("youwin").style.display = "none";
    document.getElementById("ch1-next-button").style.display = "none";
  }
}