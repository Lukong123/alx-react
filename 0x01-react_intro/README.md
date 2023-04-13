## REACT Intro

## Resources
- [React Official Website](https://intranet.alxswe.com/rltoken/8Yw5Q3N5ApWjhrvlQVbpbw)
- [Getting started with React](https://www.taniarascia.com/getting-started-with-react/)
- [React overview](https://intranet.alxswe.com/rltoken/-86g7Gje9o9SMnMPb_uRlA)
- [create-react-app](https://intranet.alxswe.com/rltoken/XRP9_jP0G0vQODINFymubQ)
- [React Developer Tools](https://intranet.alxswe.com/rltoken/-no3Szs-PJQ_P_urpa4FSQ)
- [What is Babel?](https://intranet.alxswe.com/rltoken/-no3Szs-PJQ_P_urpa4FSQ)
- [Enzyme](https://intranet.alxswe.com/rltoken/AlilVwpyEpGwPOK40d5dXw)

## Learning Objectives
- How to create a basic Javascript application using React
- How to use the package create-react-app to start developing quickly with React
- What JSX is and how to use it
- How to use the React Developer Tools to debug your code
- How to use Enzyme’s Shadow rendering to test your application
- How to use React with Webpack & Babel

## Tasks
### Task 0
- Create a basic app named dashboard using create-react-app in your task_0 directory

- You will need a favicon and the Holberton logo. Download them and add them to the src/ directory under dashboard/
**Remove the unused files:**

- service-worker
- index.css
- App.test.js

in task_0/dashboard/src/App.js, create a function App that returns:

- a header div with a class named App-header containing the Holberton logo and a h1 with the text School dashboard
- a body div with a class named App-body containing at least one paragraph with the text Login to access the full dashboard
- a footer div with a class named App-footer containing at least one paragraph with the text Copyright 2020 - holberton School

**Requirements:**

- When running, there should not be any lint error in the console
### Task 1( Embedding Expressions Functions)
Using your code from the previous task, in task_1/dashboard/src/utils.js:

- Create a function named getFullYear that will return the current year
- Create a function named getFooterCopy:
- It accepts one argument isIndex(boolean). When true, the function should return Holberton School. When false, the function should return Holberton School main dashboard
- Modify the footer returned in task_1/dashboard/src/App.js to use these two functions
in task_1/dashboard/src/Notifications.js, create a Notifications element:

- It should import React
- It should export a function
- The function should return a div with the class Notifications
- The div should contain a paragraph with the text Here is the list of notifications
- import the file Notifications.css.
in task_1/dashboard/src/Notifications.css, style the Notifications class:

- Add a border and some padding around the div
- Render the Notifications element:

- Modify task_1/dashboard/src/index.js to render the new element (Notifications) in a div named root-notifications
- Check that you can see the two elements on the browser, and using the React browser extension
**Requirements:

- When running, there should not be any lint error in the console
### Task 2(Modifying the App)
**using your code from the previous task, in task_2/dashboard/src/App.js under the paragraph that says Login to access the full dashboard:

- add a label and input for email
- add a label and input for password
- when the user clicks on a label, it should select the corresponding input
- add one button element with the text “OK”

### Task 3 (Modiy the Notifications)
In task_2/dashboard/src/utils.js:

- Create a function named getLatestNotification that returns the following string: <strong>Urgent requirement</strong> - complete by EOD
in task_2/dashboard/src/Notifications.js in the Notifications div:

- add a button element with inline styling (without using the CSS file):
- show button on right side of notifications box
- aria-label is Close
- when user clicks on the button it logs to the console Close button has been clicked
- in the button element add a children img element that will import the close-icon.png image
- after the paragraph add an unordered list
- the list has the following items:
- - The first one has a default priority and says New course available
- - The second one has a urgent priority and says New resume available
- - Add the priority to the first and second items of the list using a data attribute
- - The last item correctly displays the content of getLatestNotification using dangerouslySetInnerHTML

**in task_2/dashboard/src/Notifications.css:

- style the notification priorities using their data attribute: set the color of default items to blue, and the color of urgent items to red.
**Requirements:**
- When running, there should not be any lint error in the console
