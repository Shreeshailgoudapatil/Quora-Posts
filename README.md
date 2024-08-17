# Quora Posts CRUD Application

This is a simple Node.js application that allows users to create, read, update, and delete posts. The application is deployed on [Render](https://render.com/).

## Features

- **Create Post**: Users can create new posts by providing a username and the content of the post.
- **Read Posts**: View a list of all the posts that have been created.
- **Update Post**: Edit the content of an existing post.
- **Delete Post**: Remove a post from the list.

## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: HTML, CSS, Javascript
- **Database**: MySQL
- **Deployment**: Render

## Installation and Setup

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/your-repo-name.git
    cd your-repo-name
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Environment Variables**:
   Create a `.env` file in the root of the project and add your environment variables (e.g., database connection string, port number).
   ```bash
   PORT=8080
   DB_HOST=your-database-host
   DB_USER=your-database-username
   DB_PASSWORD=your-database-password
   DB_NAME=your-database-name

  
4. **Usage**

### Creating a Post

- Navigate to `http://localhost:8080/` or the equivalent deployed URL.
- Click on "Create a new Post".
- Fill in the form and submit.

### Reading Posts

- All posts are displayed on the main page.
- Click on "See the Post" to view a single post.

### Updating a Post

- Click on the "Edit" link next to the post you want to edit.
- Make your changes and submit the form.

### Deleting a Post

- Click on the "Delete" button next to the post you want to remove.

## Images
Here is a screenshot of the project:

![Screenshot](images/Screenshot(139).png)


