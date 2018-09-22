var User=require('../models/user');

//Display all users
exports.user_list=function(req,res,next){
	User.find()
	.sort([['first_name','ascending']])
	.exec(function(err,list_users){
		if (err) {return next(err);}
		res.render('user_list',{title:'User List',user_list:list_users});
	});
};

//Display details for a specific user
exports.user_detail=function(req,res){
	res.send('NOT IMPLEMENTED: User Details'+req.params.id);
}
//Display user create form on GET
exports.user_create_get=function(req,res){
	res.send('NOT IMPLEMENTED: User create GET');
}

//Handle user create on POST
exports.user_create_post=function(req,req){
	res.send('NOT IMPLEMENTED: User create POST');
}

// Delete User on GET
exports.user_delete_get=function(req,req){
	res.send('NOT IMPLEMENTED: User delete get');
}

exports.user_delete_post=function(req,req){
	res.send('NOT IMPLEMENTED: User delete post');
}

exports.user_update_get=function(req,req){
	res.send('NOT IMPLEMENTED: User update get');
}

exports.user_update_post=function(req,req){
	res.send('NOT IMPLEMENTED: User update post');
}
