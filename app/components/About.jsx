var React = require("React");



var About = (props) =>{
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This is a weather application built on react.</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> -
            This was the javascript framework used
        </li>
        <li>
          <a href="https://openweathermap.org">Open Weather Map</a> -
            Use Open Weather Map Api to search weather by city
        </li>
      </ul>
    </div>

  );
};

module.exports = About;
