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
                    <li><NavLink exact to="/contact" activeClassName="selected" activeStyle={{fontWeight: "bold",color: "#0f0"}}>About</NavLink></li>
                    </ul>
                </nav>
            </div>
        )
    }
}
export default Navbar