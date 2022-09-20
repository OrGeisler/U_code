const Exercises = require("./ex.js")

test("isEven should return true if number is even, false otherwise",function () {
    const value = new Exercises()
    expect(value.isEven(2)).toBeTruthy()
    expect(value.isEven(3)).toBeFalsy();
    expect(value.isEven("string")).toBeFalsy();
})

test("removeAtLeastOne should remove at least one element from the array",function() {
    const value = new Exercises()
    const arry = [1,2,3,4,5,6]
    num = arry.length
    expect(value.removeAtLeastOne(arry).length).toBeLessThan(num)
    const arry2 =[]
    expect(value.removeAtLeastOne(arry2).length).toBe(0)
})

test("simplify should return a clean string",function() {
    const value = new Exercises()
    expect(value.simplify("!!hello,,,,#...")).not.toContain("!", "#", ".", ",", "'")
    expect(value.simplify("!!hello,,,,#...")).toBe("hello")
})

test("validate booleans method",function() {
    const value = new Exercises()
    expect(value.validate(["string1" , " string2"])).toBe("Error: array is supposed to contain at least one boolean value")
    expect(value.validate([true,true,false,"hello","hi","bye"])).toBe(true)
    expect(value.validate([true,false,false,"hello","hi","bye"])).toBe(false)
})

test("add method",function() {
    const value = new Exercises()
    let mock = jest.spyOn(Array.prototype, 'push')
    value.add()
    expect(mock).toHaveBeenCalled();
})




