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
