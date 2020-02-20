const mocha = require('mocha');
const assert = require('assert');

//`npm run test` command by default looks into the test directory of the root and tests all the describe() methods.

//describe tests
describe('Some demo tests', ()=>{
    //create different tests
    
    //it block describes one test
    it('add two numbers together', ()=>{
        assert(2+3 === 5);
    });

});