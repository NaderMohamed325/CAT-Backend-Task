const mongoose = require('mongoose');

const TodosSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'completed'],
        default: 'pending'
    }
});

module.exports = mongoose.model('Todos', TodosSchema);