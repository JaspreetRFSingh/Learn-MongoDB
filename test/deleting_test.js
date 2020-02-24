// const assert = require('assert');
// const Employee = require('../model/employee');


// describe('Deleting a record', function(){
//   var char;
//   // Add a character to the db before each tests
// //   beforeEach(function(done){
// //     char = new Employee({
// //       name: 'Jaspreet'
// //     });
// //     char.save().then(function(){
// //       done();
// //     });
// //   });

//   it('Deletes a record from the database', function(done){
//     Employee.findOneAndRemove({name: 'Jaspreet'}).then(function(){
//         Employee.findOne({name: 'Jaspreet'}).then(function(result){
//         assert(result === null);
//         done();
//       });
//     });
//   });

// });