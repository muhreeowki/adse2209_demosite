(function () {
  "use strict";
  window.onload = function () {
    var docCanvas = document.getElementById("my-canvas");
    let myContext = docCanvas.getContext("2d");

    myContext.beginPath();
    myContext.arc(90, 75, 50, 0, Math.PI * 2);
    myContext.lineWidth = 5;
    myContext.strokeStyle = "#fff";
    myContext.stroke();
    myContext.fillStyle = "black";
    myContext.fill();
  };
  window.onload();
})();
