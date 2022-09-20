type Types = string | string[] | number | number[]

function print_numbers(param:Types) {
    if (Array.isArray(param)) {
        console.log("Array: " + param);
    } else if (typeof param === 'string') { 
        console.log('string: ' + param);
    } else if (typeof param === 'number') {
        console.log('number: ' + param);
    }
}

print_numbers(972528684411);
