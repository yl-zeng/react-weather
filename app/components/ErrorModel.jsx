var React = require("react");
var ReactDOM = require("react-dom");
var ReactDOMServer = require("react-dom/server");

var ErrorModel = React.createClass({
  getDefaultProps: function(){
    return {
      title:'Error'
    };
  },
  propTypes:{
    title:React.PropTypes.string,
    message:React.PropTypes.string.isRequired
  },

  componentDidMount: function(){
    var {title,message} = this.props;
    var modalMakeup = (
      <div id="error-model" className="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button hollow" data-close="">Okay</button>
        </p>
      </div>
    )

    var $modal = $(ReactDOMServer.renderToString(modalMakeup));
    $(ReactDOM.findDOMNode(this)).html($modal);

    var modal = new Foundation.Reveal($("#error-model"));
    modal.open();
  },
  render: function(){
    return (
      <div>
      </div>
    )

  }
});

module.exports = ErrorModel;
