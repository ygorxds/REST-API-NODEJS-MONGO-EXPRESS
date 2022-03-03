const moongoose = require('mongoose');

try{
  
  moongoose.connect('mongodb://ygor:senha123@127.0.0.1', { useNewUrlParser: true, useUnifiedTopology: true });
  moongoose.Promise = global.Promise;
}catch(err) { 
  console.log (err);
}
module.exports = moongoose;
