const server = require('./app');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const uri = process.env.DATABASE_URL.replace('<db_password>', process.env.DATABASE_PASSWORD);

mongoose.connect(uri).then(() => {
    console.log('Connected to the database');
}).catch((err) => {
    console.error('Database connection error:', err);
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});