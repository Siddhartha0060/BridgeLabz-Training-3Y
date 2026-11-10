class Student{
    constructor(name,marks){
        this.name = name;
        this.marks = marks;
    }
    calculateAverage(){
        let total = this.marks.reduce((sum, mark) => sum + mark, 0);
        return total / this.marks.length;
    }
    getGrade(){
        let avg = this.calculateAverage();
        if(avg >= 80)
            return 'A';
        else if(avg >= 60)
            return 'B';
        else if(avg >= 40)
            return 'C';
        else
            return 'F';
    }
}
let s1 = new Student("Abhay", [85,90,78]);
let s2 = new Student("Shiva", [65,70,72]);
let s3 = new Student("Siddharth", [45,50,55]);

console.log(s1.name, s1.calculateAverage(),s1.getGrade());
console.log(s2.name, s2.calculateAverage(),s2.getGrade());
console.log(s3.name, s3.calculateAverage(),s3.getGrade());