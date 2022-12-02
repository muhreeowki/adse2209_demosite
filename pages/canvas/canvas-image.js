(function () {
  "use strict";
  window.onload = function () {
    let docCanvas = document.getElementById('my-canvas');
    let myContext = docCanvas.getContext('2d');

    let myImage = new Image();
    myImage.src = '/images/html5_logo.png';
    myImage.onload = function () {
        myContext.drawImage(myImage,50, 10, 150, 150);
    }
  }
  window.onload();
})();
