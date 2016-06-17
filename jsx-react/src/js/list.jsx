var TodoList = React.createClass({

    render() {
        console.log('list-props', this.props);
        return (
            <ul>
                {this.props.items.map((value, index) => {
                    console.log('adding item', value);
                    return <li key={value}>{value}</li>
                })}
            </ul>
            );
    }
})

module.exports = TodoList;
