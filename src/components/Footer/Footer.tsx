import React from 'react'

export interface IAboutState {
    time: string
}

export default class Footer extends React.Component<{}, IAboutState> {
    constructor(props: any) {
        super(props)

        this.state = { time: ' ' };
    }

    componentDidMount() {
        setInterval(() => {
           this.setState({
               time: new Date().toLocaleString()
           }) 
        }, 1000);

    }

    render() {

        const date = new Date()
        const hours = date.getHours()
        // const minutes = date.getMinutes()
        let timeofDay
        
        const styles = { 
            // fontSize: '30px',
            color: '#000',
            // backgroundColor: '#0f0'
        }
        
        
        if(hours < 12) {
            timeofDay = "morning"
        } else if (hours >= 12 && hours < 23) {
            timeofDay = "afternoon"
            styles.color = '#8A2BE2'
            // styles.backgroundColor = '#000'
        } else {
            timeofDay = "night"
            styles.color = '#000'
            // styles.backgroundColor = '#000'
        }


        return(
            <div className="footer">
                <p>
                    <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> 
                    <span> Sylvain {this.state.time} </span>
                    <span style={styles}>{`Good ${timeofDay}`}</span>
                    {/* <span>{`Tiden är: ${hours}:${minutes} minuter`}</span> */}
                </p>
            </div>
        )
    }
}