var React = require('react');


var WeatherMessage = ({temp, city}) => {
  return (
      <p className="text-center">It is {temp} degrees in {city}.</p>
  );
};

module.exports = WeatherMessage;
