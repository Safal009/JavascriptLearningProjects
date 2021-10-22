let randomNumber1 = Math.floor(Math.random()*6)+1;
let randomNumber2 = Math.floor(Math.random()*6)+1;
console.log(randomNumber1);
document.getElementById('img1').src = `./images/dice${randomNumber1}.png`
document.getElementById('img2').src = `./images/dice${randomNumber2}.png`
if(randomNumber1>randomNumber2){
    document.getElementById('message').textContent = " 🚩 Player 1 Wins "
}else if(randomNumber1===randomNumber2){
    document.getElementById('message').textContent = "Draw"
}if(randomNumber2>randomNumber1){
    document.getElementById('message').textContent = "Player 2 Wins 🚩"
}

function refresh(){
    location.reload();
}
