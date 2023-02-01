import { atom, selector } from 'recoil';
import TodoItemApis from './apis/TodoItemApis';
import { IToDoItem } from './interfaces';

export const todoItemListAtom = atom<IToDoItem[]>({
  key: 'todoItemListAtom',
  default: selector({
    key: 'todoItemListAtom/default',
    get: async ({ get }) => {
      return TodoItemApis.getAll();
    },
  }),
});

export const sortedTodoItemListSelector = selector<IToDoItem[]>({
  key: 'sortedTodoItemListSelector',
  get: ({ get }) => {
    const state = get(todoItemListAtom);

    if (state.length === 0) return [];

    return state.slice().sort((a, b) => {
      if (a.isDone === b.isDone) {
        return b.id - a.id;
      }
      return a.isDone ? 1 : -1;
    });
  },
});
