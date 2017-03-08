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
          text: text,
          completed: false
        }
      ]
    });
  },
  _handleToggle: function(id) {
    var updatedTodos = this.state.todos.map(function(todo) {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  },
  getInitialState: function() {
    return {
      todos: [
        {
          id: uuid(),
          text: 'Walk dog',
          completed: true
        },
        {
          id: uuid(),
          text: 'Clean yard',
          completed: false
        },
        {
          id: uuid(),
          text: 'Feed cat',
          completed: true
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
        <TodoList todos={todos} onToggle={this._handleToggle}/>
        <AddTodo onAddTodo={this._handleAddTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;
