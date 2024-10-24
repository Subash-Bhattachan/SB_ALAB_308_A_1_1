
// PART_2: TRAMPOLINES

const nestedArray = [1, [2, [3, 4], 5], [6, [7, 8]]];
console.log(nestedArray);

function flattenArray(arr) {
    const result = []; // declaring an empty array

for (let i = 0; i < arr.length; i++) {
    let value = arr[i];

    if (!Array.isArray(value)) {// this represents the base case here that if it is not an array, then push the value directly to the array declared in the beginning
        
        result.push(value) // will just push the value as it is without flattening

    }
    else {
        result.push(...flattenArray(value)); // using recusrive function
        
    }
} 
    return result;
}

console.log(flattenArray(nestedArray));


////////////////////
// now trampolining the above function

// first simplfying the above code

const flattenArray2 = (arr, base = []) => {
   
    if(!Array.isArray(arr)) {
        base.push(arr);

    } else {
        for (let value of arr) {
        base = flattenArray2(value, base); // call the function only one time recusrively
    }
}
return base;
}

console.log(flattenArray2(nestedArray));

// now we pass one value of function at a time in a trampoline function below
const trampoline = function(fn) {
    
    while (typeof fn === "function") {
        fn = fn();
    }
    return fn;
}
const flattened = () => flattenArray2(nestedArray)
console.log(trampoline(() => flattened));





// These are what I learnt from Manara's office hour
// // let's write a regular recursion
// const factorial = (number) => {
//     // base case will be 0
//     if (number <= 0) 
//         return 1;
//     return number * factorial(number -1);
// }

// // console.log(factorial(5000))


// const factorial2 = (number, base=1) => {
//     if(number <=0) {
//         return base;

//     } else {
//         return() => factorial2(number - 1, number * base); // call the function only one time
//     }
// }

//console.log(factorial2(5))


// here we pass one value of function at a time
// const trampoline = function(fn) {
//     while (typeof fn === "function") {
//         fn = fn();
//     }
//     return fn;
// }
// console.log(trampoline(() => factorial2(500)));



// while writing the trampoline, first figure out what is the base case while flattening the Array
// the basic three lines of trampline function are the same, use them