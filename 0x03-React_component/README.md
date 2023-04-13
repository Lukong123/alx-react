## REACT COMPONENT
## Resources
- [React components](https://intranet.alxswe.com/rltoken/IrcQvhQGFPwpdXcHUABB2Q)
- [React Developer Tools](https://intranet.alxswe.com/rltoken/ISa2LQiraDIOLg6hSp6GqA)
- [Enzyme Shallow](https://intranet.alxswe.com/rltoken/R4sY6vv0_EZi5BwskKwOLg)
- [Enzyme Mount](https://intranet.alxswe.com/rltoken/-cuX84kIn3EWCuJNx-P74A)
- [Enzyme Unmount](https://enzymejs.github.io/enzyme/docs/api/ReactWrapper/unmount.html)
- [React Pure components](https://legacy.reactjs.org/docs/react-api.html#reactpurecomponent)
- [React Higher Order Components](https://legacy.reactjs.org/docs/higher-order-components.html)
- [Jest mock function](https://jestjs.io/docs/jest-object)

## Learning Objectives
- When to use a Class or a function to create a component
- The lifecycle of a Class component
- How to test a component
- How to utilize a Jest spy to verify that a function is being called correctly
- What an HOC is and how to use it
- How to optimize performance and control which components to render

## TASKS

### 0. Commence with class components
Start this project with files from the the last task of the 0x03. React Props project:

Convert the App function into a React Class:

Modify the function within App.js to convert the App function into a React class
Make sure that the tests are still passing
Requirements:

At this point, reloading the App should display the exact same page as the last task
The console in your browser should not show any error or warning

### 1. Lifecycle
Add lifecycle to a component

In the App Class:

Add a props named logOut with the props type being function
The default value for this property, should be an empty function
Add an event listener when the component is mounted to listen to when the user is pressing down the keyboard keys
When the user is pressing down the control and the h keys simultaneously, display the alert Logging you out and call the function logOut
Add the tests

In the test file for the App Class:

Create a test to verify that when the keys control and h are pressed the logOut function, passed as a prop, is called and the alert function is called with the string Logging you out
Requirements:

Make sure to remove the event listener when the component is unmounted
In the test file, make sure to restore the alert function you mocked
At this point, reloading the App should display the exact same page as the last task
The console in your browser should not show any error or warning

