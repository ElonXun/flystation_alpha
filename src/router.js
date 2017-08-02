import React from 'react';
import {HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import App from './App';
import Homepage from './components/public/homeContent/homeContent';


// const RouteConfig = () => {
//   return (
//       <Router>
//         <Route exact path="/" component={homeContent} />
//       </Router>
//   )
// }
const RouteConfig = (
    <Router>
      <div>
        <Route exact path="/" component={App}/>
      </div>
    </Router>
);
export default RouteConfig;