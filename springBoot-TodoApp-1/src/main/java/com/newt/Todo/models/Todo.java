package com.newt.Todo.models;

import java.util.Date;
import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Todo {
	@Id
	@GeneratedValue
	private Long id;
	private String username;
	private String description;
	private Date targetDate;
	private boolean done;
	public Long getId() {
		return id;
	}
	
	public Todo() {}
	
	public Todo(long id, String username, String description, Date targetDate, boolean comStatus) {
		super();
		this.id = id;
		this.username = username;
		this.description = description;
		this.targetDate = targetDate;
		this.done = comStatus;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public boolean isDone() {
		return done;
	}
	public void setDone(boolean done) {
		this.done = done;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Date getTargetDate() {
		return targetDate;
	}
	public void setTargetDate(Date targetDate) {
		this.targetDate = targetDate;
	}
	public boolean isComStatus() {
		return done;
	}
	public void setComStatus(boolean comStatus) {
		this.done = comStatus;
	}
	@Override
	public int hashCode() {
		return Objects.hash(id);
	}
	
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Todo other = (Todo) obj;
		return id == other.id;
	}
	
	
	@Override
	public String toString() {
		return "Todo [id=" + id + ", username=" + username + ", description=" + description + ", targetDate="
				+ targetDate + ", comStatus=" + done + "]";
	}
}
