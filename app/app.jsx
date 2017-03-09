var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
  console.log('New state', store.getState());
});

store.dispatch(actions.addTodo('Clean the yard'));
store.dispatch(actions.setSearchText('yard'));
store.dispatch(actions.toggleShowCompleted());

// LOAD FOUNDATION
$(document).foundation();

// APP CSS
require('style-loader!css-loader!sass-loader!applicationStyles');

ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);
