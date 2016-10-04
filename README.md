# backbone-redux-store example

This is a sample project to showcase [backbone-redux-store](https://github.com/adamterlson/backbone-redux-store).
The initial commit is an adapted version of the [Backbone.js TodoMVC example](https://github.com/tastejs/todomvc/tree/gh-pages/examples/backbone), modified so it integrates with [Create React App](https://github.com/facebookincubator/create-react-app).

## Explanation

The following commits show the migration path from a Backbone-only app to an app that uses [Backbone](http://backbonejs.org/) and [React](https://facebook.github.io/react/) side by side, with the help of [backbone-redux-store](https://github.com/adamterlson/backbone-redux-store).

* [Add some react](https://github.com/vitorbal/backbone-redux-store-example/commit/d92c99cae6eea4ce0017311501c37cfaca0cde6f) - Extracts a `Stats` component for the line of statistics at the bottom of the UI.
* [Make TodoFilter a model that gets passed around instead of a global](https://github.com/vitorbal/backbone-redux-store-example/commit/10768b7406e4f27af57c44ec5e65d8774eb47866) - Refactors the active filter state to be a Backbone model instead of a global variable.
* [Add bbs and use bbDispatch for setting the active filter](https://github.com/vitorbal/backbone-redux-store-example/commit/1b3645d7f728dd45c71baabe59ca0f01d1f306cb) - Introduces [backbone-redux-store](https://github.com/adamterlson/backbone-redux-store) to the stack and uses `bbDispatch` to modify the currently active filter.
* [Make a connected component for Stats](https://github.com/vitorbal/backbone-redux-store-example/commit/9ccb9a64ad5cb936c4cc013aba99f00476bff4ad) - Introduces [redux](https://github.com/reactjs/redux) and [react-redux](https://github.com/reactjs/react-redux) to the stack and creates a connected `Stats` component.

## Usage

First, install all the dependencies by running `npm install` from the command line.

Then, from the project directory, you can run:

* `npm start` - Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits. You will also see any lint errors in the console.

* `npm run build` - Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.
