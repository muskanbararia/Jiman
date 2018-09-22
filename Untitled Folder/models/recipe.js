var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var RecipeSchema = new Schema(
{
title:{type:String, required: true},
author: {type: Schema.Types.ObjectId, ref: 'User',required: true},
genre: {type: Schema.Types.ObjectId, ref:'Genre'},
content:[{
ingred: String,
quantity: Number
}],
steps:[String]
});

//Virtual for recipe's URL
RecipeSchema
.virtual('url')
.get(function() {
return '/catalog/recipe/' + this._id;
});


module.exports = mongoose.model('Recipe',RecipeSchema);
