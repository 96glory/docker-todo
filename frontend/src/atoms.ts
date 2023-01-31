import { atom, selector } from 'recoil';
import { IToDoItem } from './interfaces';

export const todoItemListState = atom<IToDoItem[]>({
  key: 'todoItemListState',
  default: [
    { id: 1, title: '우유 사오기', content: '락토프리 우유로', isDone: true },
    { id: 2, title: '운동 다녀오기', content: '가기 귀찮다', isDone: false },
    { id: 3, title: '개발하기', content: '도커를 배워보자', isDone: false },
    {
      id: 4,
      title:
        '길다란거테스트길다란거테스트길다란거테스트길다란거테스트길다란거테스트길다란거테스트길다란거테스트길다란거테스트길다란거테스트길다란거테스트길다란거테스트',
      content:
        '길다란거테스트길다란거테스트길다란거테스트길다란거테스트길다란거테스트길다란거테스트길다란거테스트길다란거테스트길다란거테스트길다란거테스트길다란거테스트',
      isDone: false,
    },
  ],
});

export const sortedTodoItemList = selector<IToDoItem[]>({
  key: 'sortedTodoItemList',
  get: ({ get }) => {
    const state = get(todoItemListState);

    if (state.length === 0) return [];

    return state.slice().sort((a, b) => {
      if (a.isDone === b.isDone) {
        return b.id - a.id;
      }
      return a.isDone ? 1 : -1;
    });
  },
});
