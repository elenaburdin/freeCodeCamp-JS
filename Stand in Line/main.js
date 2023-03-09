function nextInLine(arr, item) {
    // Only change code below this line
    item = arr.push(item);
    item = arr.shift(item);
    return item;
    // Only change code above this line
}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

console.log(nextInLine([], 1)); // 1
console.log(nextInLine([2], 1)); // 2
console.log(nextInLine([5, 6, 7, 8, 9], 1)); // 5