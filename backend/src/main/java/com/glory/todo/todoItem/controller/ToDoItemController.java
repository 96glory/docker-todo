package com.glory.todo.todoItem.controller;

import com.glory.todo.todoItem.adapter.ToDoItemAdapter;
import com.glory.todo.todoItem.model.ToDoItem;
import com.glory.todo.todoItem.model.ToDoItemRequest;
import com.glory.todo.todoItem.model.ToDoItemResponse;
import com.glory.todo.todoItem.service.ToDoItemService;
import java.util.ArrayList;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/todo")
public class ToDoItemController {

    private final ToDoItemService toDoItemService;

    @GetMapping("/{id}")
    public ToDoItemResponse get(@PathVariable(value = "id") Long id) {
        List<String> errors = new ArrayList<>();
        ToDoItem toDoItem = null;

        try {
            toDoItem = toDoItemService.get(id);
        } catch (final Exception e) {
            errors.add(e.getMessage());
        }

        return ToDoItemAdapter.toDoItemResponse(toDoItem, errors);
    }

    @GetMapping
    public List<ToDoItemResponse> getAll() {
        List<String> errors = new ArrayList<>();
        List<ToDoItem> toDoItems = toDoItemService.getAll();
        List<ToDoItemResponse> toDoItemResponses = new ArrayList<>();
        toDoItems.forEach(toDoItem -> {
            toDoItemResponses.add(ToDoItemAdapter.toDoItemResponse(toDoItem, errors));
        });

        return toDoItemResponses;
    }

    @PostMapping
    public ToDoItemResponse post(@RequestBody ToDoItemRequest toDoItemRequest) {
        List<String> errors = new ArrayList<>();
        ToDoItem toDoItem = ToDoItemAdapter.toToDoItem(toDoItemRequest);
        try {
            toDoItem = toDoItemService.create(toDoItem);
        } catch (final Exception e) {
            errors.add(e.getMessage());
        }

        return ToDoItemAdapter.toDoItemResponse(toDoItem, errors);
    }

    @DeleteMapping("/{id}")
    public ToDoItemResponse delete(@PathVariable(value = "id") Long id) {
        List<String> errors = new ArrayList<>();
        ToDoItem toDoItem = null;
        try {
            toDoItem = toDoItemService.get(id);
            toDoItemService.delete(id);
        } catch (final Exception e) {
            errors.add(e.getMessage());
        }

        return ToDoItemAdapter.toDoItemResponse(toDoItem, errors);
    }

}
