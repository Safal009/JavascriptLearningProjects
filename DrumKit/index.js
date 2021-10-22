
let numberOfDrumButtons = document.querySelectorAll(".drum").length;
let sounds = {
    w : 'sounds/crash.mp3',
    a : '',
    s : 'sounds/snare.mp3',
    d : 'sounds/tom-1.mp3',
    j : 'sounds/tom-2.mp3',
    k : 'sounds/tom-3.mp3',
    l : 'sounds/tom-4.mp3'
}
// console.log(sounds.w)

for( let i=0;i<numberOfDrumButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener('click', function(){

        let btnInnerHTML = this.innerHTML
        
        switch (btnInnerHTML) {
            case "w":
                var audio1 = new Audio('sounds/crash.mp3');
                audio1.play();                
                break;
            case "a":
                var audio2 = new Audio('sounds/kick-bass.mp3');
                audio2.play();
                break;
            case "s":
                var audio3 = new Audio('sounds/snare.mp3');
                audio3.play();
                break;
            case "d":
                var audio4 = new Audio('sounds/tom-1.mp3');
                audio4.play();
                break;
            case "j":
                var audio5 = new Audio('sounds/tom-2.mp3');
                audio5.play();
                break;
            case "k":
                var audio6 = new Audio('sounds/tom-3.mp3');
                audio6.play();
                break;
            case "l":
                var audio7 = new Audio('sounds/tom-4.mp3');
                audio7.play();
                break;       
            default:
                break;
        }

    })
}