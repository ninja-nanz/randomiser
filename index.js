console.log("cat")

const d = require('./data.json')



const sorted = d.wait.sort(function(a,b) {
    if (Math.random() > 0.5) {
        return -1
    } else {
        return 1
    }
})


console.log(sorted)


