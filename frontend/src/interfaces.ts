export interface IToDoItem {
  id: number;
  title: string;
  content: string;
  isDone: boolean;
}

export interface IDefaultResponse<T> {
  data: T;
  errors: Array<any>;
}
