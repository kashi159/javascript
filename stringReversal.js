// Given a String task is to reverse all the order of words.

// Return the string with the words order changed.
var reverse = function(s) {
    let string=s.split(" ");
    let reversed=[];
    
    for(var i=string.length-1; i>=0; i--){
        reversed.push(string[i]);
    }
    return reversed.join(" ");
};


