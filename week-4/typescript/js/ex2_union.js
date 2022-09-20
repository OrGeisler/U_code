"use strict";
function print_numbers(param) {
    if (Array.isArray(param)) {
        console.log("Array: " + param);
    }
    else if (typeof param === 'string') {
        console.log('string: ' + param);
    }
    else if (typeof param === 'number') {
        console.log('number: ' + param);
    }
}
print_numbers(972528684411);
//# sourceMappingURL=ex2_union.js.map