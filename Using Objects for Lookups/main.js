// Setup
function phoneticLookup(val) {
    let result = '';

    // Only change code below this line
    var lookup = {
        'alpha': 'Adams',
        'bravo': 'Boston',
        'charlie': 'Chicago',
        'delta': 'Denver',
        'echo': 'Easy',
        'foxtrot': 'Frank'
    }
    return lookup[val];
    return result;
    // return result + lookup[val];
}

// phoneticLookup("charlie");
console.log(phoneticLookup("alpha"));
console.log(phoneticLookup("bravo"));
console.log(phoneticLookup("charlie"));
console.log(phoneticLookup("delta"));
console.log(phoneticLookup("echo"));
console.log(phoneticLookup("foxtrot"));
console.log(phoneticLookup(""));


