import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ITodoListProps {
    todos: ITodo[]
    handleTodoStatus: (todos: ITodo[]) => void
    deleteItem(todo: string): void
}

export interface ITodo {
    todo: string
    isDone: boolean
}

class TodoList extends React.Component<ITodoListProps, {}> {
    constructor(props: ITodoListProps) {
        super(props)
    }

    updateTodo(productClicked: ITodo, id: number) {
        const todoStatus = [...this.props.todos.slice(0, id), {...productClicked, isDone: !productClicked.isDone},
             ...this.props.todos.slice(id+1, this.props.todos.length)
        ]

        console.log(todoStatus)

        this.props.handleTodoStatus(todoStatus)
    }

    render() {
        return(
            <div className="todolist">
                
                {
                    this.props.todos.map((item: ITodo, Index) => {
                        return(
                            <p key={Index} style={{ textDecoration: item.isDone ? "line-through" : "none" }}> 
                                <input type="checkbox" 
                                    onChange={this.updateTodo.bind(this, item, Index)}
                                    checked={item.isDone}
                                />

                                {item.todo}

                                <span  onClick={() => this.props.deleteItem(item.todo)}>
                                    <FontAwesomeIcon className="faicons" icon='trash'/>
                                </span>
                            </p>
                        )
                    })
                }
                
            </div>
        )
    }
}
export default TodoList