package com.glory.todo.todoItem.repository;

import com.glory.todo.todoItem.model.ToDoItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ToDoItemRepository extends JpaRepository<ToDoItem, Long> {

}
