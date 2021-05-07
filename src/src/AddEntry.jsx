import React from "react";
import "./AddEntry.scss";

const AddEntry = (props) => {

    //create Ref to textInput to momintor and change input field as needed 
    let textInput = React.createRef();

    //save new to do to state
    const submitEntry = () => {
        props.inputEntry(textInput.current.value);
        textInput.current.value = null;
    }

    //grab to do with enter key
    const keyEntry = (event) => {
        if (event.key === 'Enter') {
            console.log('do validate');
            submitEntry();
        }
    }

    //grab to do via mouse click on button
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
                onKeyDown={e => keyEntry(e)}
            />
        </div>
    )
}

export default AddEntry;