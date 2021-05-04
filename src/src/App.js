import './App.css';
import AddEntry from './AddEntry.jsx';
import ToDoList from './ToDoList.jsx';
import { useState } from 'react';

const App = () => {
  const [items, setItems] = useState([]);

  const inputEntry = (addItem) => {
    //grab input from input field and save to items Array
    setItems([...items, {"name" : addItem}]);
  }

  const deleteEntry = () => {
    // when X is pressed, will delete entry from list
  }

  const markEntryComplete = (isComplete) => {
    // Clicking the checkbox will strike through the text to mark the entry "complete"
    setItems([...items, {"completed" : isComplete}]);
  }
  
  console.log(items);

  return (
    <div className="App">
      <p>TODO</p>
      <AddEntry inputEntry={inputEntry}/>
      <ToDoList items={items} deleteEntry={deleteEntry} markEntryComplete={markEntryComplete} />
    </div>
  );
}

export default App;

// <header className="App-header">
// <img src={logo} className="App-logo" alt="logo" />
// <p>
//   Second Edit <code>src/App.js</code> and save to reload.
// </p>
// <a
//   className="App-link"
//   href="https://reactjs.org"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   Learn React
// </a>
// </header>


// class TodoApp extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { items: [], text: '' };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   render() {
//     return (
//       <div>
//         <h3>TODO</h3>
//         <TodoList items={this.state.items} />
//         <form onSubmit={this.handleSubmit}>
//           <label htmlFor="new-todo">
//             What needs to be done?
//           </label>
//           <input
//             id="new-todo"
//             onChange={this.handleChange}
//             value={this.state.text}
//           />
//           <button>
//             Add #{this.state.items.length + 1}
//           </button>
//         </form>
//       </div>
//     );
//   }

//   handleChange(e) {
//     this.setState({ text: e.target.value });
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     if (this.state.text.length === 0) {
//       return;
//     }
//     const newItem = {
//       text: this.state.text,
//       id: Date.now()
//     };
//     this.setState(state => ({
//       items: state.items.concat(newItem),
//       text: ''
//     }));
//   }
// }

// class TodoList extends React.Component {
//   render() {
//     return (
//       <ul>
//         {this.props.items.map(item => (
//           <li key={item.id}>{item.text}</li>
//         ))}
//       </ul>
//     );
//   }
// }

// ReactDOM.render(
//   <TodoApp />,
//   document.getElementById('todos-example')
// );