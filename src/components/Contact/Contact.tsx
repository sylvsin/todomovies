import React, { ChangeEvent } from "react"
// import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone} from '@fortawesome/free-solid-svg-icons'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
library.add(faPhone);
library.add(faEnvelope)

interface IRegisterState {
    name: string
    email: string
    isgoing: boolean
}

class Contact extends React.Component<{}, IRegisterState> {
    constructor(props: any) {
        super(props)

        this.state = {
            name: '',
            email: '',
            isgoing: false
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event: ChangeEvent<HTMLInputElement>) {
        let targetName = event.target.name
        let value = targetName === 'isgoing' ? event.target.checked : event.target.value

        this.setState({
            [targetName]: value
        } as any)
    }

    handleSubmit(e: any) {
        e.preventDefault();

        console.log(this.state)

        this.setState({
            name: '',
            email: '',
            isgoing: false
        })

        // Validation


        // Post data
        // axios.post('url', JSON.stringify(this.state), )
    }

    render() {
        return (
            <React.Fragment>
                <div className="contact">
                    <span>
                        <ul>              
                            <h5>Mr. Sylvain</h5>
                            <li><img src="/image/sylvain4.jpg" alt=""/></li>
                            <li><FontAwesomeIcon className="faicons" icon='phone'/> 0735-73 69 41</li>
                            <li><FontAwesomeIcon className="faicons" icon='envelope'/> lubwimi@gmail.com</li>
                        </ul>
                    
                        <ul>
                            <h5>Skill</h5>
                            <li>Javascript</li>
                            <li>Typescript</li>
                            <li>React</li>
                            <li>Angular</li>
                            <li>Python/Django</li>
                            <li>Node.js</li>
                            <li>Agila project</li>
                            <li>HTML</li>
                            <li>CSS</li>
                        </ul>

                        <ul>
                            <form noValidate onSubmit={this.handleSubmit.bind(this)}>
                                <h5>Register</h5>
                                <input type="text" value={this.state.name} onChange={this.handleChange} name="name" required placeholder="Name"/><br/>
                                <input type="email" value={this.state.email} onChange={this.handleChange} name="email" required placeholder="Email"/><br/>
                                <input type="checkbox" checked={this.state.isgoing} onChange={this.handleChange} name="isgoing" /><br/>

                                <button type="submit">Submit</button>
                            </form>
                        </ul>
                        
                    </span>
                </div>
            </React.Fragment>
        );
    }
    
}
export default Contact