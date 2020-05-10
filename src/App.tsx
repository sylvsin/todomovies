/* eslint-disable react/jsx-no-undef */
import React from 'react';
import './Products.css';
import { BrowserRouter as Router, NavLink, Switch, Route } from 'react-router-dom';
import  Home, { IHome }  from './components/Home/Home';
import Todo from './components/Todo/Todo';
import Contact from './components/Contact/Contact';
import Products from './components/Products/Products';
import Details from './components/Details/Details';
import Footer from './components/Footer/Footer';
import imgcollection from './components/Home/imagesCollection';

export default class App extends React.Component {
  private family: IHome[] = [{id: 1, father: 'Sylvain', mom: 'Adolphine', son: 'Moise', daughter: 'Myriam', imgPath: '/image/aircraft.jpg'},
        {id: 2, father: 'Jerry', mom: 'Willy', son: 'Jirres', daughter: 'Gloria', imgPath: "image/ballon.jpg" }]

  render() {
    return (
      <Router>
        <div className="container">
          <nav>
            <ul>
            <li><NavLink exact to="/" activeClassName="selected" activeStyle={{fontWeight: "bold",color: "#0f0"}}><img src="/image/logo1.jpg"  alt=''/></NavLink></li>
              <li><NavLink exact to="/" activeClassName="selected" activeStyle={{fontWeight: "bold",color: "#0f0"}}>Home</NavLink></li>
              <li><NavLink exact to="/about" activeClassName="selected" activeStyle={{fontWeight: "bold",color: "#0f0"}}>Todo</NavLink></li>
              <li><NavLink exact to="/contact" activeClassName="selected" activeStyle={{fontWeight: "bold",color: "#0f0"}}>Contact</NavLink></li>
              <li><NavLink exact to="/products" activeClassName="selected" activeStyle={{fontWeight: "bold",color: "#0f0"}}>Products</NavLink></li>
              <li><NavLink exact to="/products/4" activeClassName="selected" activeStyle={{fontWeight: "bold",color: "#0f0"}}>Detaljer</NavLink></li>
            </ul>
          </nav>
          <div className="Products">  
            <Switch>
              <Route path="/about">
                <Todo></Todo>
              </Route>
              <Route path="/contact">
                <Contact></Contact> 
              </Route>
              <Route path="/products" exact={true}>
                <Products></Products>
              </Route>
              <Route path="/products/:id">
                <Details></Details>
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


