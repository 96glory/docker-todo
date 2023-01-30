package com.glory.todo.todoItem.model;

import java.util.List;
import com.glory.todo.common.ApiResponse;
import lombok.Builder;

public class ToDoItemResponse extends ApiResponse<ToDoItem> {

    @Builder
    public ToDoItemResponse(final ToDoItem toDoItem, final List<String> errors) {
        super(toDoItem);
        this.setErrors(errors);
    }

}
