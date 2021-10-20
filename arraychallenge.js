function calcTip(billamount){
    if(billamount>=50 && billamount<=300){
        let tip = billamount/100*15
        return tip
    }
    else{
        let ti = billamount/100*20
        return ti
    }
}
console.log(calcTip(1000))
const bills = [125,555,44]
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
console.log(tips)
const total = []
total.push(bills[0]+tips[0])
total.push(bills[1]+tips[1])
total.push(bills[2]+tips[2])
console.log(total)
