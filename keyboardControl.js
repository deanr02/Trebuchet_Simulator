/**
 *  if you dont know what this does you're beyond help
 *
 */

var CONTROLS = {
  treb: {fire: false},
  zoomIn: false
};

document.addEventListener('keydown', function(event) {
  switch (event.key) {
    case " ":
      CONTROLS.treb.fire = true;
      break;
      case "e":
      CONTROLS.zoomIn = !CONTROLS.zoomIn;
      break;
    default:
      break;
  }
});


document.addEventListener('keyup', function(event) {
  switch (event.key) {
    case " ":
      CONTROLS.treb.fire = false;
      break;
    default:
      break;
  }
});
