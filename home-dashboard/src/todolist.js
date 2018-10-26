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

        // var that = this;
        // var firebaseRef = firebase.database().ref();
        // console.log(that, 'that');
        // console.log(firebaseRef.database, 'value');

        // firebaseRef.once('value')
        //     .then(function (dataSnapshot) {
        //             console.log(dataSnapshot);
                
                // that.setState({
                //     // currentItem: currentItem
                // })
            // })

        // var that = this;
        // var firebaseRef = firebase.database().ref();
        // firebaseRef.once('value')
        //     .then(function (dataSnapshot) {
        //         that.setState({
        //             messages: messages
        //         });
        //     });

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.componentDidMount = this.componentDidMount.bind(this);
    }

    // componentDidMount(e) {
    //     e.preventDefault();
    //     let taskData = firebase.database().ref('items');
    //     taskData.on('value', function (snapshot) {
    //         let dataList = snapshot.val();
    //         let taskList = Object.keys(dataList).map(function (key) {
    //             return [key, dataList[key]];
    //         });
    //     });
    //     console.log(this.state, ' firebase task list');
    // }

    addItem(e) {
        if (this._inputElement.value !== "") {
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };
            // console.log(newItem);
            // this.setState((prevState) => {
            //     return {
            //         items: prevState.items.concat(newItem)
            //     };
            // });
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
            this.setState({items: taskList})
        });

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
