import React, { Component } from 'react';
import FlipMoves from "react-flip-move";

class TodoItems extends Component {
    constructor(props) {
        super(props);

        this.createTasks = this.createTasks.bind(this);

    }
    delete(key) {
        this.props.delete(key);
    }

    createTasks(item) {
        return <li
            onClick={ () => this.delete(item.key)}
            key={item.key}>{item.text}
            </li>
    }

    render() {
        let todoEntries = this.props.entries;
        let listItems = todoEntries.map(this.createTasks);

        return (
            <ul className="theList">
                <FlipMoves duration={250} easing="ease-out">
                    {listItems}
                </FlipMoves>
            </ul>
        );
    }
}

export default TodoItems;