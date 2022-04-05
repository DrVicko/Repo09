// Only change code below this line
function mathTest (x, y) {
    if (x < 0 || y < 0) {
        return; 
    }
    return Math.round(Math.pow(Math.sqrt(x) + Math.sqrt(y), 2)); 
} 

mathTest(); 

// Only change code above this line

module.exports = mathTest;