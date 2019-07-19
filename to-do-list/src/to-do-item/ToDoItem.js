import React from 'react';
import './ToDoItem.css';

class ToDoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        }
        this.delete = this.delete.bind(this);
        this.handleChange = this.handleChange.bind(this);
    } 

    delete() {
        let key = this.props.index;
        this.props.handleClick(key);
    }

    handleChange(e) {
        let key = this.props.index;
        let item = e.target.value;
        let checked = !this.state.checked;
        this.setState({
            checked: checked
        });
        // console.log(item);

        if (checked) {
            this.props.markDone(key, item);
        }
        
    }
    
    render() {
        return ( 
                <div>
                    <div className="item"><input type="checkbox" onClick={e => this.handleChange(e)} value=
                        {this.props.item}></input>{this.props.item}</div>
                    <i className="fas" onClick={this.delete}>&#xf2ed;</i>
                </div>
                )
    }
}

export default ToDoItem