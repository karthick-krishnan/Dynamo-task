// 1 .Given an array var arr = [1,2,3,4]. Multiply the array elements * 2 in one loop. 
//for example:  the output for this array should return [2,4,6,8]. 

var arr = [1,2,3,4]
var newArr = [];

var arrNew = [2,5,9,8]



function num(arr){

    for(let i=0; i< arr.length; i++){
        //console.log(arr[i] * 2);
    //newArr.push(arr[i]*2);
    arr[i]=arr[i]*2;
    
    }

    return arr;
}
let newValue = num(arrNew);

console.log(newValue);




