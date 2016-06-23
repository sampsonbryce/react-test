import React from 'react'
//import Actions from '../redux/actions.js'

var Search = React.createClass({
    handleKeyPress(e) {
        console.log('key pressed');
        if (e.keyCode === 13) {
            e.preventDefault;
            console.log('enter pressed');
            var value = this.refs.todo_input.value;
            console.log('value', value);
            this.props.addTodo(value);
            this.props.incCount();
        }
    },
    render() {
        return (
            <div className='row text-center' id='search'>
                <input onKeyUp={this.handleKeyPress} ref='todo_input'></input>
            </div>
        );
    }
})

module.exports = Search;
