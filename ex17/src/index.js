// Only change code below this line

function inverseWhile () {
    var fiveNumbers = ""; 
    var i = 5; 

    while (i < 6 && i >= 0 ) {
        fiveNumbers = fiveNumbers + i;
        fiveNumbers += ",";
        i--;
        if (i === 0) {
            return fiveNumbers; 
        }
    }

    

}


// Only change code above this line


console.log(inverseWhile());

module.exports = inverseWhile;