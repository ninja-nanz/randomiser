console.log("cat")

const d = require('./data.json')



const sorted = d.wait.sort(function(a,b) {
     
    // make random number 
    var randomNumber = Math.random()

    // if random number is bigger than .5 return -1 
    if (randomNumber > 0.5) {
        return -1
    } else {
        return 1
    }

})


console.log(sorted)


