import React, { ChangeEvent } from 'react'

interface INewTodoProps {
    addNewTodo: (todo: string, isDone: boolean) => void
}

interface INewTodoState {
    todo: string
    isDone: boolean
}

class NewTodo extends React.Component<INewTodoProps, INewTodoState> {
    constructor(props: INewTodoProps) {
        super(props)

        this.state = {
            todo: '',
            isDone: false
        }
    }

    handleChange(e: ChangeEvent<HTMLInputElement>) {
        this.setState({
            todo: e.target.value
        })
    }

    sendToParent(){
        this.props.addNewTodo(this.state.todo, this.state.isDone)
    }

    render() {
        console.log(this.state.todo)

        return(
            <div className="newtodo">
                <input type="text" value={this.state.todo} onChange={this.handleChange.bind(this)}
                    placeholder="Add new Todo"
                />

                <button type="button" onClick={this.sendToParent.bind(this)}>Save</button>
            </div>
        )
    }
}
export default NewTodo