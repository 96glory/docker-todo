import React, { ChangeEvent, MouseEvent, memo } from 'react';
import { useRecoilState } from 'recoil';
import TodoItemApis from '../apis/TodoItemApis';
import { todoItemListAtom } from '../atoms';
import { IToDoItem } from '../interfaces';

const TodoItem = (props: IToDoItem) => {
  const { id, title, content, isDone } = props;

  const [toDoItemList, setToDoItemList] = useRecoilState(todoItemListAtom);

  const onChangeIsDoneCheckbox = async (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.checked;

    const restToDoItemList = toDoItemList.slice().filter((item) => item.id !== id);

    const response = await TodoItemApis.post('edit', {
      id: id,
      title: title,
      content: content,
      isDone: newValue,
    } as IToDoItem);

    setToDoItemList([response, ...restToDoItemList]);
  };

  const onClickDeleteButton = async (e: MouseEvent<HTMLButtonElement>) => {
    const response = await TodoItemApis.delete(id);
    const restToDoItemList = toDoItemList.slice().filter((item) => item.id !== id);
    setToDoItemList([...restToDoItemList]);
  };

  return (
    <div className="todo-item">
      <div className="todo-item-is-done">
        <input
          id={`${id}`}
          type="checkbox"
          name="isDone"
          checked={isDone}
          onChange={onChangeIsDoneCheckbox}
        />
      </div>
      <div className="todo-item-id">{id}</div>
      <div className="todo-item-title">{title}</div>
      <div className="todo-item-content">{content}</div>
      <button id={`${id}`} className="button delete-button" onClick={onClickDeleteButton}>
        delete
      </button>
    </div>
  );
};

export default memo(TodoItem);
