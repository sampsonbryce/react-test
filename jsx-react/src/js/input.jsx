import TodoListModel from './models.js';
import dis from './dispatcher.js';

var Search = React.createClass({
    handleKeyPress(e) {
        console.log('key pressed');
        if (e.keyCode === 13) {
            e.preventDefault;
            console.log('enter pressed');
            var value = this.refs.todo_input.value;
            console.log('value', value);
            dis.dispatch({type: 'CREATE_TODO', text: value})
        }
    },
    render() {
        console.log('TodoListModel input', TodoListModel);
        return (
            <div className='row text-center' id='search'>
                <input onKeyUp={this.handleKeyPress} ref='todo_input'></input>
            </div>
        );
    }
})

module.exports = Search;
