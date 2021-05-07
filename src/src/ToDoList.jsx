import React from "react";
import "./ToDoList.scss";

const ToDoList = (props) => {

    const filterView = (filterType) => (
        <div className={ props.items.length <= 0 ? "hidden" : filterType}>
            <div className={`action-button ${props.filter === null ? "highlight" : ""}`} tabIndex="0" role="button" onClick={() => props.updateFilter(null)}>All</div>
            <div className={`action-button ${props.filter === false ? "highlight" : ""}`} tabIndex="0" role="button" onClick={() => props.updateFilter(false)}>Active</div>
            <div className={`action-button ${props.filter === true ? "highlight" : ""}`} tabIndex="0" role="button" onClick={() => props.updateFilter(true)}>Completed</div>
        </div>
    )

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
                                <input type="checkbox" readOnly checked={item.completed}></input>
                                <span>
                                    <svg className="checkmark" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.75 12.1275L3.62249 9L2.5575 10.0575L6.75 14.25L15.75 5.25L14.6925 4.1925L6.75 12.1275Z" fill="none"/>
                                    </svg>
                                </span>
                            </span>
                            <span className={`item-name ${item.completed ? "strike-through" : ''}`}>{item.name}</span>
                            <div tabIndex="0" role="button" onClick={() => props.deleteEntry(index)}>
                                <svg className="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="white" fillOpacity="0.2"/>
                                </svg>
                            </div>
                        </li>
                    ))}
                    <li className="list-item" id="">
                        <span className="item-count">{props.items.filter(item => !item.completed).length} items left</span>
                        {filterView("desktop-filters")}
                        <div className="action-button clear" tabIndex="0" role="button" onClick={props.deleteCompleted}>Clear Completed</div>
                    </li>
                </ul>
                }
            </div>
            {filterView("mobile-filters")}
        </div>
    )
}

export default ToDoList;