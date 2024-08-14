//twoSum function 
function twoSum(nums, target){
    //create a map to store numbers and their indices 
    const numMap = new Map();
    //loop through th array 
    for (let i = 0; i <nums.length; i++){
        //calculate the complement 
        const complement = target-nums[i];
        //check i fthe complementis already in the map
        if(numMap.has(complement)){
            //return the indices of the current number and the copmlement 
            return [numMap.get(complement), i];
        }
        numMap.set(nums[i],i);
    }
    //if no solution is found, return an empty array
    return [];
}
//example to check the function 
const nums = [2,4,6,10,12];
const target = 14;
const result = twoSum(nums,target);
console.log(result);