import React from "react";

const ToDoList = (props) => {
    return (
        <div>
            <ul>
                {props.items.map((item, index) => (
                    <li key={index}>{item.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default ToDoList;