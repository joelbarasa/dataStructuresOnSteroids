console.log("...First Element Not Smaller Than Target....");
arr = [2, 3, 5, 7, 11, 13, 17, 19];
target = 8;
let compute = firstNotSmaller(arr, target);
console.log(compute);
function firstNotSmaller(arr, target) {
    // WRITE YOUR BRILLIANT CODE HERE

//     for(let index = 0; index < arr.length; index++){
//         if(arr[index] >= target) {
//             return index;
//         }
//     }
//     return arr.length;
    let left = 0;
    let right = arr.length -1;
    let position =-1;
    while(left <= right){
        let mid = left + Math.floor((right-left)/2);
        if(arr[mid] >= target){
            position = mid;
            right = mid - 1;
        }
        else{
            left = mid +1;
        }          
    }
    return position;
}



