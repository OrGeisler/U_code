class Student {
    name:string
    age:number
    grades:number[]

    constructor(name:string,age:number,grades:number[]){
        this.name = name
        this.age = age
        this.grades = grades
    }

    addGrade(grade:number):void{
        this.grades.push(grade)
    }

    getGradeAvg():number{
        let sum = 0
        let len = this.grades.length
        this.grades.forEach(value => sum += value)
        return sum / len
    }
}

let student1 = new Student("yosi",13,[1,2,3])
let student2 = new Student("a",14,[4,5,6])
let student3 = new Student("b",15,[7,8,9])

let students: Student[] = [student1,student2,student3]

students.forEach(value => console.log(`${value.name} and ${value.getGradeAvg()}`))