import React from 'react';
import todoData from './todosData'
import TodoList, { ITodo } from './TodoList';
import NewTodo from './NewTodo';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
library.add(faTrash)


interface ITodoState {
    todoList: ITodo[]
}

export default class Todo extends React.Component<{}, ITodoState> {
    private todoList: ITodo[] = todoData

    constructor(props: any) {
        super(props)

        this.state = {
            todoList: todoData
        }
    }

    updateTodoList(todo: string, isDone: boolean): void {
        this.setState({
            todoList: [...this.state.todoList, {todo, isDone}]
        })
    }

    updateTodoStatus(todoList: ITodo[]) {
        this.setState({
            todoList: [...todoList]
        })
    }

    deleteItem(todo: string) {
        const filteredItems = this.state.todoList.filter(item => item.todo!==todo);
        this.setState({todoList: filteredItems})
    }

    render() {
        return(
            <div className="todo">
                <TodoList todos={this.state.todoList} handleTodoStatus={this.updateTodoStatus.bind(this)} deleteItem={this.deleteItem.bind(this)}></TodoList>
                <NewTodo addNewTodo={this.updateTodoList.bind(this)}></NewTodo>
            </div>
        )
    }
}