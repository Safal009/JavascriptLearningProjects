//Coding Challenge Javascript Fundamentals 2
const calcAverage = (score1, score2, score3) =>{
    const avg = (score1 + score2 + score3)/3;
    return avg;
}
const finalDolphins = calcAverage(85,54,41); //Test Data 2
const finalKoalas = calcAverage(23,34,27); //Test Data 2

function checkWinner(finalscore1, finalscore2){
    if(finalscore1 >=(finalscore2*2)){
        return (`Dolphins win (${finalscore1}, ${finalscore2} )`)
    }else if(finalscore2 >=(finalscore1*2)){
        return (`Koalas win (${finalscore2}, ${finalscore1} )`);
    }else{
        return ("No team wins")
    }
}
const result = checkWinner(finalDolphins, finalKoalas);
console.log(result)
