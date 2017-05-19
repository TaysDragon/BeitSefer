// Include React
var React = require("react");

// Include Child
var Child = require("./Child");
var GChild = require("./GrandChild");

// This is the Main component
var Main = React.createClass({
  // Here we set a generic set of states associated with our Main Component
  getInitialState: function() {
    return {
      Name: "Parent",
      number: 5,
      (<a><span class="btn btn-success"></span> Click here!</a>
    <a href="/all"><span class="btn btn-success"></span> Reset</a>);
    };
    
  },
  // Here we describe our component's render method
  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron">
            <h1>React structure</h1>
            <h2>A lesson on props, states, parents, and children </h2>
             
          </div>
          <div className="col-md-6">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title text-center">{this.state.name}</h3>
              </div>
              <div className="panel-body text-center">
                {/* Displaying some information about our component using it's state */}
                <h1>Name: {this.state.name}</h1>                
                <hr />
                <h2>number: {this.state.number}</h2>
                
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="panel panel-default">
              <div className="panel-body text-center">
                 </div>
            </div>
          </div>
          {/* Passing 3 props to the Child component. These are accessible in Child as this.props  */}
          <Child
            dadsAge={this.state.age}
            
          />
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;