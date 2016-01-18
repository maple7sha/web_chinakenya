// React Class for News
var News = React.createClass({
  mixins: [ReactFireMixin],

  loadFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      mimeType: "application/json",
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  getInitialState: function() {
    return {data: []};
  },

  // componentWillMount: function() {
  //   var NewsRef = new Firebase("https://srichinakenya.firebaseio.com/News");
  //   this.bindAsArray(NewsRef, "data");
  // },

  componentDidMount: function() {
    this.loadFromServer();
    setInterval(this.loadFromServer, this.props.pollInterval);
  },

  handleClick: function(data) {
    React.render(
      <ProjectInstance data={data} />,
      document.getElementById('content')
    );
  },

	render: function() {
    var self=this;
    var newsNodes = this.state.data.map(function(news, i) {
      return (
          <div className="col-md-12">
              <div className="panel panel-default">
                  <div className="panel-heading ">
                      <h4> {news.title} </h4>
                  </div>
                  <div className="panel-body">
                      <p>{news.abstract} </p>
                  </div>
                  <div className="">
                    <a onClick={self.handleClick.bind(this, news)} href="#" className="btn btn-default detail-button">详细</a>
                  </div>
              </div>
          </div>
      );
    });
    return (<div className="col-md-4">  
             <div className="col-lg-12">
                <h1 className="page-header"> 新闻 </h1>
             </div>
             {newsNodes}
           </div>);
  }
});


// React Class for Columnists
var Columnists = React.createClass({
  loadFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      mimeType: "application/json",
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  getInitialState: function() {
    return {data: []};
  },

  componentDidMount: function() {
    this.loadFromServer();
    setInterval(this.loadFromServer, this.props.pollInterval);
  },

  handleClick: function(project) {
    React.render(
      <ProjectInstance data={project} />,
      document.getElementById('content')
    );
  },

  render: function() {
    var self=this;
    var columnistsNodes = this.state.data.map(function(columnists) {
      return (
        <div className="col-md-6">
            <div className="panel panel-default">

                <div className="panel-heading">
                    <h4><i className="fa fa-fw fa-check"></i> {columnists.title}</h4>
                </div>
                <div className="panel-body">
                    <p>{columnists.abstract}</p>
                </div>
                <div className="">
                  <a onClick={self.handleClick.bind(this, columnists)} href="#" className="btn btn-default detail-button">详细</a>
                </div>
            </div>
        </div>
      );
    });
    return  <div className="row">
                <div className="col-lg-12">
                    <h2 className="page-header">专栏</h2>
                </div>
                {columnistsNodes}
            </div>
  }
});


/* React Class for projects */
var Projects = React.createClass({
  loadFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      mimeType: "application/json",
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  getInitialState: function() {
    return {data: []};
  },

  componentDidMount: function() {
    this.loadFromServer();
    setInterval(this.loadFromServer, this.props.pollInterval);
  },

  handleClick: function(project) {
    React.render(
      <ProjectInstance data={project} />,
      document.getElementById('content')
    );
  },

  render: function() {
    var self=this;
    var projectsNodes = this.state.data.map(function(projects) {
      return (
        <div className="col-md-6">
            <div className="panel panel-default">

                <div className="panel-heading">
                    <h4><i className="fa fa-fw fa-check"></i> {projects.title}</h4>
                </div>
                <div className="panel-body">
                    <p>{projects.abstract}</p>
                </div>
                <div className="">
                  <a onClick={self.handleClick.bind(this, projects)} href="#" className="btn btn-default detail-button">详细</a>
                </div>
            </div>
        </div>
      );
    });
    return  <div className="row">
              <div className="col-lg-12">
                <h2 className="page-header">研究</h2>
              </div>
              {projectsNodes}
            </div>
  }

});



// Content includes all three sections mentioned above, rendered into the content page
/*
  Columnists page temporarily hidden; used to be placed after projects sections
            <div id="columnists">
              <Columnists url={"content/data/columnists.json"} pollInterval={2000} />
            </div>
*/

var Content = React.createClass({
  render: function() {
    return (
      <div>
        <div className="row">
          <div id="news">
            <News  url={"content/data/news.json"} pollInterval={2000} />
          </div>
          <div className="col-md-8">  
            <div id="projects">
              <Projects url={"content/data/projects.json"} pollInterval={2000}/>
            </div>
            <div id="columnists">
              <Columnists url={"content/data/columnists.json"} pollInterval={2000} />
            </div>
          </div>
        </div>
      </div>
    );
  }
});

React.render(
  <Content />,
  document.getElementById('content')
);
