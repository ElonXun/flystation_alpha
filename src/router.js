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

const Home = asyncComponent(() =>
    import('./containers/home/home')
)

const Admin = asyncComponent(() =>
    import('./containers/admin/admin')
)
const getAsyncComponent = (component)=>{
  return asyncComponent(() =>
      import('./components/public/'+component+'/'+component)
  )
}
const RouteConfig = (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/blog/:id" component={getAsyncComponent('a')}/>
        <Route path="/admin" component={Admin}/>
      </Switch>
    </Router>
);
export default RouteConfig;