const employees = [
    {id: 1, name: 'John Doe', age: 30, department:'IT', salary:50000 },
    {id: 2, name: 'Alice Smit', age: 28, department:'HR', salary:45000 },
    {id: 3, name: 'Bob Johnson', age: 35, department:'Finance', salary:55000 },
    {id: 4, name: 'Joe Biden', age: 81, department:'White House', salary:60000 },
    {id: 5, name: 'Donald Trump', age: 76, department:'Mar a Lago', salary:50000 },
];

const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
document.getElementById('employeesDetails').innerHTML = totalEmployees;

function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
  }

  function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
     const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
     document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

function findEmployeeById() {
    const employeeId = parseInt(document.getElementById('employeeId').value);
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
        document.getElementById('employeesDetails').innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name} - Age: ${foundEmployee.age} - Department: ${foundEmployee.department} - Salary: $${foundEmployee.salary}</p>`;
    } else {
        document.getElementById('employeesDetails').innerHTML = 'No employee has been found with this ID';
    }
}
//codes work properly
