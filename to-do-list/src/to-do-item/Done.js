import './ToDoItem.css';
import React from 'react';

class Done extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: true
        }
        this.handleChange = this.handleChange.bind(this);
        this.delete = this.delete.bind(this);
    }

    handleChange(e) {
        let key = this.props.index;
        let item = e.target.value;
        let unchecked = !(this.state.checked);
        this.setState({
            checked: unchecked
        });

        if (!unchecked) {
            this.props.markUndone(key, item);
        }
    }

    delete() {
        let key = this.props.index;
        this.props.handleClick(key);
    }

    render() {
        return (
            <div>
                <div className="item"><input type="checkbox" onChange={e => this.handleChange(e)} value=
                    {this.props.item} checked={this.state.checked}></input>{this.props.item}</div>
                <i className="fas" onClick={this.delete}>&#xf2ed;</i>
            </div>
        )
    }
}


export default Done;