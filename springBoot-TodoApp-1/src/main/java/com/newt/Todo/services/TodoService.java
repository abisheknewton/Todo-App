package com.newt.Todo.services;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import com.newt.Todo.models.Todo;


@Service
public class TodoService {
	private static List<Todo> todos = new ArrayList<>();
	private static long idCounter=0;
	
	static {
	todos.add(new Todo(++idCounter,"Newton","learn to dance",new Date(),false));
	todos.add(new Todo(++idCounter,"Newton","learn to write",new Date(),false));
	todos.add(new Todo(++idCounter,"Newton","learn to code",new Date(),false));
	}
	public List<Todo> getAllTodos(){
		return todos;
	}
	
	public Todo delTodoById(long id) {
		Todo todo = findById(id);
		if(todo==null)
			return null;
		todos.remove(todo);
		return todo;
	}
	
	public Todo save(Todo todo)
	{
		if(todo.getId()==-1 || todo.getId()==0)
		{
			todo.setId(++idCounter);
			todos.add(todo);
		}
		else
		{
			delTodoById(todo.getId());
			todos.add(todo);
		}
		return todo;
	}

	public Todo findById(long id) {
		for(Todo todo:todos)
		{
			if(todo.getId()==id)
			{
				return todo;
			}
		}
		return null;
	}
}
