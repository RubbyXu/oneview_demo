
# Project: oneview
A React single page application, display a table using given api endpoint to show how react and redux(with middleware thunk) manage state and props.

Refer to requirements from here:
https://github.com/OneviewCommerce/typescript-react-redux-test

# Design
## Principle
- Open/Close (Be able to add additional functions without changing existing code)
- Try to make common components re-useable and generic.  
## Components 
There are mainly three layers in the application.
- API layer    
Be responsible for loading users list and posts list for specific user
- Redux store Layer
Dispatch async or sync action, update redux store
- View layer
Data driven components.  Render related elements according to the update of state and props. 

## Files Structure
```
- src/
  - api                   // API 
    - apis.js             // Fetch users list and posts list api
    - httpClient.js       // Rest api library
  - components            // Components
    - Home.js             // Parent component, it will fetch users list and update redux store when mounted, it has two children components: UserList and PostList
    - UserList.js         // Render users list and search box, it has two children components: Table and AutoComplete
    - PostList.js         // Render post list when triggered, it has two children compoenents: Table and TextBox
    - Table.js            // Generic table component library, whose input is data and conlumns 
    - AutoComplete.js     // Generic search component
    - TextBox.js          // Generic text display component 
  - store                 // Redux store and reducers
    - index.js            // Index of redux store, it combines all reducers and exports them to outside
    - posts.js            // Posts reducers and async dispatch action
    - users.js            // Users reducers and async dispatch actions
  - public                // Static assets folder
    - index.html          // index.html
    - ...                 // Assets files, including images and other static files
  - index.js              // Route path to different components

- __test__/               // Test cases folder
  - Home.test.ts          // Unit test for Home component
  - data.ts               // Test data 

Other files:
Other files under root directory are docs and necessary config files, which are used to support running the application. 
```
## Pre-defined Input
The two endpoints should be accessable form HTTP server part. 
https://jsonplaceholder.typicode.com/users  
https://jsonplaceholder.typicode.com/posts?userId=1


## Env setup and start running
- Node version: v18, create-react-app version: 5.0.1
- Run `npm install` to install dependencies.
- Create environment file `.env.development` with below config:
```
REACT_APP_USER_ENDPOINT='https://jsonplaceholder.typicode.com'
NODE_ENV='development'
```
- Run `npm run start` to start webpack dev server.
- Open http://localhost:3000 in local browser.

## Test 
- Run `npm run test` for unit testing.