// Code your solutions in this file

function writeCards(names, event){
    const thankYouArray = []
    for(let i = 0; i < names.length; i++){
        
        thankYouArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return thankYouArray
}

function countDown(num){
    while(num >= 0){
        console.log(num)
        num--
    }
}