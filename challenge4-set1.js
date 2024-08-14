function firstPalindrome(words){
   //loop through the function 
    for(let word of words){
        //check for the palindrome 
        if (word === word.split('').reverse().join('')){
        return word;//return it 
        }
    }
return "";//otherwise return an empty string 
}

    const words = ['hello', 'reacecar', 'world', 'level'];

console.log(firstPalindrome(words));// call the function 