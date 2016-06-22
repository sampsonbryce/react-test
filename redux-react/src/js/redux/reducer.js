function getId(state){
    return state.todos.reduce((maxId, todo) => {
        return Math.max(todo.id, maxId)
    }, -1) + 1
}

export default function reducer(state, action){
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
