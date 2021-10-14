//Pseudocode
//Initialize the count as 0
//Listen for clicks on the increment button
//Increment the count variable when the butoon is clicked
//Change the count-el in the html
let countEl = document.getElementById("count-el")
let count = 0;
function increment(){
    count += 1;
    countEl.innerText = count;
}
let saveEl = document.getElementById("save-el");
function save(){
    let temp = count + " - ";
    saveEl.textContent += temp;
    count = 0;
    countEl.textContent = 0;

}
