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

### 3.
