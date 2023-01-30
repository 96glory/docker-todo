package com.glory.todo.todoItem.service;

import com.glory.todo.todoItem.model.ToDoItem;
import com.glory.todo.todoItem.repository.ToDoItemRepository;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ToDoItemService {

    private final ToDoItemRepository toDoItemRepository;

    public ToDoItem get(final Long id) {
        return toDoItemRepository.findById(id).orElse(null);
    }

    public ToDoItem create(final ToDoItem toDoItem) {
        if (toDoItem == null) {
            throw new NullPointerException("To Do Item cannot be null");
        }
        return toDoItemRepository.save(toDoItem);
    }

    public List<ToDoItem> getAll() {
        return toDoItemRepository.findAll();
    }

}
