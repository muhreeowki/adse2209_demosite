(function () {
  "use strict";
  window.onload = function () {
    var docCanvas = document.getElementById("my-canvas");
    let myContext = docCanvas.getContext('2d');

    myContext.beginPath();
    myContext.rect(50, 100, 200, 100)
    myContext.lineWidth = 5;
    myContext.strokeStyle = "#fff";
    myContext.stroke();
    myContext.fillstyle = "#fff"
    myContext.fill();

  }
  window.onload();
})();
