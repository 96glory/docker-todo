import React from 'react';

import { useRecoilValue } from 'recoil';
import { sortedTodoItemList } from './../atoms';
import { IToDoItem } from './../interfaces';

const TodoList = () => {
  const sortedTodoItemListSelector = useRecoilValue<IToDoItem[]>(sortedTodoItemList);
  return (
    <div className="todo-list">
      {sortedTodoItemListSelector.map((toDoItem) => (
        <div className="todo-item">
          <div className="todo-item-is-done">{toDoItem.isDone ? 'true' : 'false'}</div>
          <div className="todo-item-id">{toDoItem.id}</div>
          <div className="todo-item-title">{toDoItem.title}</div>
          <div className="todo-item-content">{toDoItem.content}</div>
          <button className="button edit-button">edit</button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
