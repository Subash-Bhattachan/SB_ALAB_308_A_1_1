
// PART_2: TRAMPOLINES

const nestedArray = [1, [2, [3, 4], 5], 6, [7, 8]];
console.log(nestedArray);

function flattenArray(arr) {
    const result = []; // declaring an empty array

for (let i = 0; i < arr.length; i++) {
    let value = arr[i];

    if (Array.isArray(value)) {
result.push(...flattenArray(value)); // using recusrive function

    }
    else {
        result.push(value) // will just push the value as it is without flattening
    }
} 
    return result;
}

console.log(flattenArray(nestedArray));


////////////////////
// now trampolining the above function




