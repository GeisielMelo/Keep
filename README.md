
# Reminders

Reminders is a note-taking application inspired by Google Keep, developed using React and Node.js. It was created with the intention of improving my React skills and gaining knowledge in database management and authentication. With this app, you can create notes, search for specific notes, move notes to the trash, and permanently delete notes. Additionally, there is a sync button at the top, next to the logout button, to reload the current page.

![App Gif](https://github.com/GeisielMelo/reminders/blob/main/src/images/reminders.gif?raw=true)

## Features

- User registration and login
- Authentication with bearer token
- Menu for creating notes
- Notes button to access all user notes
- Search bar to search notes by keywords
- Trash button to view deleted notes
- Permanently delete notes from the trash
- Refresh button to update the current tab and load new notes if necessary
- Logout function to destroy the user's generated token upon logging out.
- Data storage in MongoDB Atlas

## Tech Stack

- React
- Node.js
- Express.js
- MongoDB
- HTML
- CSS

### Setup

Clone the projects to the desired location on your computer.
```bash
    git clone https://github.com/GeisielMelo/reminders.git
```

```bash
# Navigate to the directory.
$ cd reminders

# Install necessary dependencies
$ npm install

# Start the app.
$ npm start

# The terminal will display the local address where the application is being executed. Simply enter the same address in your preferred browser. The address used in creating this project was:

http://localhost:3000/
```
Additionally, you'll also need to clone the backend repository and execute the following commands:

```bash
    git clone https://github.com/GeisielMelo/reminders-api.git
```
```bash 
# Navigate to the directory.
$ cd reminders-api

# Install necessary dependencies
$ npm install

# Start the backend server.
$ npm run dev

# The terminal will display the local address where the application is being executed. Simply enter the same address in your preferred browser. The address used in creating this project was:

http://localhost:5000/
```

### Authors

- [@GeisielMelo](https://github.com/GeisielMelo)


### License

- [MIT](https://choosealicense.com/licenses/mit/)

