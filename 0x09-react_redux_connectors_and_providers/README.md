## Redux connectors and providers
## Resources

- [Redux CreateStore](https://react-redux.js.org/api/connect)
- [Redux Connect](https://react-redux.js.org/api/connect)
- [Redux Provider](https://react-redux.js.org/api/provider)
- [Redux Middleware](https://redux.js.org/tutorials/fundamentals/part-4-store#middleware)
- [Redux Thunk](https://github.com/reduxjs/redux-thunk)
- [Redux devtools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)
- [Redux Reselect](https://github.com/reduxjs/reselect)

## Learning Objectives

- Redux connectors and how to use them
- The different functions you can pass to a connector (mapStateToProps, mapDispatchToPros)
- How to map an action creator to a component using a connector
- How to map an async action creator to a component with Redux Thunk
- What Redux Providers are and how to set up your app’s store
- How you can improve a connector’s performance using Reselect
- How to use Redux’s dev tools to debug the state of your application

## TASKS
### 0. Write maptstateto props
Reuse the latest dashboard project you worked on in the React course 0x09-React_Redux_reducer and install react-redux

Within the App/App.js file:

Create a function named mapStateToProps. This should connect the uiReducer you created and the property isLoggedIn that your component is already using
Import connect from Redux, and connect the mapStateToProps to the component

### 1. Create a small store
In the index.js file:

Create a store using createStore from Redux that would contain the uiReducer state
Implement a provider passing the store that you created to the main App

### 2. Test MapStateToProps
Export the mapStateToProps function you created if you haven’t already, and in the App.test.js file:

Create a new suite to test the function
Create a test that verify that the function returns the right object when passing the
let state = fromJS({
  isUserLoggedIn: true
});
Should return { isLoggedIn: true }

Tips:

At this point your app is not functional but you should be able to load the page without crashing
Remember that the state of uiReducer is using Map from Immutable
Requirements:

No error should be displayed within the console
All the tests in the project should pass

### 3. update MapStateToProps
In the App.js file:

Update the mapStateToProps function to also pass to the component the value for displayDrawer. It should be connected to the Reducer attribute isNotificationDrawerVisible
Update the render function of the component to use the value displayDrawer coming from the props instead of the state

### 4. Connects your actions creators
In the App.js file:

Connect to the component the actions creators displayNotificationDrawer and hideNotificationDrawer
You should use the simplified version for the mapDispatchToProps. No need to import bindActionCreators
Modify the render function of the component to use the functions passed within the props instead of the action within the Class component

### 5. Refactor your code
In the App.js file:

You can delete the old function handleDisplayDrawer
You can delete the old function handleHideDrawer
Remove any state property related to the display of the drawer
Remove any binding in the constructor
You are now passing to your components props. You need to define propTypes and defaultProps

### 6. Update your test
You can now refactor the App.test.js file:

You don’t need to test the functions handleDisplayDrawer and handleHideDrawer since everything is already tested using the Redux mechanism
You need to update the test you previously created to support the new attribute
Tips:

At this point your app should be functional and able to display/hide the drawer using the Redux state
Remember that the state of uiReducer is using Map from Immutable

### 7. Async actions and thunk middlewear
Let’s implement the LoginRequest / logout actions creators accross the entire application. LoginRequest is calling an API and is Async. Therefore, Redux will not support it. We will need to use a middleware

Install redux-thunk within your project. And in the index.js file, apply the middleware to your store

### 8. Connect Login request to app
Modify the file App/App.js:

Connect the action creator loginRequest and map it to the login prop
Modify the component to use the new login function from the props instead of the one within the class
Refactor the component to remove any login or logout function and bind

### 9. Connect user to the footer
Modify the file Footer/Footer.js

Create a mapStateToProps function
Map the user props to the user within the Redux state
Connect the Footer component to the function you created
Modify the render function and remove any use of the Context. Instead use the user prop

### 10. 
