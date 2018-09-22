var express = require('express');
var router= express.Router();

//controllers
var recipe_controller = require('../controllers/recipeController');
var user_controller = require('../controllers/userController');
var genre_controller = require('../controllers/genreController');

//RECIPE ROUTES

//home
router.get('/',recipe_controller.index);

// GET request for creating a recipe. NOTE This must come before routes that display recipe (uses id).
router.get('/recipe/create', recipe_controller.recipe_create_get);

// POST request for creating recipe.
router.post('/recipe/create', recipe_controller.recipe_create_post);

// GET request to delete recipe.
router.get('/recipe/:id/delete', recipe_controller.recipe_delete_get);

// POST request to delete recipe.
router.post('/recipe/:id/delete', recipe_controller.recipe_delete_post);

// GET request to update recipe.
router.get('/recipe/:id/update', recipe_controller.recipe_update_get);

// POST request to update recipe.
router.post('/recipe/:id/update', recipe_controller.recipe_update_post);

// GET request for one recipe.
router.get('/recipe/:id', recipe_controller.recipe_detail);

// GET request for list of all recipe items.
router.get('/recipes', recipe_controller.recipe_list);

//User Routes

// GET request for creating user. NOTE This must come before route for id (i.e. display user).
router.get('/user/create', user_controller.user_create_get);

// POST request for creating user.
router.post('/user/create', user_controller.user_create_post);

// GET request to delete user.
router.get('/user/:id/delete', user_controller.user_delete_get);

// POST request to delete user.
router.post('/user/:id/delete', user_controller.user_delete_post);

// GET request to update user.
router.get('/user/:id/update', user_controller.user_update_get);

// POST request to update user.
router.post('/user/:id/update', user_controller.user_update_post);

// GET request for one user.
router.get('/user/:id', user_controller.user_detail);

// GET request for list of all users.
router.get('/users', user_controller.user_list);

/// GENRE ROUTES ///

// GET request for creating a Genre. NOTE This must come before route that displays Genre (uses id).
router.get('/genre/create', genre_controller.genre_create_get);

//POST request for creating Genre.
router.post('/genre/create', genre_controller.genre_create_post);

// GET request to delete Genre.
router.get('/genre/:id/delete', genre_controller.genre_delete_get);

// POST request to delete Genre.
router.post('/genre/:id/delete', genre_controller.genre_delete_post);

// GET request to update Genre.
router.get('/genre/:id/update', genre_controller.genre_update_get);

// POST request to update Genre.
router.post('/genre/:id/update', genre_controller.genre_update_post);

// GET request for one Genre.
router.get('/genre/:id', genre_controller.genre_detail);

// GET request for list of all Genre.
router.get('/genres', genre_controller.genre_list);


module.exports = router;