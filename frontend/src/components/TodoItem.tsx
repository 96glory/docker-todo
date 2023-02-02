import React, { ChangeEvent, MouseEvent, memo, useState, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import TodoItemApis from '../apis/TodoItemApis';
import { todoItemListAtom } from '../atoms';
import { IToDoItem } from '../interfaces';

const TodoItem = (props: IToDoItem) => {
  const { id, title, content, isDone } = props;

  const [toDoItemList, setToDoItemList] = useRecoilState(todoItemListAtom);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [todoDraft, setTodoDraft] = useState<IToDoItem>({ ...props });

  const toggleIsEditing = useCallback(() => {
    setIsEditing(!isEditing);
  }, [isEditing]);

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

  const onClickEditButton = async (e: MouseEvent<HTMLButtonElement>) => {
    toggleIsEditing();
    setTodoDraft({ ...props });
  };

  const onClickSaveButton = async (e: MouseEvent<HTMLButtonElement>) => {
    toggleIsEditing();

    const restToDoItemList = toDoItemList.slice().filter((item) => item.id !== id);
    const response = await TodoItemApis.post('edit', todoDraft as IToDoItem);
    setToDoItemList([todoDraft, ...restToDoItemList]);
  };

  const onClickCancelButton = async (e: MouseEvent<HTMLButtonElement>) => {
    toggleIsEditing();
  };

  const onChangeTitleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoDraft({ ...todoDraft, title: e.target.value });
  };

  const onChangeContentInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoDraft({ ...todoDraft, content: e.target.value });
  };

  return (
    <div className="todo-item">
      <div className="todo-item-element todo-item-is-done">
        <input
          id={`${id}`}
          type="checkbox"
          name="isDone"
          checked={isDone}
          onChange={onChangeIsDoneCheckbox}
        />
      </div>
      <div className="todo-item-element todo-item-id">{id}</div>
      {isEditing ? (
        // edit mode
        <>
          <input
            className="todo-item-element todo-item-title"
            type="text"
            name="title"
            placeholder="제목을 입력하세요"
            value={todoDraft.title}
            onChange={onChangeTitleInput}
          />
          <input
            className="todo-item-element todo-item-content"
            type="text"
            name="content"
            placeholder="내용을 입력하세요"
            value={todoDraft.content}
            onChange={onChangeContentInput}
          />
          <button id={`${id}`} className="todo-item-element button edit-button" onClick={onClickSaveButton}>
            save
          </button>
          <button
            id={`${id}`}
            className="todo-item-element button cancel-button"
            onClick={onClickCancelButton}
          >
            cancel
          </button>
        </>
      ) : (
        // read only mode
        <>
          <div className="todo-item-element todo-item-title">{title}</div>
          <div className="todo-item-element todo-item-content">{content}</div>
          <button id={`${id}`} className="todo-item-element button edit-button" onClick={onClickEditButton}>
            edit
          </button>
          <button
            id={`${id}`}
            className="todo-item-element button delete-button"
            onClick={onClickDeleteButton}
          >
            delete
          </button>
        </>
      )}
    </div>
  );
};

export default memo(TodoItem);
