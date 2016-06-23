import React from 'react'
import TodoList from './list.jsx'
import Search from './input.jsx'
import UndoRedo from './undo_redo.jsx'
import Actions from '../redux/actions.js'
import { connect } from 'react-redux'

var Container = React.createClass({
    getInitialState() {
        return {}
    },
    render() {
        console.log('container props', this.props);
        return (
            <div>
                <UndoRedo></UndoRedo>
                <Search incCount={this.props.incCount} addTodo={this.props.addTodo} id='search'/>
                <TodoList todos={this.props.todos}/>
                <p>Count: {this.props.count}</p>
            </div>
        );
    }
});

const mapStateToProps = (state) => {
    console.log('mapping', state);
    console.log('giving present', state.present);
    //if you connect and only want the component to know about a piece of the model
    //do that here
    return state.present.todo;
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (text) => dispatch(Actions.addTodo(text)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
