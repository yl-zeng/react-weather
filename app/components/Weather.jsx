var React = require("React");
var WeatherForm = require("WeatherForm");
var WeatherMessage = require("WeatherMessage");
var openWeatherMap = require("openWeatherMap");
var ErrorModel = require("ErrorModel");


var Weather = React.createClass({
  getInitialState:function(){
    return{
      location:undefined,
      temperature:undefined
    }
  },

  handleSearch: function(location){
    var that = this;
    this.setState({
      errorMessage: undefined,
      location: undefined,
      temperature: undefined
    });
    openWeatherMap.getTemperature(location).then((temperature)=>{
      that.setState({
        temperature:temperature,
        location:location
      })
    },(err)=>{
      that.setState({
        errorMessage: err.message
      });
    });

  },
  componentDidMount: function(){
    var location = this.props.location.query.location;
    if(location && location.length>0){
      this.handleSearch(location);
      window.location.hash="#/";
    }
  },
  componentWillReceiveProps: function(newProps){
    var location = newProps.location.query.location;
    if(location && location.length>0){
      this.handleSearch(location);
      window.location.hash="#/";
    }
  },
  render: function (){

    var {location,temperature,errorMessage} = this.state;

    function renderError(){
      if(typeof errorMessage === 'string'){
        return (
          <ErrorModel message={errorMessage}/>
        )
      }
    }
    function renderMessage () {
      if (temperature && location) {
        return <WeatherMessage temperature={temperature} location={location}/>;
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>

    );
  }
});

module.exports = Weather;
