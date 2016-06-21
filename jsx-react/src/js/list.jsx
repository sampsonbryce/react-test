import TodoListModel from './models.js';

var TodoList = React.createClass({
    mixins: [Backbone.React.Component.mixin],
    
    getInitialState() {
        return {todos: TodoListModel.getAllItems()}
    },
    componentWillMount() {
        TodoListModel.on("change", () => {
            this.setState({todos: TodoListModel.getAllItems()});
        });
    },

    render() {
        return (
            <ul>
                {this.state.todos.map((value, index) => {
                    console.log('adding item', value);
                    return <li key={value.id}>{value.name}</li>
                })}
            </ul>
            );
    }
})

module.exports = TodoList;
