import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header/Header';
import './index.css';

import App from './components/App/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='container'>
      <Header />
      <App />
    </div>
  </React.StrictMode>
);

