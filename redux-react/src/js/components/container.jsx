import React from 'react'
import TodoList from './list.jsx'
import Search from './input.jsx'
import { connect } from 'react-redux'

var Container = React.createClass({
    getInitialState() {
        return {}
    },
    render() {
        return (
            <div>
                <Search dispatch={this.props.dispatch} id='search'/>
                <TodoList todos={this.props.todos}/>
            </div>
        );
    }
});

function mapStateToProps(state) {
    //if you connect and only want the component to know about a piece of the model
    //do that here
    return state;
}

export default connect(mapStateToProps)(Container);
