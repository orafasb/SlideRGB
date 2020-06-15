window.addEventListener("load", changecolor);

function changecolor() {
  const red = document.getElementById("red").value;
  const green = document.getElementById("green").value;
  const blue = document.getElementById("blue").value;
  const color = "rgb(" + red + "," + green + "," + blue + ")";

  document.getElementById("squareResult").style.background = color;
  document.getElementById("value").innerHTML = ": " + color;

  document.getElementById("red").addEventListener("input", changecolor);
  document.getElementById("green").addEventListener("input", changecolor);
  document.getElementById("blue").addEventListener("input", changecolor);
}
