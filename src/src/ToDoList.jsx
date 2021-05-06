import React from "react";
import "./ToDoList.scss";

const ToDoList = (props) => {
    return (
        <div>{
            props.items.length <= 0 ?
            <p>You currently don't have anything in your To Do List.</p>
            :
            <div className="container">
                <div className="listConainer">
                    <ul>
                        {props.items.map((item, index) => (
                            <li key={index}>
                                <input type="checkbox" checked={item.completed} onChange={() => props.markEntryComplete(index)}></input>
                                <span>{item.name}</span>
                                <div tabIndex="0" role="button" onClick={() => props.deleteEntry(index)}>X</div>
                            </li>
                        ))}
                    </ul>
                    <div id="">
                        <span>{props.items.length} items left</span>
                        <div tabIndex="0" role="button" onClick={props.deleteCompleted}>Clear Completed</div>
                    </div>
                </div>

                <div className="filters">
                    <div className="filterButton" tabIndex="0" role="button" onClick={() => props.updateFilter(null)}>All</div>
                    <div className="filterButton" tabIndex="0" role="button" onClick={() => props.updateFilter(true)}>Active</div>
                    <div className="filterButton" tabIndex="0" role="button" onClick={() => props.updateFilter(false)}>Completed</div>
                </div>
            </div>
        }
        </div>
    )
}

export default ToDoList;