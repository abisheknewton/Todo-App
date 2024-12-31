package com.newt.Todo.models;

public class AuthenticationBean {
	
	String message;
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	
	@Override
	public String toString() {
		return "AuthenticationBean [message=" + message + "]";
	}
	public AuthenticationBean(String msg) {
		this.message = msg;
		// TODO Auto-generated constructor stub
	}
}

 