

package com.newt.Todo.controllers;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.newt.Todo.JpaRepos.TodoJpaRepos;
import com.newt.Todo.models.Todo;
import com.newt.Todo.services.TodoJpaService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/Todo")
public class TodoJPAaccessController {
	
	@Autowired
	TodoJpaService todoJpaService;
	

	@Autowired
	TodoJpaRepos todoJpaRepos;
	
	
	@GetMapping("/getAll")
	public List<Todo> getAllTodos()
	{
		return todoJpaService.getAllTodos();
	}
	
	@GetMapping("/getByName/{username}")
	public List<Todo> getTodosByName(@PathVariable String username)
	{
		return todoJpaService.getTodosByName(username);
	}
	
	
	
	
	@GetMapping("/getTodoById/{id}")
	public Todo getTodo(@PathVariable long id)
	{
		return todoJpaService.findById(id);
	}
	
	
	@DeleteMapping("/deleteById/{id}")
	public ResponseEntity<Void> deleteTodo(@PathVariable long id) {
		todoJpaRepos.deleteById(id);
	
		return ResponseEntity.noContent().build();
		
//		return todoService.delTodoById(id);
	}
	
	@PutMapping("/updateById/{id}")
	public ResponseEntity<Todo> updateTodo(@PathVariable long id,@RequestBody Todo todo)
	{
		Todo todoUpdated = todoJpaService.save(todo);
		return new ResponseEntity<Todo>(todo,HttpStatus.OK);
	}
	
	@PostMapping("/users/{username}/todos")
	public ResponseEntity<Void> updateTodo(@PathVariable String username,@RequestBody Todo todo){
		
		Todo createdTodo = todoJpaService.save(todo);
		
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdTodo.getId()).toUri();
		
		return ResponseEntity.created(uri).build();
	}
}
