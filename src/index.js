var React = require('react');
var ReactDOM = require('react-dom');
var HomePage = require('./components/HomePage');



ReactDOM.render(
    <HomePage /> ,  //<HomePage></HomePage> or React.crateElement(HomePage)
    document.getElementById('root')
);