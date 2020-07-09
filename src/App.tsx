/* eslint-disable react/jsx-no-undef */
import React from 'react';
import './Products.css';
import { BrowserRouter as Router, NavLink, Switch, Route } from 'react-router-dom';
import  Home  from './components/Home/Home';
import Todo from './components/Todo/Todo';
import Contact from './components/Contact/Contact';
import Products from './components/Products/Products';
import Footer from './components/Footer/Footer';
import imgcollection from './components/Home/imagesCollection';
import Order from './components/Order/Order';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav>
            <ul>
              <li><NavLink exact to="/" activeClassName="selected" activeStyle={{fontWeight: "bold",color: "#0f0"}}><img src="/image/logo1.jpg"  alt=''/></NavLink></li>
              <li><NavLink exact to="/" activeClassName="selected" activeStyle={{fontWeight: "bold",color: "#0f0"}}>Home</NavLink></li>
              <li><NavLink exact to="/todo" activeClassName="selected" activeStyle={{fontWeight: "bold",color: "#0f0"}}>Todo</NavLink></li>
              <li><NavLink exact to="/contact" activeClassName="selected" activeStyle={{fontWeight: "bold",color: "#0f0"}}>Contact</NavLink></li>
              <li><NavLink exact to="/products" activeClassName="selected" activeStyle={{fontWeight: "bold",color: "#0f0"}}>Movies</NavLink></li>
              <li><NavLink exact to="/products/4" activeClassName="selected" activeStyle={{fontWeight: "bold",color: "#0f0"}}>Order</NavLink></li>
            </ul>
          </nav>
          <div className="Products">  
            <Switch>
              <Route path="/todo">
                <Todo></Todo>
              </Route>
              <Route path="/contact">
                <Contact></Contact> 
              </Route>
              <Route path="/products" exact={true}>
                <Products></Products>
              </Route>
              <Route path="/products/:id">
                <Order></Order>
              </Route>
              <Route path="/">
                <Home myfamily={imgcollection}></Home>
              </Route>
            </Switch>
          </div>
          
          <Footer></Footer>
          
        </div>
      </Router>
    );
  }
  
}


