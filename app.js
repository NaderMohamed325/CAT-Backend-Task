const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require('morgan')('dev'));
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

const todosRouter = require('./routes/todosRouter');
app.use('/todos', todosRouter);
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.all('*', (req, res, next) => {
    const err = new Error(`Can't find ${req.originalUrl} on the server`);
    err.statusCode = 404;
    err.status = 'error';
    next(err);
});

app.use((err, req, res, next) => {
    err.status ||= 'error';
    err.statusCode ||= 500;
    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
    });
});

module.exports = app;