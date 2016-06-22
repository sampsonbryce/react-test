import React from 'react';

var TodoList = React.createClass({
    render() {
        console.log(this.props);
        return (
            <ul>
                {this.props.todos.present.map((todo, index) => {
                    console.log('adding todo', todo);
                    return <li key={todo.id}>{todo.text}</li>
                })}
            </ul>
        );
    }
})

module.exports = TodoList;
