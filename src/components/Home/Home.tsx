import React from 'react';

export interface IHomeProps {
    myfamily: IHome[]
}

export interface IHome {
    id: number
    father: string
    mom: string
    son: string
    daughter: string
    imgPath: string
}

export default class Home extends React.Component<IHomeProps, {}> {
    constructor(props: IHomeProps) {
        super(props);
    }
    
    
    render() {
        return (   
        <div className="home">
            
            {/* <img src={ this.props.myfamily[0].imgPath } alt='' />  */}
            <span>
                <ul>
                        
                    {
                        this.props.myfamily.map(item => {
                            return <label key={item.id}>
                                <li><img src={ item.imgPath } alt='' /></li>
                                <li> {item.father} </li>
                                {/* <li>Mom: {item.mom}</li> 
                                <li>Son: {item.son}</li>
                                <li>Dauther: {item.daughter}</li> */}
                            </label>
                        })
                    }
                </ul>
            </span>
            
        </div>
        
        );
    }
}