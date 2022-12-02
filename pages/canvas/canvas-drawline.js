(function () {
  "use strict";
  window.onload = function () {
    var docCanvas = document.getElementById("my-canvas");
    let myContext = docCanvas.getContext('2d');

    myContext.beginPath();
    myContext.moveTo(50, 100);
    myContext.lineTo(250, 50);
    myContext.lineWidth = 5;
    myContext.strokeStyle = "#fff";
    myContext.stroke();
  }
  window.onload();
})();
