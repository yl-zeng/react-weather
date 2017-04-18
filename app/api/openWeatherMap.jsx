var axios = require("axios");

const OPEN_WEATHER_MAP_URL = "http://api.openweathermap.org/data/2.5/weather?units=imperial&";

const API_KEY = "d3f3797337aecb2a35e9070b7e3a48f1";

var getTemperature = function(location){
  var encodedLocation = encodeURIComponent(location);
  var url = OPEN_WEATHER_MAP_URL+`APPID=${API_KEY}&q=${encodedLocation}`;
  return axios.get(url).then( (res)=>{
    if(res.data.cod && res.data.message){
      throw new Error("Unable to fetch temperature");
    }else{
      return res.data.main.temp;
    }
  },(err) => {
    throw new Error(err);
  });
};

module.exports = {
  getTemperature
};
