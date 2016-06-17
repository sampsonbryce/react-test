import list from './list.js'

var search = React.createClass({
    constructor(){ 
      this.state = {'name': 'bob', 'job': 'coder'};
    }
    handleKeyPress: function(e) {
        if (e.keyCode === 13) {
            e.preventDefault;
            console.log('enter pressed');
        }
    }.bind(this),

    render: function() {
        console.log(this.props);
        console.log(this.handleKeyPress);
        return (
            React.createElement('div', {
                    className: "row text-center",
                    id: "search"
                },
                React.createElement('input', {
                    onKeyUp: this.handleKeyPress
                })
            )
        );
    }
})

ReactDOM.render(React.createElement('div', {},
    React.createElement(search, null),
    React.createElement(list, null)
), document.getElementById('react-app'))
