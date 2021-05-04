import React from "react";

const AddEntry = (props) => {
    
    const getEntry = (event) => {
        if (event.key === 'Enter') {
            console.log('do validate')
            props.inputEntry(event.target.value);
            event.target.value = null;
        }
    }

    return (
        <input
            type="text"
            id="new-todo"
            placeholder="What do you need to do?"
            onKeyDown={e => getEntry(e)}
        />
    )
}

export default AddEntry;