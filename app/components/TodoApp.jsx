var React = require('react');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
  _handleAddTodo: function(text) {
    alert('new todo: ' + text);
  },
  getInitialState: function() {
    return {
      todos: [
        {
          id: 1,
          text: 'Walk dog'
        },
        {
          id: 2,
          text: 'Clean yard'
        },
        {
          id: 3,
          text: 'Feed cat'
        }
      ]
    };
  },
  render: function() {
    var {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this._handleAddTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;
