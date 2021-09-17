# How I worked on this project

My goal was to provide a good solution with the knowledge I have

* I built this app based on Simplicity and requested functionality
* Browse photos by specific starting date
* I worked with tasks on a Kanban board: [Screenshot of tasks](https://screenshot.click/21-09-5ez7z-z2ies.png)

# How to navigate this project

* Responsive CSS using Bootstrap CSS Framework.
* The application fetches data from the Nasa's API .

# Why I built the project this way

* I didn't use a state management library like Redux on purpose. For this app, simple `State` is sufficient. 
* Bootstrap is a great library for styling. As this is a simple application, I thought that Bootstrap would be a great use in here.


# If I had more time I would change this

* Setup a backend using NodeJs and MongoDb or Firebase to allow users to sign in and have the liked images of each user stored in the DB.
* Use pagination for the image cards as loading a huge amount of images at once will decrease the speed of the site.
* Create a full end-to-end tests with Cypress.

# Available Scripts
In this project directory, you can run: 

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

