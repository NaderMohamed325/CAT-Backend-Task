const Todos = require('../models/todosModel');

exports.createTodo = async (req, res) => {
    try {
        await Todos.create(req.body);
        res.redirect('/todos');
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        });
    }
};

exports.getTodos = async (req, res) => {
    try {
        const allTodos = await Todos.find();
        res.status(200).render('notes', {
            todos: allTodos
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        });
    }
};

exports.updateTodo = async (req, res) => {
    try {
        await Todos.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        res.redirect('/todos');
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        });
    }
};

exports.deleteTodo = async (req, res) => {
    try {
        await Todos.findByIdAndDelete(req.params.id);
        res.redirect('/todos');
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        });
    }
};