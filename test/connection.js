const mongoose = require('mongoose');

mongoose.Promise = global.Promise;


//connect to database before tests run
before(function(done){
    mongoose.connect('mongodb://localhost:27017/mongoDemo', {useNewUrlParser:true});

mongoose.connection.once('open', function(){
    console.log('Connection has been made!');
    done();
}).on('error', function(error){
    console.log('Connection error:', error);
});
});


