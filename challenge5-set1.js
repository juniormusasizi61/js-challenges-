//function to take in the digits variable as the parameter
function addDigits(num){
    while(num>=10){
        num = num.toString().split('').reduce((sum, digit)=> sum+parseInt(digit), 0);//convert num to string, add int value of 'digit' to 'sum', and coverts the string digit back into integer
    }
    return num;//return the final number 
}

//example
console.log(addDigits(39));
console.log(addDigits(3456));