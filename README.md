# Feature 6 - Feature Branch

Ryan Hartung:
1. User should be able to reset a password through a "Forgot password" button
2. Developer/User should be able to see the status of "Central Services" components
3. Developer/User should be able to see the status of "Agents" components

Alan Malta Rodrigues:
1. User should be able to parameterize the URL to access specific workflow objects ✅
2. User should be able to have a "Summary" page with different filters to summarize the workload in the system ✅
3. Developer should be able to style the registration form with Bootstrap library and CSS ✅

Technology: Bootstrap, React, Parse, HTML, CSS, Node.

## Summary Component

The Summary page provides aggregated statistics for workflow data, allowing users to view workload summaries grouped by different fields.

### Features
- **Aggregation Options**: Group workflows by campaign, CMSSW version, request type, request status, team name.
- **Dynamic Table Headers**: Table column headers update based on selected aggregation field
- **Statistics Display**: Shows count of workflows and aggregated job statistics (Created, Pending, Running, Success, Failure)
- **Sorting**: Click column headers to sort data by any field
- **Responsive Design**: Works on all screen sizes with modern card-based layout

### Usage
1. Navigate to `/summary` in the application
2. Select an aggregation option from the buttons (e.g., "Campaign", "CMSSW", "Type")
3. View the aggregated statistics in the table below
4. Use the sortable column headers to organize data as needed

### Aggregation Fields
- **Campaign**: Groups by campaign names
- **CMSSW**: Groups by CMSSW versions
- **Type**: Groups by workflow types (ReReco, StepChain, TaskChain, etc.)
- **Status**: Groups by workflow status (completed, announced, etc.)
- **Team Name**: Groups by team names

## Workflow Query Parameters

The workflow page supports URL query parameters for filtering workflow data:

### Endpoint
```
http://localhost:3000/workflow
```

### Supported Query Parameters
- `workflow` - Filter by workflow name
- `status` - Filter by workflow status
- `type` - Filter by workflow type
- `campaign` - Filter by campaign name
- `cmssw` - Filter by CMSSW version

### Usage Examples
```
# Single filter
/workflow?workflow=test

# Multiple filters
/workflow?status=active&type=manual

# All filters
/workflow?workflow=test&status=active&type=manual&campaign=Run2023&cmssw=12_4_0
```

### Features
- Case-insensitive filtering
- Real-time table updates
- Visual filter indicators
- Bookmarkable filtered views

## Agents Component

The Agents page provides real-time monitoring of agent components with automatic data refresh.

### Endpoint
```
http://localhost:3000/agents
```

### Usage
1. Navigate to `/agents` in the application
2. View real-time agent status in the table
3. Monitor automatic refresh every 10 seconds
4. Check "Last refresh" timestamp for update status

## Instructions

### Starting webpack
```
npm start
```



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
