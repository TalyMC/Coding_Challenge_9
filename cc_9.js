//Task 1 Creating an Employee Class
class Employee {
    constructor(name, id, department, salary) {
       
        this.name = name;
        this.id = id;
        this.department = department;
        this.salary = salary;
    };
    getDetails() {
        return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}`
    };
    calculateAnnualSalary() {
        return this.salary * 12
    }
};

const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);
console.log(emp1.getDetails()); 
console.log(emp1.calculateAnnualSalary());

//Task 2 Creating a Manager Class
class Manager extends Employee {
    constructor(name, id, department, salary, teamSize) {
        super(name, id, department, salary);
        this.teamSize = teamSize; 
    }
    getDetails() {
        return `Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}, Team Size: ${this.teamSize}`;
    };
    calculateBonus() {
        return this.salary * 12 * 0.10;
    };
    
    //Task 4 Implementing a Payroll System
    calculateAnnualSalary() {
        return this.salary * 12 + this.calculateBonus();
    };
};

const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);
console.log(mgr1.getDetails());
console.log(mgr1.calculateBonus());

//Task 3 Creating a Company Class
class Company {
    constructor(name) {
        this.name = name;
        this.employees = []; 
    }; // 
    addEmployee(employee) {
        this.employees.push(employee); 
    }
    listEmployees() {
        this.employees.forEach(employee => console.log(employee.getDetails()));
    }

    //Task 4 Implementing a Payroll System
    calculateTotalPayroll () {
        return this.employees.reduce((total, employee) => {
            return total + employee.calculateAnnualSalary(); 
        }, 0);
    }

    //Task 5 Implementing Promotions
    promoteToManager(employee, teamSize) {
        const index = this.employees.indexOf(employee);
       if (index !== -1)
        this.employees[index] = new Manager(employee.name, employee.id, employee.department, employee.salary, teamSize);
    };
};

const company = new Company("TechCorp");
company.addEmployee(emp1);
company.addEmployee(mgr1);
company.listEmployees();

//Task 4 Implementing a Payroll System
console.log(company.calculateTotalPayroll());

//Task 5 Implementing Promotions
company.promoteToManager(emp1, 3);
company.listEmployees();