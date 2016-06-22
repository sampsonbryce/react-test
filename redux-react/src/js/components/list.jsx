import React from 'react';

var TodoList = React.createClass({
    render() {
        return (
            <ul>
                {this.props.todos.map((todo, index) => {
                    console.log('adding todo', todo);
                    return <li key={todo.id}>{todo.text}</li>
                })}
            </ul>
        );
    }
})

module.exports = TodoList;
