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

function reverse2 (str){
    return str.split('').reverse().join('')
}

const reverse3 = str => str.split('').reverse().join('')

const reverse4 = str => [...str].reverse().join('')

console.log(reverse4('Hi My Name Is Kashif Zafar'))


