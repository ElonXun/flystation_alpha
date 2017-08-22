import React from 'react';
import {HashRouter as Router, Route, Switch } from 'react-router-dom';
import asyncComponent from './asyncComponent';


// const RouteConfig = () => {
//   return (
//       <Router>
//         <Route exact path="/" component={homeContent} />
//       </Router>
//   )
// }

const App = asyncComponent(() =>
    import('./App')
)

const getAsyncComponent = (component)=>{
  return asyncComponent(() =>
      import('./components/public/'+component+'/'+component)
  )
}
const RouteConfig = (
    <Router>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/index" component={getAsyncComponent('a')}/>
        <Route path="/hhh" component={getAsyncComponent('b')}/>
      </Switch>
    </Router>
);
export default RouteConfig;