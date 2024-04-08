////Task 2
class ExtendedDate extends Date {
    constructor(...args) {
        super(...args);
    }

    formatDateText() {
        const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
        return `${this.getDate()} ${months[this.getMonth()]}`;
    }

    isFuture() {
        return this.getTime() >= Date.now();
    }

    isLeapYear() {
        const year = this.getFullYear();
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    getNextDate() {
        const nextDay = new Date(this);
        nextDay.setDate(nextDay.getDate() + 1);
        return nextDay;
    }
}
const currentDate = new ExtendedDate();
console.log("Текущая дата :", currentDate.formatDateText());
console.log("Является ли текущая дата будущей или текущей:", currentDate.isFuture());
console.log("Является ли текущий год високосным:", currentDate.isLeapYear());
console.log("Следующая дата:", currentDate.getNextDate());


/////Task 3
class Employee {
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
}

class EmployeeTable {
    constructor(employees) {
        this.employees = employees;
    }
    getHtml() {
    const rows = this.employees.map(emp => {
        return `<tr><td>${emp.name}</td><td>${emp.position}</td><td>${emp.salary}</td></tr>`;
    });

    const html_code = `
        <table border='2'>
            <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Salary</th>
            </tr>
            ${rows.join('\n')}
        </table>`;
    return html_code;
}
}

let bankEmployees = [
    new Employee("Murtuz Murtuzov", "Manager", 50000),
    new Employee("Jon Smith", "Assistant Manager", 40000),
    new Employee("Volodya Jameson", "IT", 30000),
    new Employee("Ben Parker", "Cleaner", 20000)
];

let employeeTable = new EmployeeTable(bankEmployees);
console.log(employeeTable.getHtml());



////Task 4
class StyledEmpTable extends EmployeeTable {
    constructor(employees) {
        super(employees);
    }

    getStyles() {
        return `
            <style>
                table {
                    width: 100%;
                    border-collapse: collapse;
                }
                th, td {
                    padding: 8px;
                    border: 1px solid #dddddd;
                    text-align: left;
                }
                th {
                    background-color: #f2f2f2;
                }
            </style>
        `;
    }

    getHtml() {
        const tableHtml = super.getHtml();
        const styles = this.getStyles();
        return `${styles}\n${tableHtml}`;
    }
}

let bankEmployee = [
    new Employee("Murtuz Murtuzov", "Manager", 50000),
    new Employee("Jon Smith", "Assistant Manager", 40000),
    new Employee("Volodya Jameson", "IT", 30000),
    new Employee("Ben Parker", "Cleaner", 20000)
];


let styledEmpTable = new StyledEmpTable(bankEmployee);
console.log(styledEmpTable.getHtml());



