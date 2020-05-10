import React from 'react';
import todoData from './todosData'

export interface ITodoState {
    myTodos: ITodo[]
}

export interface ITodo {
    id: number
    text: string
    done: boolean
}

export default class About extends React.Component<{}, ITodoState> {
    constructor(props: any) {
        super(props);

        this.state = {
            myTodos: todoData
        }        
    }

    handleChange(productClicked: ITodo, id: number) {
        console.log('You clicked: ', id)
        this.setState(
            prevState => {
                const updateTodos = prevState.myTodos.map(item => {
                    if(item.id === productClicked.id) {
                        item.done = !item.done
                    }
                    return item
                })
                return {
                    myTodos:updateTodos
                }
            }
        )
    }

    render() {
        const doneStyle = {
            fontStyle: "italic",
            // color: "#eee",
            // textDecorattion: "line-through"
        }


        // const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        // const doubled = nums.map(function(num) {
        //     return num * 2
        // })

        return (
            <div className="about">
                <h3>To do app</h3>
                
                {
                    this.state.myTodos.map((item: ITodo, Index) => {
                        return(
                            <p key={Index} style={{ textDecoration: item.done ? "line-through" : "none" }}>
                                <input type='checkbox' onChange={this.handleChange.bind(this, item, Index)} checked={item.done}></input>
                                <span style={item.done ? doneStyle: undefined}>{item.text}</span>

                                <hr style={{marginLeft: '30em', marginRight: '30em'}}/>
                            </p>
                        )
                    })
                }
                

                {/* <h3>Caculator</h3>
                <input type="text" placeholder="Multiplie numbers by two"></input>
                <button type="button">Save</button> 
                <p>{doubled}</p> */}

            </div>
        );
    }
}