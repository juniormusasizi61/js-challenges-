
let birthyear = prompt('enter your birth year:' );//prompt the user to input year of birth
const currentYear = new Date().getFullYear();//select the current year from the system 
//agegroup function 
function ageGroup(birthyear, currentYear) {
    const age =currentYear-birthyear;//calculate age 

    if(age<18){
        console.log('you are minor');//check if age is below 18
    }
    else if(age>36){//check if the age is above 36 for the elders 
        console.log('you are an elder');
    }
    else{
        console.log('you are a youth')//check if the age is in between for the youth 
    }
}


ageGroup(1997)//call the function to execute given the birthyear 