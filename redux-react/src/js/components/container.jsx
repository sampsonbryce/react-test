import React from 'react'
import TodoList from './list.jsx'
import Search from './input.jsx'
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
                <Search dispatch={this.props.dispatch} id='search'/>
                <TodoList todos={this.props.present}/>
            </div>
        );
    }
});

const mapStateToProps = (state) => {
    console.log('mapping', state);
    //if you connect and only want the component to know about a piece of the model
    //do that here
    return state.todo.present;
}

const mapDispatchToProps = (dispatch) => {
    return {
        onUndo: () => dispatch(Actions.undo()),
        onRedo: () => dispatch(Actions.redo())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
