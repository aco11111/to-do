import React, {Component} from 'react';
import ToDoList from './ToDoList';
import './ToDoApp.css';

var ToDoApp = React.createClass({
  render: function () {
    return (
      <div className="App">

        <div className="App-header">
          <h1>TO DO</h1>
        </div>

        <div>
          <ToDoList/>
        </div>

      </div>
    );
  }
});

export default ToDoApp;
