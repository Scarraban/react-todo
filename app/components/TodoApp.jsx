var React = require('react');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
  _handleSearch: function(searchText, showCompleted) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
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
      ],
      showCompleted: false,
      searchText: ''
    };
  },
  render: function() {
    var {todos} = this.state;

    return (
      <div>
        <TodoSearch onSearch={this._handleSearch}/>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this._handleAddTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;
