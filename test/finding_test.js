// const mocha = require('mocha');
// const assert = require('assert');
// const Employee = require('../model/employee');

// describe('Saving tests', ()=>{
//     var char;
//     beforeEach(function(done){
//         char = new Employee({
//           name: 'Jaspreet'
//         });
//         char.save().then(function(){
//           done();
//         })
//       });
    
//     it('Finds a record from the database', function(done){
//         Employee.findOne({name: 'Jaspreet'}).then(function(result){
//           assert(result.name === 'Jaspreet');
//           done();
//         });
//       });
    
//       it('Finds a record by unique id', function(done){
//         Employee.findOne({_id: char._id}).then(function(result){
//           assert(result._id.toString() === char._id.toString());
//           console.log(char._id);
//           done();
//         });
//       });
// });