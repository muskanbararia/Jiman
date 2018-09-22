var Recipe=require('../models/recipe');
var User=require('../models/user');
var Genre=require('../models/genre');

var async = require('async')
exports.index = function(req, res) {
    async.parallel({
    	recipe_count:function(callback){
    		Recipe.countDocuments({},callback);
    	},
    	user_count:function(callback){
    		User.countDocuments({},callback);
    	},
    	genre_count:function(callback){
    		Genre.countDocuments({},callback);
    	},
    }, function(err, results){
    	res.render('index',{title:'Recipe Book Home',error:err,data:results});
   });
};

exports.recipe_list = function(req, res, next) {
    Recipe.find({},'title user').populate('user')
    .exec(function(err,list_recipes){
    	if (err) {return next(err);}
    	res.render('recipe_list',{title: 'Recipe List',recipe_list:list_recipes});
    });
};

// Display detail page for a specific recipe.
exports.recipe_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: recipe detail: ' + req.params.id);
};

// Display recipe create form on GET.
exports.recipe_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: recipe create GET');
};

// Handle recipe create on POST.
exports.recipe_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: recipe create POST');
};

// Display recipe delete form on GET.
exports.recipe_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: recipe delete GET');
};

// Handle recipe delete on POST.
exports.recipe_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: recipe delete POST');
};

// Display recipe update form on GET.
exports.recipe_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: recipe update GET');
};

// Handle recipe update on POST.
exports.recipe_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: recipe update POST');
};