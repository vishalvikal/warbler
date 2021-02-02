
const mongoose = require("mongoose")
const User     = require("./user")
const Message  = require("./message")


mongoose.set('debug', true);
mongoose.Promise = Promise;

mongoose.connect(process.env.DATABASE_URI, 
{
  keepAlive: true,
  useUnifiedTopology: true,
  useNewUrlParser:true,
  useFindAndModify:false,
  useCreateIndex:true
})

module.exports.User = User;
module.exports.Message = Message