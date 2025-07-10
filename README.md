# Feature 5 - Authentication

* Student A: Ryan Hartung
* Student B: Alan Malta Rodrigues


## Rubrics

### Student A

* Protected Route: ProtectedRoute component handles all routes that should not be accessed without login
* Using Protected Route: Protected Routes are correctly utilized in your application
* Code Review: Completed code review of Student B's work.
* Submitted on time
* Comments in codebase (more than 5). These can be used to detail future work or explain sections in HTML, CSS, or JS
* No errors (no errors in console / application can be built and run)
* Correctly versioned release 0.3.0 created on Github and updated CHANGELOG.md
* Authentication Module: All protected routes cannot be navigated to without authentication
* Authentication Module: Protected routes redirect to the auth component
* Authentication Module: User cannot route to auth (login/signup) if already logged in
* Authentication Module: Place authentication methods in separate service, and user manually typing in URL to protected route will redirect if unauthenticated


### Student B

* Parse Auth Service: Parse Service with authentication methods
* Auth Module: Login/Register components that utilize authentication methods from service
* Code Review: Completed code review of Student A's work.
* Submitted on time
* Comments in codebase (more than 5). These can be used to detail future work or explain sections in HTML, CSS, or JS
* No errors (no errors in console / application can be built and run)
* Correctly versioned release 0.3.0 created on Github and updated CHANGELOG.md
* Authentication Module: All protected routes cannot be navigated to without authentication
* Authentication Module: User cannot route to auth (login/signup) if already logged in
* Authentication Module: Place authentication methods in separate service, and user manually typing in URL to protected route will redirect if unauthenticated


## Directory Structure

This React application follows a modern component-based architecture with clear separation of concerns.

### Key Architectural Patterns:

- **Component-Based Structure**: React components are organized in feature-based directories
- **Service Layer**: Business logic is separated into dedicated service files
- **Static Assets**: Public directory contains files served directly by the web server
- **Configuration**: Environment-specific settings are centralized in `environments.js`
- **Testing**: Test files are co-located with their corresponding components
- **Styling**: CSS files are organized at both global and component levels

### Development Workflow:

1. **Entry Point**: `src/index.js` bootstraps the React application
2. **Root Component**: `src/App.js` defines the main application structure
3. **Routing**: Components handle different application views and features
4. **Services**: API calls and business logic are centralized in the Services directory
5. **Styling**: Global styles in `src/index.css` and `src/App.css`, component-specific styles as needed



# Feature 4 - Routing & Parse

* Student A: Ryan Hartung
* Student B: Alan Malta Rodrigues

NOTE: the WM Workflow page contains the axios/json requirements for this assignment.

## Rubrics

### Student A

* UML diagram in the format shown in class
* Correctly configured parse initialization
* Separate Parse Model for each class
* Completed code review of Student B's work.
* Submitted on time
* Comments in codebase (more than 5). These can be used to detail future work or explain sections in HTML, CSS, or JS
* No errors (no errors in console)
* Correctly versioned release 0.2.0 created on Github and updated CHANGELOG.md
* All Parse queries outside of controllers / components and inside of Parse Models
* Correctly load asynchronous data to components

### Student B

* Component tree diagram
* Correctly configure webpack
* Correctly initialize routing and route from one module to another.
* Completed code review of Student A's work
* Submitted on time
* Comments in codebase (more than 5). These can be used to detail future work or explain sections in HTML, CSS, or JS
* No errors (no errors in console)
* Correctly versioned release 0.2.0 created on Github and updated CHANGELOG.md
* All Parse queries outside of controllers / components and inside of Parse Models
* Correctly load asynchronous data to components


## Directory Structure

Base Feature 3 directory structure is:
* css
* html
* images
* js

While directories created through `npx create-react-app` are:
* public
* src


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
