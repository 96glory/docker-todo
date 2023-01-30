package com.glory.todo.todoItem.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ToDoItemRequest {

    private Long id;

    private String title;

    private String content;

    private Boolean isDone;

}
