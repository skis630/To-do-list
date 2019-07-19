import React from 'react';
import './ToDoAdd.css';
import '../to-do-item/ToDoItem';
import ToDoItem from '../to-do-item/ToDoItem';
import Done from '../to-do-item/Done';

class ToDoAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           toDoList: [],
           done: []
        };
        this.saveInput = this.saveInput.bind(this);
        this.add = this.add.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.deleteDone = this.deleteDone.bind(this);
        this.markDone = this.markDone.bind(this);
        this.markUndone = this.markUndone.bind(this);
    }

    saveInput(input) {
        this.textInput = input;
    }

    add() {
        let toDoItem = this.textInput.value;
        if (toDoItem) {
            this.setState({
            toDo: this.state.toDoList.push(toDoItem)
            });
        }
        
    }

    deleteTodo(index) {
        let newList = this.state.toDoList;
        newList.splice(index, 1);
        
        this.setState({
            toDoList: newList
        });
    }

    deleteDone(index) {
        let newList = this.state.done;
        newList.splice(index, 1);
        
        this.setState({
            done: newList
        });

    }

    markDone(index, item) {
        this.deleteTodo(index);
        let newDone = this.state.done;
        newDone.push(item);
        this.setState({
            done: newDone
        });
    }

    markUndone(index, item) {
        this.deleteDone(index);
        let newTodo = this.state.toDoList;
        newTodo.push(item);
        this.setState({
            toDoList: newTodo
        });
    }

    render() {
        let self = this;
        let items = this.state.toDoList.map(function(item, index) { 
            return (
                    <li key={index}>
                        <ToDoItem index={index} item={item} markDone=
                                  {(key, item) => self.markDone(key, item)} handleClick={(key) => self.deleteTodo(key)} />
                    </li>
                    )
        });
        console.log(this.state.done);
        let doneItems = this.state.done.map(function(elem, index) {
            return (
                <li key={index}>
                        <Done index={index} item={elem} handleClick={(key) => self.deleteDone(key)} markUndone=
                              {(key, item) => self.markUndone(key, item)} />
                </li>
            )
        });
           
        return (
            <div className="add">
                <button type="button" id="add" className="fas" onClick={this.add}>&#xf067;</button>
                <input type="text" id="to-do-item" className="text-muted" placeholder="Add a to-do..." ref={this.saveInput} />
                <div className="todo">
                    <h1>To do:</h1>
                    <ul>
                       {items} 
                    </ul>
                    <h1>Done:</h1>
                    <ul>
                        {doneItems}
                    </ul>
                </div>
                
            </div>
        )
    }
}


export default ToDoAdd