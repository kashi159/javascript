'use strict';

process.stdin.setEncoding('utf-8');

function print_series(n){
     /* Print the following series 
            1 8 27 64 125 to n (including) . Note print all the numbers in a seperate line*/
    for(var x=1 ; x*x*x<=n ;x=x+1)
    {
        console.log(x*x*x);
        
    }
    
}

//Dont change anything below. If changed click on reset.
async function readInput() {
        let inputString = '';
        process.stdin.on('data', inputStdin => {
            inputString += inputStdin;
            const inputArr = inputString.split(/(?:\r\n|\r|\n)/g)
            // console.log(inputArr);
            print_series(parseInt(inputArr[0]))
            process.exit();

        })

}
readInput();