var ReactDOM = require("react-dom")
var React = require('react')
import {browserHistory, IndexRoute, Router, Route} from 'react-router'
var Restaurants = require("./restaurants.jsx")
var Restaurant = require('./restaurant.jsx')
var Review = require('./review.jsx')


let App = React.createClass({
  render: function() {
    return(
      <div>
        {this.props.children}
      </div>
    )
  }
})

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Restaurants} />
        <Route path="restaurants(/:id)" component={Restaurant}>
          <Route path="review" component={Review}></Route>
        </Route>
    </Route>
  </Router>,document.getElementById('root'));
