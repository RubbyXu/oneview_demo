
# Project: oneview
A React single page application, display a table using given api endpoint to show how react and redux(with middleware thunk) manage state and props.

Refer to requirements from here:
https://github.com/OneviewCommerce/typescript-react-redux-test

# Design
## Components 
There are mainly three layers in the application.
- API layer

- Redux store Layer
- View layer

## Files Structure
```
- src/
  - api            
    - apis.js 
    - httpClient.js
  - components
    - AutoComplete.js
    - Home.js
    - PostList.js
    - Table.js
    - UserList.js
    - TextBox.js
  - store
    - index.js
    - posts.js
    - users.js
  - index.js

- __test__/
  - Home.test.ts     
  - data.ts        

Other files:
Other files under root directory are docs and necessary config files, which are used to support running the application. 
```
## Pre-defined Input
The two endpoints should be accessable form HTTP server part. 
https://jsonplaceholder.typicode.com/users  
https://jsonplaceholder.typicode.com/posts?userId=1


## Working flow
 

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