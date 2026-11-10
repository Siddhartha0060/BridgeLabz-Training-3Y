class Employee{
    constructor(name, department){
        this.name = name;
        this.department = department;
    }
    work(){
        console.log(this.name + " Is doing employee work");
    }
}
class Manager extends Employee{
    work(){
        console.log(this.name + " Is managing the team");
    }
}
let e1 = new Employee("Siddharth", "IT");
let e2 = new Manager("Shiva", "HR");
e1.work();
e2.work();
