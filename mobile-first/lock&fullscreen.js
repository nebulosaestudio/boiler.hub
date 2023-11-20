function fullScreen() {
  // Kind of painful, but this is how it works for now
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  } else if (document.documentElement.mozRequestFullScreen) {
    document.documentElement.mozRequestFullScreen();
  } else if (document.documentElement.webkitRequestFullscreen) {
    document.documentElement.webkitRequestFullscreen();
  } else if (document.documentElement.msRequestFullscreen) {
    document.documentElement.msRequestFullscreen();
  }
}

function smolScreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}

var orientation = "landscape";//
   
 var orientations = [  "any", "natural", "landscape", "portrait", "portrait-primary", "portrait-secondary","landscape-primary",   "landscape-secondary"];

function lock(orientation) {
  fullScreen();
  screen.orientation.lock(orientation);
}


/* WITH CSS IT WORKS 
@media only screen and (orientation:portrait){
  body {
    height: 100vw;
    transform: rotate(90deg);
  }
}*/