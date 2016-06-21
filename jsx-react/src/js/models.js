import {EventEmitter} from 'events';
import dis from './dispatcher.js';

class TodoListModel extends EventEmitter {
    constructor() {
        super();
        this.todo_items = [];
        this.count = 0;
        $.each(['banana', 'tacos'], (index, value) => {
            console.log('iniate', value);
            this.addItem(value);
        })
    }

    addItem(name) {
        this.todo_items.push({
            id: this.count,
            name: name
        })
        this.count++;
        this.emit('change');
    }


    removeItem(id){
        $.each(this.todo_items, (index, value) => {
            if(value.id === id){
                console.log(this.todo_items);
                this.todo_items.slice(index, 1);
                console.log(this.todo_items);
                return;
            }
        });
    }
    getAllItems(){
        return this.todo_items;
    }
    handleDis(action){
        if(action.type === 'CREATE_TODO'){
            this.addItem(action.text);
        }
    }
}

console.log('creating new model');
const todo_list = new TodoListModel;
dis.register(todo_list.handleDis.bind(todo_list))

export default todo_list;
