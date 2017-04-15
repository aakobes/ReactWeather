var React = require('react');

var About = (props) => {
  return (
  	<div>
    <h1 className="text-center">About</h1>

    <p>This is a weather application built using react. Go me!</p>
    <p>Here is the <a href="https://www.udemy.com/the-complete-react-web-app-developer-course/" >link</a> to the class I took on Udemy</p>
    <p>The Weather API I used is called openweathermap. <a href="http://openweathermap.org">Check it out</a></p>
    </div>
  )
}
module.exports = About;
