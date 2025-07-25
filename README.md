This application was created as a final project for the course Modern Web Development, Summer 2025.

This web application provides a system for central production workflow for the Compact Muon Solenoid (CMS) experiment, at CERN. The current monitoring system is outdated, slow and doesn't include some quality of life features.

This project provides the following key features:
* URL searchable: moving away from single static url. The new implementation accepts URL query strings for efficient object look-up.
* Aggregation filters: allowing for easy summarization of workflows, based on key parameters.
* CSV generation: users can download the monitoring information (plain or summary) as comma-separated values file.
* Responsibe layout for different devices and screen sizes.
* Awesome UX: with the adoption of modern styles and library (powered by Bootstrap library!)

**Technology:** Bootstrap, React, Parse (through back4app), HTML, CSS, Node.

To see previous implementations, please click in the link belows:
* [Feature 5](#feature-5---authentication)
* [Feature 4](#feature-4---routing--parse)
* [React Instructions](#react-instructions)

# Feature 6 - Feature Branch

Ryan Hartung:
1. User should be able to reset a password through a "Forgot password" button ✅
2. Developer/User should be able to see the status of "Central Services" components ✅
3. Developer/User should be able to see the status of "Agents" components ✅

Alan Malta Rodrigues:
1. User should be able to parameterize the URL to access specific workflow objects ✅
2. User should be able to have a "Summary" page with different filters to summarize the workload in the system ✅
3. Developer should be able to style the registration form with Bootstrap library and CSS ✅

## Functionality Summary

First of all, it is important to mention that this application is only available for registered and authenticated users. Until an user gets authenticate, he/she only has access to the login and registration pages.

Once authenticate, the user will see the `Home` page for the `CMS Workflow Monitoring` webapp, and a navigation menu with the following pages.

### Summary

The Summary page provides aggregated statistics for workflow data, allowing users to view workload summaries grouped by different fields (`Campaign` is the default aggregation field).

**Features:**
* **Continuous update**: data is fetched and re-rendered every 10 seconds, hence providing a quasi real-time monitoring and aggregation.
* **Aggregation Options**: Group workflows by Campaign, CMSSW version, request type, request status and team name.
* **Dynamic Table Headers**: Table column headers update based on selected aggregation field
* **Statistics Display**: Shows count of workflows and aggregated job statistics (Created, Pending, Running, Success, Failure)
* **Sorting**: table column headers can be sorted by any fields.

**Endpoint:** navigate to the `/summary` endpoint.


### Workflow

The Workflow page supports URL query parameters for filtering workflow data. The user can search for specific workflows through the several input text fields, re-rendering data in the table and automatically updating the URL, for easy sharing functionality.

**Features:**
* **Continuous update**: data is fetched and re-rendered every 10 seconds, hence providing a quasi real-time monitoring and aggregation.
* **Search Options**: User can type in single or multiple filters to be applied on the data shown in the table.
* **URL Searchable**: full support to URL query strings, hence providing efficient data look-up.
* **Sorting**: table column headers can be sorted by any fields.

**Endpoint:** navigate to the `workflow` endpoint.

**Query Parameters Support:**
* `workflow` - Filter by workflow name
* `status` - Filter by workflow status
* `type` - Filter by workflow type
* `campaign` - Filter by campaign name
* `cmssw` - Filter by CMSSW version

**Usage Examples:**
```
# Single filter
/workflow?workflow=test

# Multiple filters
/workflow?status=active&type=manual

# All filters
/workflow?workflow=test&status=active&type=manual&campaign=Run2023&cmssw=12_4_0
```


### Central Services

The Central Services page provides real-time monitoring of the web-services in the Workload Management eco-system, including their statuses and latest update timestamp.

**Features:**
* **Continuous update**: data is fetched and re-rendered every 10 seconds, hence providing a quasi real-time monitoring and aggregation.

**Endpoint:** navigate to the `/services` endpoint.


### Agents

The Agents page provides real-time monitoring of the agents in the Workload Management eco-system, including their statuses and latest update timestamp.

**Features:**
* **Continuous update**: data is fetched and re-rendered every 10 seconds, hence providing a quasi real-time monitoring and aggregation.

**Endpoint:** navigate to the `/agents` endpoint.


### Location

The Location page provides an embedded map with the CERN location.

**Endpoint:** navigate to the `/location` endpoint.




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


# React instructions

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
