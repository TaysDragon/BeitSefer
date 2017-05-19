// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");
var moment = require("moment");

// Here we create a set of JavaScript variables
var name = "Sharon";
var num1 = 1;
var num2 = 2;
var dob = moment("07/11/1980", "MM/DD/YYYY");

ReactDOM.render(

  <div className="main-container">
    <div className="container">
      <div className="jumbotron">

        {/* Inserted the variables and simple calculations using curly brackets */}

        <h2>My name is {name}. But you can call me...</h2>
        <h1>The JSX Boss!</h1>
        <hr />
        <h2>I was born {dob.format("MM/DD/YYYY")} and am {dob.fromNow(true)} years old. </h2>
        <h2>I can do math: {num1 + num2}.</h2>
        <h2>I can generate random numbers:
          {Math.floor(Math.random() * 10) + 1},
          {Math.floor(Math.random() * 10) + 1},
          {Math.floor(Math.random() * 10) + 1}.
        </h2>
        <h2>I can even reverse my name: {name.split("").reverse()}</h2>
      </div>
    </div>

  </div>, document.getElementById("app"));
