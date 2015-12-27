var express = require('express');
var Movie=require('./../models/movieModel');

var moviesController = require('./../controllers/moviesController')(Movie);

var moviesRouter = express.Router();

moviesRouter.route('')  //movies
    .get(moviesController.get)
    .post(moviesController.add)
    .delete(moviesController.del);

moviesRouter.route('/:id')  //movies/:id
    .get(moviesController.getById)
    .put(moviesController.update)
    .patch(moviesController.patch);

module.exports = moviesRouter;
