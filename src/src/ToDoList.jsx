import React from "react";
import "./ToDoList.scss";

const ToDoList = (props) => {
    return (
        <div className="container">
            <div className="list-container">
                { props.items.length <= 0 ?
                <p>You currently don't have anything in your To Do List.</p>
                :
                <ul className="list">
                    {props.items.filter(item => {
                        if (props.filter === null) return item;
                        return props.filter === item.completed;
                    }).map((item, index) => (
                        <li className="list-item" key={index}>
                            <span className="completed-checkbox" onClick={() => props.markEntryComplete(index)}>
                                <input type="checkbox" checked={item.completed}></input>
                                <span></span>
                            </span>
                            <span className={item.completed ? "strike-through" : ''}>{item.name}</span>
                            <div tabIndex="0" role="button" onClick={() => props.deleteEntry(index)}>X</div>
                        </li>
                    ))}
                    <li className="list-item" id="">
                        <span>{props.items.length} items left</span>
                        <div className="action-button clear" tabIndex="0" role="button" onClick={props.deleteCompleted}>Clear Completed</div>
                    </li>
                </ul>
                }
            </div>

            <div className={ props.items.length <= 0 ? "hidden" : "filters"}>
                <div className="action-button" tabIndex="0" role="button" onClick={() => props.updateFilter(null)}>All</div>
                <div className="action-button" tabIndex="0" role="button" onClick={() => props.updateFilter(false)}>Active</div>
                <div className="action-button" tabIndex="0" role="button" onClick={() => props.updateFilter(true)}>Completed</div>
            </div>
        </div>
    )
}

export default ToDoList;