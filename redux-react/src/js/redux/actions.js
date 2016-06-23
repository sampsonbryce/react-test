var Actions = {
    addTodo(text){
        return {
            type: 'ADD_TODO',
            text: text
        }
    },
    incCount(){
        return {
            type: 'INCREMENT_COUNT',
        }
    }
}

export default Actions;
