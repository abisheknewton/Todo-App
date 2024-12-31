package com.newt.Todo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.newt.Todo.JpaRepos.TodoJpaRepos;
import com.newt.Todo.models.Todo;

@Service
public class TodoJpaService {
	
	@Autowired
	TodoJpaRepos todoJpaRepos;
	
	
	
	public List<Todo> getAllTodos(){
		return todoJpaRepos.findAll();
	}
	
	
//	public ResponseEntity<Void> delTodoById(long id) {
//		Todo todo = findById(id);
//		
//		todoJpaRepos.deleteById(id);
//		
//		return ResponseEntity.noContent().build();
//	}
	
	public Todo save(Todo todo)
	{
		return todoJpaRepos.save(todo);
	}
	
	public List<Todo> getTodosByName(String username){
		return todoJpaRepos.findByUsername(username);
	}
	

	public Todo findById(long id) {
		return todoJpaRepos.findById(id).get();
	}
}
