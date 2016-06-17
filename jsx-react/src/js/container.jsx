import TodoList from './list.jsx'
import Search from './input.jsx'

var Container = React.createClass({
    getInitialState() {
        return this.state = {
            'todo_items': ['groceries', 'apples']
        }
    },

    render() {
        //return (<div className="commentBox">Hello, world! I am a CommentBox.</div>);
        return (
            <div>
                <Search id='search' enterPressed={this.addNewItem}/>
                <TodoList items={this.state.todo_items}/>
            </div>
        );

        //<todo_list items={this.state.todo_items}/>
        // return React.createElement('div', {}, React.createElement(search, {
        //         'enter_pressed': this.addNewItem,
        //         'input_text': this.state.input_text
        //     }),
        //     React.createElement(todo_list, {
        //         'items': this.state.todo_items
        //     })
        // )
    },

    addNewItem: function(val) {
        console.log('enter pressed');
        var items = this.state.todo_items;
        items.push(val);
        this.setState({'todo_items': items})
        console.log('container state', this.state);
    }

});

ReactDOM.render(
    <Container/>, document.getElementById('react-app'))
//ReactDOM.render(React.createElement(Container, null), document.getElementById('react-app'))
