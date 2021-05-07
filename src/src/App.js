import './App.scss';
import AddEntry from './AddEntry.jsx';
import ToDoList from './ToDoList.jsx';
import { useState } from 'react';

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
    let tempItems = items.filter(item => item.completed === false);
    setItems(tempItems);
    console.log("Delete All Entries")
  };

  const markEntryComplete = index => {
    // Clicking the checkbox will strike through the text to mark the entry "complete"
    //setItems(items => [...items, items[index].isComplete = !items[index].isComplete]);
    const tempItems = items.map((item, id) => {
      return index === id ? { ...item, completed: !item.completed }: item
    });

    setItems(tempItems);
    
    console.log("item: ", items[index]);
    console.log("index: ", index)
    console.log("Entry marked complete");
  };

  const updateFilter = newFilter => {
    if (newFilter === null || newFilter === undefined) console.log("filter: Show All", filter);
    if (newFilter === true) console.log("filter: Completed", filter);
    if (newFilter === false) console.log("filter: Still to Do", filter);
    setFilter(newFilter);
  }

  // const filteredItems = items.filter(item => {
  //     if (filter === null) return item;
  //     return item.isComplete === filter;                            
  //   });

  return (
    <div className="App">
      <div className="header" />
      <div className="app-container">
        <p className="title">TODO</p>
        <AddEntry inputEntry={inputEntry}/>
        <ToDoList
          items={items}
          totalItems={items.length}
          deleteEntry={deleteEntry}
          deleteCompleted={deleteCompleted}
          markEntryComplete={markEntryComplete}
          updateFilter={updateFilter}
          filter={filter}
        />
      </div>
    </div>
  );
}

export default App;