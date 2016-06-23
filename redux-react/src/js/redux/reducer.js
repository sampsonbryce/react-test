import undoable, { distinctState } from 'redux-undo'
import { combineReducers } from 'redux'

function getId(state){
    return state.todos.reduce((maxId, todo) => {
        return Math.max(todo.id, maxId)
    }, -1) + 1
}

const todoReducer = (state = {todos: [], count: 0}, action) => {
    console.log('action', action);
    console.log('state', state);
    switch (action.type){
        case 'ADD_TODO':
            let todos = state.todos.concat(
                {
                    id: getId(state),
                    text: action.text,
                    completed: false
                }
            );
            let count = state.count + 1;
            return {todos, count}
        default:
            return state;
    }
}

const reducers = combineReducers({
    todo: todoReducer,
})

const undoableReducer = undoable(reducers,{
    filter: distinctState()
})

export default undoableReducer
