package com.glory.todo.common;

import java.util.List;
import lombok.Getter;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@RequiredArgsConstructor
public abstract class ApiResponse<T> {

    @NonNull
    private T data;

    private List<String> errors;

}
