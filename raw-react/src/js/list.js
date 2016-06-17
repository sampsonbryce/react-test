var todo_list = React.createClass({

    render() {
        console.log('list-props', this.props);
        return (
            React.createElement('ul', {},
                this.props.items.map((value, index) => {
                    console.log('adding item', value);
                    return React.createElement('li', {key: value}, value);
                })
            )
        )
    }
})

module.exports = todo_list;
