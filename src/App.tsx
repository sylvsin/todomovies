/* eslint-disable react/jsx-no-undef */
import React from 'react';
import './Products.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import  Home  from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import imgcollection from './components/Home/imagesCollection';
import Navbar from './components/Navbar/Navbar';

const App: React.FC = () => {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <div className="Products">  
          <Switch>
            <Route path="/" exact={true}>
              <Home myfamily={imgcollection}></Home>
            </Route>
            <Route path="/contact">
              <Contact></Contact> 
            </Route>
          </Switch>
        </div>
        
        <Footer></Footer>
        
      </div>
    </Router>
  );
    
}
export default App

