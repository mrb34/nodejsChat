const mongoose = require('mongoose');
const Schema=mongoose.Schema;
const UserSchema = new Schema({

firstname:{
  type:String,
  required:true,
  maxlenght:[20,'´{PATH} : {VALUE}´ can not be greater than ´{MAXLENGHT}´ characters'],
  minlenght:[2,'´{PATH} : {VALUE}´ can not be less than ´{MINLENGHT}´ characters']
},
lastname:{
  type:String,
  required:true,
  maxlenght:[20,'´{PATH} : {VALUE}´ can not be greater than ´{MAXLENGHT}´ characters'],
  minlenght:[2,'´{PATH} : {VALUE}´ can not be less than ´{MINLENGHT}´ characters']
},
email:{
  type:String,
  required:true,
  unique:true
},
username:{
  type:String,
  required:true,
  unique:true
},
password:{
  type:String,
  required:true,
  minlenght:[6,'´{PATH} : {VALUE}´ can not be less than ´{MINLENGHT}´ characters']
},
createdAt:{
        type: Date,
        default:Date.now
}
});
module.exports=mongoose.model('user',UserSchema);
