import React from 'react';
import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="body">
        <Form />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
