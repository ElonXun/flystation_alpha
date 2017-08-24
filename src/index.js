import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import route from './router';
import registerServiceWorker from './registerServiceWorker';
import { Map } from 'immutable';
import data from './data';

const preloadedState = {
  blogTypeVisibilityFilter:'SHOW_ALL_BLOG',
  blogs:data.data,
}

const store = createStore(reducer,preloadedState,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// const root = ()=>{
//   return(
//       <Provider store={store}>
//         {route}
//       </Provider>
//   );
// }
ReactDOM.render(
    <Provider store={store}>
      {route}
    </Provider> ,document.getElementById('root'));
registerServiceWorker();
