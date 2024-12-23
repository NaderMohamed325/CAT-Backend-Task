const todosRouter = require('express').Router();
const todosController = require('../controller/todosController');

todosRouter.route('/')
    .get(todosController.getTodos)
    .post(todosController.createTodo);

todosRouter.route('/:id')
    .put(todosController.updateTodo)
    .delete(todosController.deleteTodo);

module.exports = todosRouter;