import React, { Component } from 'react';
import FilterBlogs from './containers/filterBlogs';
import FilterNavigator from './containers/filterNavigator';

const App = ()=>{
  return(
      <div>
        <FilterNavigator />
        <FilterBlogs />
      </div>
  );
}

export default App;
