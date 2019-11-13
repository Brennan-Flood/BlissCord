import React from 'react';
import {
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import Header from './header';
import MainComponent from './main_component';
import Footer from './footer';
const App = () => (
  <div className='page-container'>
    <Header />
    <MainComponent />
    <Footer />
  </div>
);

export default App;
