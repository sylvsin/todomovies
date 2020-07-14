/* eslint-disable react/jsx-no-undef */
import React from 'react';
import axios from 'axios'
import './Products.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import  Home  from './components/Home/Home';
import Todo from './components/Todo/Todo';
import Contact from './components/Contact/Contact';
import Products from './components/Products/Products';
import Footer from './components/Footer/Footer';
import imgcollection from './components/Home/imagesCollection';
import Order from './components/Order/Order';
import Navbar from './components/Navbar/Navbar';
import ParamsRenderer from './components/ParamsRenderer';
import { AppContext } from './AppContext';
import { ProductContextProvider } from './ProductProvider';

const baseURL: string =
  "http://medieinstitutet-wie-products.azurewebsites.net/api/";

const App: React.FC = () => {
  const api = axios.create({
    baseURL
  });
  
  return (
    <AppContext.Provider value={{ api }}>
      <ProductContextProvider>
        <Router>
          <div className="container">
            <Navbar />
            <div className="Products">  
              <Switch>
                <Route path="/" exact={true}>
                  <Home myfamily={imgcollection}></Home>
                </Route>
                <Route path="/todo">
                  <Todo></Todo>
                </Route>
                <Route path="/contact">
                  <Contact></Contact> 
                </Route>
                <Route path="/products" exact={true}>
                  <Products></Products>
                </Route>
                <Route path="/order/">
                  <Order></Order>
                </Route>
                <Route path="/product/:id" component={ParamsRenderer} />
                
              </Switch>
            </div>
            
            <Footer></Footer>
            
          </div>
        </Router>
      </ProductContextProvider>
    </AppContext.Provider>
  );
    
    
  
}
export default App

