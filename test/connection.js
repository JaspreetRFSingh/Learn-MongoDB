const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mongoDemo');
mongoose.connection.once('open', function(){
    console.log('Connection has been made!');
}).on('error', function(error){
    console.log('Connection error:', error);
});
