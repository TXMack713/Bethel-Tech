class Employee {
    constructor(name, salary, hireDate) {
        this.name = name;
        this.salary = salary;
        this.hireDate = hireDate;
    }
    getName() {
        console.log(this.name.toUpperCase());
    }
    getSalary() {
        console.log(this.salary);
    }
    getHireDate() {
        console.log(this.hireDate);
    }
}

class Manager extends Employee {
    constructor(descriptionOfJob, name, salary, hireDate) {
        super(name, salary, hireDate);
        this.descriptionOfJob = descriptionOfJob;
    }
    jobDescription() {
        console.log(this.name + " was hired on " + this.hireDate + " and makes " + 
        this.salary + " per year and works as a " + this.descriptionOfJob + ".");
    }
}

class Designer extends Employee {
    constructor(experience, name, salary, hireDate) {
        super(name, salary, hireDate);
        this.experience = experience;
    } 
    yearsExperience() {
        console.log(this.name + " was hired on " + this.hireDate + " and makes " + 
        this.salary + " per year and brings " + this.experience + " years of experience to the team.");
    }
}

class SalesAssociate extends Employee {
    constructor(degrees, name, salary, hireDate) {
        super(name, salary, hireDate);
        this.degrees = degrees;
    }
    degreeCompleted() {
        console.log(this.name + " was hired on " + this.hireDate + " and makes " +
        this.salary + " per year and finished school with a " + this.degrees + " degree.");
    }
}

let manager1 = new Manager("Tech Lead", "Maya Naomi Elizabeth", 180000, "07/31/2014");
let designer1 = new Designer("8", "Josie Esme", 115000, "07/07/2018");
let salesAssociate1 = new SalesAssociate("Bachelor's", "Ava Joy", 160000, "10/11/2016");

manager1.jobDescription();
designer1.yearsExperience();
salesAssociate1.degreeCompleted();