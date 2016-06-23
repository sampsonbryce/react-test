import undoable, { distinctState } from 'redux-undo'
import { combineReducers } from 'redux'

function getId(state){
    return state.reduce((maxId, todo) => {
        return Math.max(todo.id, maxId)
    }, -1) + 1
}

const todoReducer = (state = [], action) => {
    console.log('action', action);
    console.log('state', state);
    switch (action.type){
        case 'ADD_TODO':
            return state.concat(
                {
                    id: getId(state),
                    text: action.text,
                    completed: false
                }
            );
        default:
            return state;
    }
}

const countReducer = (state = 0, action) => {
    console.log(state);
    switch(action.type){
        case 'INCREMENT_COUNT':
            return state + 1;
        case 'DECREMENT_COUNT':
            return state - 1;
        default:
            return state;
    }
}

const reducers = combineReducers({
    todos: todoReducer,
    count: countReducer
})

const undoableReducer = undoable(reducers,{
    filter: distinctState()
})

export default undoableReducer
