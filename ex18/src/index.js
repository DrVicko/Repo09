// Only change code below this line
function myForLoop1 () {

    var evenNumbers = "";

    for (var i = 0; i <= 8; i++) {
        if (i % 2 == 0) {
            if (i !== 8) {
                evenNumbers = evenNumbers + i + ", ";
            } else {
                evenNumbers = evenNumbers + i;
            }
        }  
    }
    return evenNumbers; 
}

myForLoop1(); 

function myForLoop2 () {

    var evenInverseNumbers = ""; 

    for (i = 8; i >= 0; i--) {
        if (i % 2 == 0) {
            if (i !== 0) {
                evenInverseNumbers = evenInverseNumbers + i + ", ";
            } else {
                evenInverseNumbers = evenInverseNumbers + i; 
            }
        }
    }
    return evenInverseNumbers; 
}

myForLoop2(); 8




// Only change code above this line


module.exports = {
    myForLoop1,
    myForLoop2
};