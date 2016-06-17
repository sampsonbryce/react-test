
var search = React.createClass({
  handleKeyPress(e){
        if (e.keyCode === 13) {
            e.preventDefault;
            var value = this.refs.todo_input.value;
            this.props.enter_pressed(value);
          }
    },
    render: function() {
        return (
            React.createElement('div', {
                    className: "row text-center",
                    id: "search"
                },
                React.createElement('input', {
                    onKeyUp: this.handleKeyPress,
                    ref: 'todo_input'
                })
            )
        );
    }
})

module.exports = search;
