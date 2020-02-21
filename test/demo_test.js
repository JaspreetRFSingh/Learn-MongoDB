const mocha = require('mocha');
const assert = require('assert');
const Employee = require('../model/employee');
//`npm run test` command by default looks into the test directory of the root and tests all the describe() methods.

//describe tests

describe('Saving records', ()=>{
    it('Insert operation in MongoDB', (done)=>{
        var emp = new Employee({
            name: 'Jaspreet',
            employeeId: 122345
        });

        /*asynchronous request*/emp.save().then(function(){
            assert(emp.isNew === false);
            done();
        });
        


    });
});

