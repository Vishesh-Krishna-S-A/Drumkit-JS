//Detecting Button Press
let allButtons = document.querySelectorAll(".drum");
for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener("click", function () {
        let buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

//Detecting keyboard Press
document.addEventListener("keydown", function (e) {
    makeSound(e.key);
    buttonAnimation(e.key);
});

//Play sound
function makeSound (key) {
    switch (key) {
        case "w":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            let kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;
        default:
            console.log(buttonInnerHTML);
            break;
    }
}

//Button Animation
function buttonAnimation (currKey) {
    var activeButton = document.querySelector("." + currKey);
    activeButton.classList.add("pressed");
    setTimeout(function () {activeButton.classList.remove("pressed")}, 100) //setTimeout(function, milliseconds, param1, param2, ....)
}
//Minified Code
// let allButtons=document.querySelectorAll(".drum");for(let i=0;i<allButtons.length;i++){allButtons[i].addEventListener("click",function(){let buttonInnerHTML=this.innerHTML;makeSound(buttonInnerHTML);buttonAnimation(buttonInnerHTML)})}
// document.addEventListener("keydown",function(e){makeSound(e.key);buttonAnimation(e.key)});function makeSound(key){switch(key){case "w":let tom1=new Audio("sounds/tom-1.mp3");tom1.play();break;case "a":let tom2=new Audio("sounds/tom-2.mp3");tom2.play();break;case "s":let tom3=new Audio("sounds/tom-3.mp3");tom3.play();break;case "d":let tom4=new Audio("sounds/tom-4.mp3");tom4.play();break;case "j":let snare=new Audio("sounds/snare.mp3");snare.play();break;case "k":let crash=new Audio("sounds/crash.mp3");crash.play();break;case "l":let kickBass=new Audio("sounds/kick-bass.mp3");kickBass.play();break;default:console.log(buttonInnerHTML);break}}
// function buttonAnimation(currKey){var activeButton=document.querySelector("."+currKey);activeButton.classList.add("pressed");setTimeout(function(){activeButton.classList.remove("pressed")},100)}