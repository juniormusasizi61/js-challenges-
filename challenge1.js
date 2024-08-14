//function creation with 2 parameters
function fizzBizz(str1, str2){
    //calculate the combined length of the strings
    const combinedLength = str1.length +str2.length;
    //execution of the if function to check for the modulus of both 3 and 5 
    if (combinedLength%3==0 && combinedLength%5 == 0){
        return "fizzBizz";
    }
    //check for modulus oof 3
    else if(combinedLength%3 ==0 ){
        return "Fizz";
    }

    //check for modulus 0f 5
    else if(combinedLength%5==0){
        return "Bizz";
    }
    //otherwise return nothing 
    else{
        return "";
    }
}
