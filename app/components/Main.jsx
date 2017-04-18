var React = require("React");
var Nav = require("Nav");


// var Main = React.createClass({
//   render: function(){
//     return (
//       <div>
//         <Nav/>
//         <h2>Main Component</h2>
//         {this.props.children}
//       </div>
//
//     );
//   }
// });

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
