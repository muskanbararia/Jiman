var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema(
  {
    first_name: {type: String, required: true, max: 100},
    last_name: {type: String, required: true, max: 100},
    date_of_birth: {type: Date},
    email: {type: String, required: true, max: 30},
    password: {type: String, required: true, max: 10}
  }
);

//Virtual for full name
UserSchema
.virtual('name')
.get(function() {
return this.first_name +' '+this.last_name
});

//Virtual for age
UserSchema
.virtual('age')
.get(function() {
var d=new Date().getFullYear();
return (d-this.date_of_birth.getFullYear()).toString();
});

UserSchema
.virtual('url')
.get(function(){
return '/catalog/user/'+ this._id;
});
module.exports=mongoose.model('User',UserSchema);


