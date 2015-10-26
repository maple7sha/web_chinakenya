

var NewsInstance = React.createClass({
  render: function() {
    return (
      <div className="Instancepage">
        <div className="page-header">
          <h3> {this.props.data.title} </h3>
        </div>
        <div>
          <p> {this.props.data.text} </p>
        </div>
      </div>
    );
  }
});

var ProjectInstance = React.createClass({
  render: function() {
    return (
      <div className="Instancepage">
        <div className="page-header">
          <h3> {this.props.data.title} </h3>
        </div>
        <div>
          <iframe className="iframePDF" src={this.props.data.url}
                width='100%' height='1000px' frameborder='0'></iframe>
        </div>
      </div>
    );
  }
});