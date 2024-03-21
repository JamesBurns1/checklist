import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState('');

  const clearList = () => {
    setTodos([]);
  }

  const addTodo = () => {
    if (inputText.trim() !== '') {
      setTodos([{ id: Date.now(), text: inputText, completed: false }, ...todos]);
      setInputText('');
    }
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleInputKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Checklist</h1>
        <div>
          <input className='input-container'
            type="text"
            placeholder="Add to list"
            value={inputText}
            onChange={handleInputChange}
            onKeyPress={handleInputKeyPress}
          />
          </div>
          <div>
          <button className="add-button" onClick={addTodo}>Add Item</button>
          <button className="clear-button"onClick={clearList}>Clear List</button>
        </div>
      </header>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => toggleTodo(todo.id)}
            className={todo.completed ? 'completed todo-item' : 'todo-item'}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
