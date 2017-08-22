import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  // fixed jsdom miss
  if (typeof window !== 'undefined') {
    const matchMediaPolyfill = function matchMediaPolyfill() {
      return {
        matches: false,
        addListener() {
        },
        removeListener() {
        },
      };
    };
    window.matchMedia = window.matchMedia || matchMediaPolyfill;
  }
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
