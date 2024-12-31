package com.newt.Todo.JpaRepos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.newt.Todo.models.Todo;


@Repository
public interface TodoJpaRepos extends JpaRepository<Todo,Long>{
	List<Todo> findByUsername(String username);
}
