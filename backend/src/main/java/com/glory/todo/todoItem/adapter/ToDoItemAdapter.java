package com.glory.todo.todoItem.adapter;

import com.glory.todo.todoItem.model.ToDoItem;
import com.glory.todo.todoItem.model.ToDoItemRequest;
import com.glory.todo.todoItem.model.ToDoItemResponse;
import java.util.List;

public class ToDoItemAdapter {

    public static ToDoItemResponse toDoItemResponse(final ToDoItem toDoItem,
        final List<String> errors) {
        return ToDoItemResponse.builder().toDoItem(toDoItem).errors(errors).build();
    }

    public static ToDoItem toToDoItem(final ToDoItemRequest toDoItemRequest) {
        if (toDoItemRequest == null) {
            return null;
        }

        return ToDoItem.builder().id(toDoItemRequest.getId()).title(toDoItemRequest.getTitle())
            .content(toDoItemRequest.getContent()).isDone(toDoItemRequest.getIsDone()).build();
    }

}
