"use strict";


// Problem #1

function numSeq (start,finish,step) {
    var bucket = 0;
    for(var i = start; i <= finish; i+=step){
        bucket += i;
    }
    return bucket;
}

console.log(numSeq(1,4,1));
console.log(numSeq(1,10,1));

// Problem #2

function findEnglish(str){
    var nstr = str.toLowerCase();

    return nstr.includes("english");
}

console.log(findEnglish("lkajsdfjjsdfenglishjsdkfjasdf"));
console.log(findEnglish("lkajsdfjjsdfjsdkfjasdf"));

// Problem #3

function posNeg(arr){
    var counter = 0;
    var negSum = 0;
    var newArr = [];

    arr.forEach(function (number) {
        if(number > 0){
            counter ++;
        }else if (number < 0){
            negSum += number
        }
    })

    newArr.push(counter);
    newArr.push(negSum);

    return newArr;
}

console.log(posNeg([1,2,3,-3,-4,-5]));
console.log(posNeg([1,2,3,3,4,5]));
console.log(posNeg([-1,-2,-3,-3,-4,-5]));