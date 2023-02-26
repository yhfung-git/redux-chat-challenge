// external modules
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';
import reducers from './reducers';

// render an instance of the component in the DOM
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={reducers}>
    <App />
  </Provider>
);
