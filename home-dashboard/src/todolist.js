import React, { Component } from "react";
import TodoItems from "./TodoItems";
import firebase from './firebase';
import "./todolist.scss";

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
        }
        const itemsRef = firebase.database().ref('items');
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
            console.log('delete');
            return (item.key !== key);
    });

        this.setState({
            items: filteredItems
        });
    }

    render() {

        let taskData = firebase.database().ref('items');
        taskData.on('value', function (snapshot) {
            let dataList = snapshot.val();
            let taskList = Object.keys(dataList).map(function (key) {
                return [key, dataList[key]];
            });
            console.log(taskList, ' firebase task list');
            this.setState({})
        });

        return (
            <div className="todoListMain">
                <div className="header">
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
