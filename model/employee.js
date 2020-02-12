const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a Schema and a Model

const EmployeeSchema = new Schema({
    name: String,
    employeeId: Number
});

const Employee = mongoose.model('employee', EmployeeSchema);

module.exports = Employee;