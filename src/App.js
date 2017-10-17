import React, { Component } from 'react';
import FilterBlogs from './containers/filterBlogs';
import FilterNavigator from './containers/filterNavigator';
import Home from './containers/home/home';


const App = ()=>{
  return(
      <div>
        {/*<FilterNavigator />
        <FilterBlogs />*/}
        <Home/>
      </div>
  );
}

export default App;
