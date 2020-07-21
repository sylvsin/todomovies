import React from 'react'
import { NavLink } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return(
            <div className="nav-wrapper">
                <nav>
                    <ul>
                    <li><NavLink exact to="/" activeClassName="selected" activeStyle={{fontWeight: "bold",color: "#0f0"}}><img src="/image/logo1.jpg"  alt=''/></NavLink></li>
                    <li><NavLink exact to="/" activeClassName="selected" activeStyle={{fontWeight: "bold",color: "#0f0"}}>Home</NavLink></li>
                    {/* <li><NavLink exact to="/todo" activeClassName="selected" activeStyle={{fontWeight: "bold",color: "#0f0"}}>Todo</NavLink></li> */}
                    <li><NavLink exact to="/contact" activeClassName="selected" activeStyle={{fontWeight: "bold",color: "#0f0"}}>Contact</NavLink></li>
                    {/* <li><NavLink exact to="/products" activeClassName="selected" activeStyle={{fontWeight: "bold",color: "#0f0"}}>Movies</NavLink></li> */}
                    {/* <li><NavLink exact to="/order/" activeClassName="selected" activeStyle={{fontWeight: "bold",color: "#0f0"}}>Order</NavLink></li> */}
                    </ul>
                </nav>
            </div>
        )
    }
}
export default Navbar