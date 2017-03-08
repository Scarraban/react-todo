var React = require('react');
var uuid = require('uuid');

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
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text
        }
      ]
    });
  },
  getInitialState: function() {
    return {
      todos: [
        {
          id: uuid(),
          text: 'Walk dog'
        },
        {
          id: uuid(),
          text: 'Clean yard'
        },
        {
          id: uuid(),
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
