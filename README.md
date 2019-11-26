Interview challenge for XWP React developer for Google Stories Editor project.

## Description

This is a media library with a dummy backend.

Stack includes:

* `create-react-app` as the base.
* `miragejs` as dummy *"REST API"*.
* `styled-components` as CSS-in-JS helper.
* `jest` as test runner.
* `react-testing-library` as test helper.

## Solution

Spend no more than 6 hours on this. Tasks are listed in prioritized order.

Please pay attention to the following advice regarding the conditions for a proper solution:

* Implement solution in a branch as a PR against `master` (one task per branch all based off of `master`, don't base them off of each other)
* Do feature commits and use proper commit messages (they can have a body too!)
* Argue your solution in the PR description. Feel free to create inline comments in the PR where applicable
* Use proper semantic HTML and show proficiency in best-practice CSS
* Add and/or modify relevant tests (TDD is appreciated, but not a requirement)
* Follow the style already used in the application (file and variable naming, commenting, etc)
* Follow engineering style guides and best practices (of course make sure your code lints!)

## Task list

### Task 1: Input validation

Add input validation to the "new media" form

* _Hint_: Make sure a **valid** image is provided (for a reasonable definition of _"valid"_).
* _Extra credit_: Think about accessibility when displaying errors.

### Task 2: Loading indicator

Add a loading indicator to the media list and upload form

* _Hint_: Add relevant state variables to the API context
* _Extra credit_: Consider whether different API calls require separate loading states and how to best model this?

### Task 3: Drag files from desktop

Add the ability to drag'n'drop an image onto the page to initiate upload (users still have to supply a title of course)

* _Hint 1_: Perhaps build a new top level service and include it in a proper location in `app.js`.
* _Hint 2_: Check how the HTML Drag and Drop API works. Lots of examples out there.
* _Extra credit_: Allow drop of multiple images (might require a slight rework of the API as well)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
