import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Todo} from '../../components/list-to-do/list-to-do.component';
import {API_URL} from './../../app.constants'
@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private httpclient:HttpClient
  ) { }

  getAllTodos(){
    // console.log("Executing hello bean service")
    return this.httpclient.get<Todo[]>(`${API_URL}/Todo/getAll`);
    // return this.httpclient.get('http://localhost:8080/hello-bean');
  }

  deleteTodo(id:any){
    return this.httpclient.delete(`${API_URL}/Todo/deleteById/${id}`);
  }

  getTodoById(id:any){
    return this.httpclient.get<Todo>(`${API_URL}/Todo/getTodoById/${id}`);
  }

  updateTodo(username:string,id:number,todo:Todo){
    return this.httpclient.put(`${API_URL}/Todo/updateById/${id}`,todo);
  }

  createTodo(username:string,todo:Todo){
    return this.httpclient.post(`${API_URL}/Todo/users/${username}/todos `,todo);
  }
}
