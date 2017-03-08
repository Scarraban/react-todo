var React = require('react');

var TodoSearch = React.createClass({
  _handleSearch: function() {
    var showCompleted = this.refs.showCompleted.value;
    var searchText = this.refs.searchText.value;

    this.props.onSearch(searchText, showCompleted);
  },
  render: function() {
    return (
      <div>
        <div>
          <input type="search" ref="searchText" placholder="Search todos" onChange={this._handleSearch}/>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" onChange={this._handleSearch}/>
            Show completed todos
          </label>
        </div>
      </div>
    );
  }
});

module.exports = TodoSearch;
