import undoable, { distinctState } from 'redux-undo'

function getId(state){
    return state.todos.reduce((maxId, todo) => {
        return Math.max(todo.id, maxId)
    }, -1) + 1
}

const reducer = (state, action) => {
    console.log('action', action);
    switch (action.type){
        case 'ADD_TODO':
            return Object.assign({}, state, {
                todos: [...state.todos, {
                    id: getId(state),
                    text: action.text,
                    completed: false
                }]
            });
        default:
            return state;
    }
}

const undoableReducer = undoable(reducer,{
    filter: distinctState()
})

export default undoableReducer
