var Greeter = React.createClass({
    getDefaultProps: function() {
        return {
            name: 'React'
        };
    },
    render: function() {
        var name = this.props.name;
        return (
            <div>
                <h1>Hello {name}!</h1>
            </div>
        )
    }
});

let name = 'Aleksey';

ReactDOM.render(
    <Greeter name={name}/>,
    document.getElementById("app")
);

var Paragraph = React.createClass({
    getDefaultProps: function() {
        return {
            paragraph: 'Default message'
        };
    },
    render: function() {
        var paragraph = this.props.paragraph;
        return (
            <div>
                <p>{paragraph}</p>
            </div>
        )
    }
});

let paragraph = 'Hello new paragraph from prop';
ReactDOM.render(
    <Paragraph paragraph = {paragraph}/>,
    document.getElementById("paragraph")
);