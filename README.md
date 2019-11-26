Interview challenge for XWP React developer for Google Stories Editor project.

## Description

This is a media library with a dummy backend.

Stack includes:

* `create-react-app` as the base.
* `miragejs` as dummy backend provider.
* `styled-components` as CSS-in-JS helper.
* `jest` as test runner.
* `react-testing-library` as test helper.

## Solution

Spend no more than 6 hours on this. Tasks are listed in prioritized order.

For all tasks:

* Implement solution in a branch as a PR against `master`.
* Follow the style already used in the application.
* Argue your solution in the PR description. Feel free to create inline comments in the PR where applicable.
* Add and/or modify relevant tests.
* Follow Engineering style guides and best practices.
* Make sure your code lints.

## Task list

- [ ] Add validation to the "new media" form

* _Hint 1_: Make sure a title is provided.
* _Hint 2_: Make sure a valid image is provided.

- [ ] Add a loading indicator to the media list and upload form

* _Hint 1_: Add state to the API context and provider
* _Hint 2_: Consider whether different API calls require separate loading indicators?

- [ ] Add the ability to drag'n'drop an image onto the page to initiate upload (users still have to supply a title of course)

* _Hint 1_: Perhaps build a new top level service and include it in a proper location in `app.js`.
* _Hint 2_: Check how the HTML Drag and Drop API works. Lots of examples out there.
* _Extra credit_: Allow upload of multiple images (might require a slight rework of the API as well)

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

