var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
  render: function() {
    var {id, text, completed, createdAt, completedAt} = this.props;
    var renderDate = () => {
        var timeUnix = completed ? completedAt : createdAt;
        var formattedTime = moment.unix(timeUnix).format('MMM Do YYYY @ h:mm a');
        return `${completed ? 'Completed' : 'Created'} ${formattedTime}`;
    };

    return (
      <div onClick={() => {
          this.props.onToggle(id);
        }}>
        <input type="checkbox" ref="isCompleted" checked={completed}/>
        <p>{text}</p>
        <p>{renderDate()}</p>
      </div>
    );
  }
});

module.exports = Todo;
