//import TodoListModel from './models.js';
import Backbone from 'backbone';
import backboneReact from 'backbone-react-component';
import React from 'react';


var TodoList = React.createClass({
    mixins: [Backbone.React.Component.mixin],
    render() {
        return (
            <ul>
                {this.state.model.todo_items.map((value, index) => {
                    console.log('adding item', value);
                    return <li key={value.id}>{value.name}</li>
                })}
            </ul>
        );
    }
})



module.exports = TodoList;
