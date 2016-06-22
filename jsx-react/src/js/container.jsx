import TodoList from './list.jsx'
import Search from './input.jsx'
//import TodoListModel from './models.js'

var Container = React.createClass({
    getInitialState() {
        return {}
    },
    render() {
        //console.log('TodoListModel container', TodoListModel)
        return (
            <div>
                <Search id='search'/>
                <TodoList model={todoModel}/>
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

var todoModel = Backbone.Model.extend({
    constructor() {
        this.todo_items = [];
        this.count = 0;
    },
    set(key, value) {
        var obj_val = {
            id: this.count,
            text: value
        }

        Backbone.Model.prototype.set.apply(this, obj_val)

        this.count++;
    },
    handleDis(action){
        if(action.type === 'CREATE_TODO'){
            this.set(action.text);
        }
    }


});

dis.register(todoModel.handleDis.bind(todoModel))

$.each(['banana', 'tacos'], (index, value) => {
    console.log('iniate', value);
    var arr = todoModel.get('todo_items');
    arr.push(value);
    todoModel.set('todo_items', arr);
});

ReactDOM.render(
    <Container/>, document.getElementById('react-app'))
