var React = require("React");
var WeatherForm = require("WeatherForm");
var WeatherMessage = require("WeatherMessage");
var openWeatherMap = require("openWeatherMap");
var ErrorModel = require("ErrorModel");


var Weather = React.createClass({
  getInitialState:function(){
    return {
      location: "Miami",
      temperature: 88
    }
  },
  handleSearch: function(location){
    var that = this;
    this.setState({
      errorMessage: undefined
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
  render: function (){

    var {location,temperature,errorMessage} = this.state;

    function renderError(){
      if(typeof errorMessage === 'string'){
        return (
          <ErrorModel message={errorMessage}/>
        )
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        <WeatherMessage location={location} temperature={temperature}/>
        {renderError()}
      </div>

    );
  }
});

module.exports = Weather;
