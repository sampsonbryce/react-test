import todo_list from './list.js'
import search from './input.js'

var container = React.createClass({
    getInitialState() {
        return this.state = {
            'todo_items': ['groceries', 'apples'],
        }
    },

    render() {
        console.log('list', todo_list);
        console.log('state items', this.state.todo_items);
        return React.createElement('div', {}, React.createElement(search, {
                'enter_pressed': this.addNewItem,
                'input_text': this.state.input_text
            }),
            React.createElement(todo_list, {
                'items': this.state.todo_items
            })
        )
    },

    addNewItem: function(val) {
        console.log('enter pressed');
        var items = this.state.todo_items;
        items.push(val);
        this.setState({
            'todo_items': items
        })
        console.log('container state', this.state);
    }

});


ReactDOM.render(React.createElement(container, {}), document.getElementById('react-app'))
