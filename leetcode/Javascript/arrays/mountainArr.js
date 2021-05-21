var checkMountain = function(arr) {
    let N = arr.length;
    let flag = false;
    let i = 0
    while((i+1 < N) && (arr[i] < arr[i+1])){
        i+=1;
    }

    if(i == 0 || i == N-1) {
        return flag;
    }


    // # walk down
    while((i+1 < N) && (arr[i] > arr[i+1])) {
        i += 1;
    }

    if(i == N-1) {
        return true;
    } else {
        return flag;
    }
}

let arr = [2, 1];
console.log(checkMountain(arr));

arr = [3,5,5, 5];
console.log(checkMountain(arr));

arr = [0,3,2,1];
console.log(checkMountain(arr));

arr = [0,3,4,5,4,3,2,1,0];
console.log(checkMountain(arr));
