import React, { ChangeEvent, MouseEvent, useState } from 'react';
import { useRecoilState } from 'recoil';
import { todoItemListState } from '../atoms';

const Form = () => {
  const [toDoItemList, setToDoItemList] = useRecoilState(todoItemListState);
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const onChangeTitleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const onChangeContentInput = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const onClickTodoAddButton = (e: MouseEvent<HTMLButtonElement>) => {
    setToDoItemList([
      {
        id: toDoItemList.map((item) => item.id).sort((a, b) => b - a)[0] + 1,
        title: title,
        content: content,
        isDone: false,
      },
      ...toDoItemList,
    ]);
    setTitle('');
    setContent('');
  };

  return (
    <div className="body-form">
      <div />
      <input
        type="text"
        name="title"
        placeholder="제목을 입력하세요"
        value={title}
        onChange={onChangeTitleInput}
        className="body-form-input"
      />
      <input
        type="text"
        name="content"
        placeholder="내용을 입력하세요"
        value={content}
        onChange={onChangeContentInput}
        className="body-form-input"
      />
      <button
        className={!title || !content ? 'button add-button disabled-button' : 'button add-button '}
        disabled={!title || !content}
        onClick={onClickTodoAddButton}
      >
        add
      </button>
    </div>
  );
};

export default Form;
