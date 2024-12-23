# Notes Application

This is a simple notes application built with Node.js, Express, and MongoDB. It allows users to create, read, update, and delete notes.

## Features

- Add new notes with a title and content.
- View a list of all notes.
- Delete notes.
- Responsive and modern UI.

## Technologies Used

- Node.js
- Express
- MongoDB
- EJS (Embedded JavaScript templates)
- CSS

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/NaderMohamed325/notes-app.git
    cd notes-app
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Set up environment variables:
    - Create a `.env` file in the root directory.
    - Add the following environment variables:
        ```env
        DATABASE_URL=<your_mongodb_connection_string>
        DATABASE_PASSWORD=<your_database_password>
        ```

4. Start the application:
    ```sh
    npm start
    ```

5. Open your browser and navigate to `http://localhost:3000`.

## Usage

- To add a new note, fill in the title and content fields and click the "Add Note" button.
- To delete a note, click the "Delete" button next to the note you want to remove.

## Project Structure

- `app.js`: Main application file.
- `server.js`: Server setup and database connection.
- `routes/todosRouter.js`: Routes for handling notes-related requests.
- `controller/todosController.js`: Controller functions for notes operations.
- `models/todosModel.js`: Mongoose schema and model for notes.
- `views/notes.ejs`: EJS template for rendering notes.

## License

This project is licensed under the MIT License.
