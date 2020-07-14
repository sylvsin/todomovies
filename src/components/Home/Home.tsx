import React from 'react';

export interface IHomeProps {
    myfamily: IHome[]
}

export interface IHome {
    id: number
    website: string
    imgPath: string
    url:string
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
                        this.props.myfamily.map((item: IHome, Index) => {
                            return <label key={Index}>
                                <li>
                                    <img src={ item.imgPath } alt='' />
                                </li>

                                <li>
                                    <button><a href={item.url} target="_blank" rel="noopener noreferrer" > {item.website} </a></button>
                                </li>
                            </label>
                        })
                    }
                </ul>
            </span>
            
        </div>
        
        );
    }
}