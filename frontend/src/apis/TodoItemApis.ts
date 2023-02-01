import { IDefaultResponse, IToDoItem } from '../interfaces';
import AxiosInstance from './AxiosInstance';

type postType = 'edit' | 'new';

class TodoItemApis {
  static getAll = async (): Promise<IToDoItem[]> => {
    const response = await AxiosInstance.createInstace().get<IDefaultResponse<IToDoItem>[]>(`/todo`);
    return response.data.map<IToDoItem>((item) => item.data);
  };

  static post = async (postType: postType, todoItem: IToDoItem): Promise<IToDoItem> => {
    todoItem.isDone = postType === 'new' ? false : todoItem.isDone;
    const response = await AxiosInstance.createInstace().post<IDefaultResponse<IToDoItem>>(
      `/todo`,
      JSON.stringify(
        todoItem,
        postType === 'new' ? ['title', 'content', 'isDone'] : ['id', 'title', 'content', 'isDone'],
      ),
    );

    return response.data.data;
  };

  static delete = async (id: number): Promise<IToDoItem> => {
    const response = await AxiosInstance.createInstace().delete<IDefaultResponse<IToDoItem>>(`/todo/${id}`);
    return response.data.data;
  };
}

export default TodoItemApis;
