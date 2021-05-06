import './App.css';
import AddEntry from './AddEntry.jsx';
import ToDoList from './ToDoList.jsx';
import { useEffect, useState } from 'react';

const App = () => {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState(null);

  const inputEntry = addItem => {
    //grab input from input field and save to items Array
    setItems(items => [...items, {"name" : addItem, "completed" : false}]);
  };

  const deleteEntry = index => {
    // when X is pressed, will delete entry from list
    let tempItems = items;
    tempItems.splice(index, 1);
    setItems(tempItems => [...tempItems]);
    console.log("Delete Single Entry")
  };

  const deleteCompleted = () => {
    // This will clear all completed Entries
    let tempItems = items;
    tempItems.filter(item => item.completed === false);
    setItems(tempItems => [...tempItems]);
    console.log("Delete All Entries")
  };

  const markEntryComplete = index => {
    // Clicking the checkbox will strike through the text to mark the entry "complete"
    setItems(items => [...items, items[index].isComplete = !items[index].isComplete]);
    console.log(items[index]);
    console.log("Entry marked complete")
  };

  const updateFilter = newFilter => {
    if (newFilter === null) console.log("filter: Show All", filter);
    if (newFilter === true) console.log("filter: Completed", filter);
    if (newFilter === false) console.log("filter: Still to Do", filter);
    setFilter(newFilter);
  }

  const filteredItems = useEffect(() => {
    const tempItems = items.length > 0 ? 
    items.filter(item => {
      if (filter === null) return item;
      return item.isComplete === filter;                            
    })
    :
    [];
    return tempItems
  }, [items, filter]) || items;

  return (
    <div className="App">
      <p>TODO</p>
      <AddEntry inputEntry={inputEntry}/>
      <ToDoList
        items={filteredItems}
        deleteEntry={deleteEntry}
        deleteCompleted={deleteCompleted}
        markEntryComplete={markEntryComplete}
        updateFilter={updateFilter}
      />
    </div>
  );
}

export default App;