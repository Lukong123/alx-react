# inline styling

## Resources
- [Aphrodite](https://github.com/khan/aphrodite)
- [Inline styling](https://legacy.reactjs.org/docs/dom-elements.html#style)
- [Enzyme Render](https://enzymejs.github.io/enzyme/docs/api/ShallowWrapper/render.html)
- [Enzyme Prop](https://enzymejs.github.io/enzyme/docs/api/ShallowWrapper/prop.html)
- [CSS Viewport](https://www.w3schools.com/css/css_rwd_viewport.asp)
- [CSS Media queries](https://www.w3schools.com/css/css_rwd_mediaqueries.asp)
- [CSS Animations](https://www.w3schools.com/css/css3_animations.asp)

## Learning Objectives

- the differences between using a CSS file and inline styling
- how to use a CSS-in-JS tool like Aphrodite
- how to use conditions within JS to apply different styles
- how to use responsive design and make the application show a different UI according to the screen size
- how to create small animations within the app

## TASKS
### 0. Inline styling
Copy over the task_5 directory from the 0x04. React components project (We’ll be using it as the base for this project)
Rename the task_5 directory to task_0
Modify the CourseListRow component in task_0/dashboard/src/CourseList/CourseListRow.js:

Using inline styling, change the background color of a row to #f5f5f5ab
Using inline styling, change the background color of a header row to #deb5b545
If needed, modify the test file so every test pass
Tips:

For better performances, never create and pass an object to an element directly. Use a constant instead
Use the isHeader prop to easily pick the style you want to apply to the tr tag
Requirement:

Even if the modification is small, make sure that your test suites are still passing. Especially the file CourseListRow.test.js

### 1. Install aphrodite
Install Aphrodite using npm with:

npm install --save aphrodite

Modify the App component in task_1/dashboard/src/App/App.js:

Modify the component to use Aphrodite within the js file
Define the styling for the body and the footer within the file
Delete the file App.css and the import
Modify the BodySectionWithMarginBottom component in task_1/dashboard/src/BodySection/BodySectionWithMarginBottom.js:

Modify the component to use Aphrodite within the js file
Define the styling for the margin within the file
Delete the file BodySection.css and the import
Modify the CourseList component in task_1/dashboard/src/CourseList/CourseList.js:

Modify the component to use Aphrodite within the js file
Define the styling for the list within the file
Remove the styling for the list within the CourseList.css file
Modify the Header component in task_1/dashboard/src/Header/Header.js:

Modify the component to use Aphrodite within the js file
Define the styling for the logo and the header within the file
Delete the file Header.css and the import
Modify the Login component in task_1/dashboard/src/Login/Login.js:

Modify the component to use Aphrodite within the js file
Define the styling for the margin within the file
Delete the file Login.css and the import
Modify the Notifications component in task_1/dashboard/src/Notifications/Notifications.js:

Modify the component to use Aphrodite within the js file
Define the styling for the notifications panel within the file
Remove the styling for the notifications panel from the Notifications.css
Make sure the test suites are still passing!

Tips:

Look into using StyleSheetTestUtils.suppressStyleInjection at the top of your test file, to prevent issues with style injections
Requirements:

At this point, the UI should look exactly the same with the inline styling as it was with the CSS files
