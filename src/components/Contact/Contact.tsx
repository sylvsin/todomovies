import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone} from '@fortawesome/free-solid-svg-icons'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
library.add(faPhone);
library.add(faEnvelope)

function Contact() {
    
    return (
        <React.Fragment>
            <div className="contact">
                <span>
                    <ul>              
                        <li><h3>Mr. Sylvain</h3></li>
                        <li><img src="/image/sylvain4.jpg" alt=""/></li>
                        <li><FontAwesomeIcon className="faicons" icon='phone'/> 0735-73 69 41</li>
                        <li><FontAwesomeIcon className="faicons" icon='envelope'/> lubwimi@gmail.com</li>
                    </ul>
                
                    <ul>
                        <h3>My Skill</h3>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JAVASCRIPT</li>
                        <li>TYPESCRIPT</li>
                        <li>REACT</li>
                        <li>PYTHON/DJANGO</li>
                        <li>NODE.JS</li>
                        <li>Angular</li>
                        <li>Agila project</li>
                    </ul>
                
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </span>
            </div>
        </React.Fragment>
    );
    
}

export default Contact