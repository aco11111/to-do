import React, {Component} from 'react';

var ToDoItems = React.createClass({

  handleEdit: function (event) {
    console.log(event.target.textContent);
  },

  render: function () {

    return (
      <ul className="toDoItem" onDoubleClick={this.handleEdit}>
        {this.props.todo.text}
      </ul>
    );
  }
});

export default ToDoItems;