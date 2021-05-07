import React from "react";
import "./AddEntry.scss";

const AddEntry = (props) => {

    let textInput = React.createRef();

    const submitEntry = () => {
        props.inputEntry(textInput.current.value);
        textInput.current.value = null;
    }

    const getEntry = (event) => {
        if (event.key === 'Enter') {
            console.log('do validate');
            submitEntry();
        }
    }

    const clickEntry = () => {
        console.log(textInput.current.value);
        if (textInput.current.value !== "" || textInput.current.value !== "") {
            console.log('do validate (button)');
            submitEntry();
        } else {

        }
    }

    return (
        <div className="entry-container">
            <div className="circle-box" role="button" onClick={() => clickEntry()}></div>
            <input
                ref={textInput}
                className="todo-input"
                type="text"
                id="new-todo"
                placeholder="Create a new Item..."
                onKeyDown={e => getEntry(e)}
            />
        </div>
    )
}

export default AddEntry;