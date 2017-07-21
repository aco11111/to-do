import React, {Component} from 'react';
import ToDoItems from './ToDoItems';

var ToDoList = React.createClass({

    getInitialState: function () {
        return {items: []};
    },

    addItem: function (e) {

        var itemArray = this.state.items;

        itemArray.push({
            text: this._inputElement.value,
            key: Date.now()
        });

        this.setState({items: itemArray});

        this._inputElement.value = "";
        e.preventDefault();
    },         

    render: function () {

        
    	var todoItems = this.state.items.map(function (todo) {
				return (
					<ToDoItems
						key={todo.id}
						todo={todo}						
					/>
				);
            }, this);


            
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input className="submitFormInput" ref={(a) => this._inputElement = a} placeholder="Enter task"></input>                     
                    </form>
                </div>
                {todoItems}
            </div>
        );
    }
});

export default ToDoList;