// Loop through all elements with a class of "drum" and addEventListener that detects clicks
for (var i = 0; i !== document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", detectClick);
}

// addEventListener added to the document to detect keypresses
document.addEventListener("keydown", detectKeypress);

// When a button is clicked handleClick and buttonAnimation are passed the button letter
function detectClick() {
  handleClick(this.innerHTML);
  buttonAnimation(this.innerHTML);
}

// When a key is pressed handleClick and buttonAnimation are passed the event.key 
function detectKeypress() {
  handleClick(event.key);
  buttonAnimation(event.key);
}

// Adds a class to whichever button is pressed until the timeout activates in which case button returns to normal
function buttonAnimation(e) {
  document.querySelector("." + e).classList.add("pressed");
  setTimeout(function () {
    document.querySelector("." + e).classList.remove("pressed");
  }, 100);
}

// Specifies which sound to play for each key being listened to
function handleClick(e) {
  switch (e) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    default:
      console.log(e);
  }
}