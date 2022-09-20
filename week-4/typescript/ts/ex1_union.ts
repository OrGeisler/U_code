function concat(param1:string | string[], param2: boolean|number) {
    let string = ""
    if (Array.isArray(param1)) {
        param1.forEach(value => string += value)
    }
    else{
        string = param1
    }

    if (param2 === 1 || param2 === true) {
        console.log(string)
    }
    
}

concat(["Tomer", "Sagi"], 1);
