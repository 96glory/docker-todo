import React from 'react';

import { useRecoilValue } from 'recoil';
import { sortedTodoItemListSelector } from './../atoms';
import { IToDoItem } from './../interfaces';
import TodoItem from './TodoItem';

const TodoList = () => {
  const sortedTodoItemListSelectors = useRecoilValue<IToDoItem[]>(sortedTodoItemListSelector);

  return (
    <div className="todo-list">
      {sortedTodoItemListSelectors.map((toDoItem) => (
        <TodoItem key={toDoItem.id} {...toDoItem} />
      ))}
    </div>
  );
};

export default TodoList;
