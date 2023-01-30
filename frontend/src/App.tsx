import React, { useState } from 'react';
import './App.css';

export interface IToDoItem {
  id: number;
  title: string;
  content: string;
  isDone: boolean;
}

const initToDoItemList: Array<IToDoItem> = [
  { id: 1, title: '우유 사오기', content: '락토프리 우유로', isDone: true },
  { id: 2, title: '운동 다녀오기', content: '가기 귀찮다', isDone: false },
  { id: 3, title: '개발하기', content: '개발도 귀찮다', isDone: false },
];

function App() {
  const [toDoItemList, setToDoItemList] = useState<Array<IToDoItem>>(initToDoItemList);

  return (
    <div className="App">
      <header className="header">
        <h1>To Do List</h1>
      </header>
      <div className="body">
        <div className="body-form">
          <h2>hello</h2>
        </div>
        <div className="todo-list">
          {toDoItemList.map((toDoItem) => (
            <div className="todo-item">
              <div className="todo-item-is-done">{toDoItem.isDone ? 'true' : 'false'}</div>
              <div className="todo-item-id">id : {toDoItem.id}</div>
              <div>title : {toDoItem.title}</div>
              <div>content : {toDoItem.content}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
