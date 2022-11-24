// var button = document.querySelector("button");  //finds 1st button from index.html
// button.addEventListener("click", handleClick);

var num = document.querySelectorAll(".drum").length;
//Adding Event listener to all buttona
for (var i = 0; i < num; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}
/*Event listenener for button press*/
function handleClick() {
  /***/
  var buttonInnerHtml = this.innerHTML;
  makeSound(buttonInnerHtml);
  btnAnimation(buttonInnerHtml);
}



/*Event listener for keyboard press*/
document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  btnAnimation(event.key);
});

function makeSound(key) {

  switch (key) {
    case "w":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
    case "s":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    default:
      alert("Wrong Key");
  }
}

function btnAnimation(currentKey) {
  var activeBtn = document.querySelector("." + currentKey);
  activeBtn.classList.add("pressed");                            //Adding class(pressed) to do the animation
  setTimeout(function() {
    activeBtn.classList.remove("pressed");
  },100);
}
