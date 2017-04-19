var React = require("React");
var Nav = require("Nav");


var Main = (props) =>{
  return (
    <div>
      <Nav/>
      <div  className="row">
        <div className="columns large-6 medium-4 small-centered">
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
