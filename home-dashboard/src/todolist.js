import React, { Component } from "react";
import TodoItems from "./TodoItems";
import firebase from './firebase';
import "./todolist.css";

class ToDoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            currentItem: ''
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    addItem(e) {
        if (this._inputElement.value !== "") {
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };
            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });
        }
        console.log(this.state.items);
        const itemsRef = firebase.database().ref('items');
        console.log(this._inputElement.value, 'test');
        const item = {
            title: this._inputElement.value,
        }
        itemsRef.push(item);
        this.setState({
            currentItem: '',
        })
        this._inputElement.value = "";
        e.preventDefault();
    }

    handleSubmit(e) {
        e.preventDefault();
        const itemsRef = firebase.database().ref('items');
        const item = {
            title: this.state.currentItem
        }
        itemsRef.push(item);
        this.setState({
            currentItem: ''
        })
    }

    deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
            return (item.key !== key);
    });

        this.setState({
            items: filteredItems
        });
    }

    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    {/* <form onSubmit={this.handleSubmit}> */}
                    <form onSubmit={this.addItem}>
                        <input
                            ref={(a) => this._inputElement = a} 
                            placeholder="Enter a task"
                            />
                        <button type="submit">add</button>
                    </form>
                </div>
                <TodoItems entries={this.state.items} 
                    delete={this.deleteItem}
                />
            </div>
        );
    }
}

export default ToDoList;
