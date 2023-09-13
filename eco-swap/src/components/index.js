import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Home from './components/Home';
import MyComponent from './components/MyComponent';
import Header from './Header';
import Footer from './Footer';
import Navigation from './Navigation';

ReactDOM.render(
  <div>
    <App />
    <Home />
    <MyComponent />
    <Header />
    <Footer />
    <Navigation />
  </div>,
  document.getElementById('root')
);
