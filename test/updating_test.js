const assert = require('assert');
const Employee = require('../model/employee');

describe('Updating records', function(){
  var char;
  beforeEach(function(done){
    char = new Employee({
      name: 'Jaspreet',
      employeeId : 202000
    });
    char.save().then(function(){
      done();
    });
  });

//   it('Updates the name of a record', function(done){
//       Employee.findOneAndUpdate({name: 'Jaspreet'}, {name: 'Jaspreet Singh', employeeId: 8989809808080}).then(function(){
//           Employee.findOne({_id: char._id}).then(function(result){
//               assert(result.name === 'Jaspreet Singh' && result.employeeId === 8989809808080);
//               done();
//           });
//       });
//   });

  //update operator ***important***
  it('incremets the employeeId by 1', function(done){
    Employee.update({}, {$inc :{employeeId:1}}).then(function(){
        Employee.findOne({name:'Jaspreet'}).then(function(record){
             assert(record.employeeId === 202001);
             done();
        });
    });
});
});