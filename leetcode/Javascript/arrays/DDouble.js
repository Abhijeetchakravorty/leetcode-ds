
var checkIfExist = function (arr){
    let newSet = new Set()
    for(let i=0;i<arr.length;i++){
        if(newSet.has(arr[i]/2) || newSet.has(arr[i]*2)){
            return true
        }else{
            newSet.add(arr[i])
        }
    }
    return false;
}
let arrD = [10,2,5,3];
console.log(checkIfExist(arrD));

arrD = [7,1,14,11];
console.log(checkIfExist(arrD));

arrD = [3,1,7,11];
console.log(checkIfExist(arrD));