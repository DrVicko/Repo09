// Only change code below this line
function comparisonToEqual (a) {
    if (a <= 4){
        return "Less than 5";
    }

    if (a <= 9) {
        return "Less than 10";
    }

    if (a <= 20) {
        return "10 or over"; 
    }

    if (a > 20) {
        return "More than 20"; 
    }
}

comparisonToEqual();



// Only change code above this line

module.exports = comparisonToEqual;