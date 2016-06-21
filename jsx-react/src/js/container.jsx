import TodoList from './list.jsx'
import Search from './input.jsx'
import TodoListModel from './models.js'

var Container = React.createClass({
    getInitialState() {
        return {}
    },
    render() {
        console.log('TodoListModel container', TodoListModel)
        return (
            <div>
                <Search id='search'/>
                <TodoList items={TodoListModel.getAllItems()}/>
            </div>
        );
    }
    // addNewItem: function(val) {
    //     console.log('enter pressed');
    //     var items = this.state.todo_items;
    //     items.push(val);
    //     this.setState({'todo_items': items})
    //     console.log('container state', this.state);
    // }

});

ReactDOM.render(
    <Container/>, document.getElementById('react-app'))
