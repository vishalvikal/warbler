const mongoose =require('mongoose');
const User   =require('./user')

const messageSchame = new mongoose.Schema(
  {
    text:{
      type:String,
      required:true,
      maxLength:160
    },
    user:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User"
    }
  },
  {
    timestamps:true
  }
)

messageSchame.pre('remove', async function(next){
  try{
  // find a user
  
  let user = await User.findById(this.user)
  // remove the id of the message from their list
 
  user.messages.remove(this._id)

  // save that user
  await user.save();
  // return next
  return next()
  }catch(err){
    return next(err);

  }

})

const Message = mongoose.model("Message", messageSchame)

module.exports = Message