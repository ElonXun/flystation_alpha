import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import route from './router';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer)

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
