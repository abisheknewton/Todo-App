import { Component,OnInit } from '@angular/core';
import {TodoDataService} from '../../services/todoData/todo-data.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-list-to-do',
  templateUrl: './list-to-do.component.html',
  styleUrl: './list-to-do.component.css'
})
export class ListToDoComponent implements OnInit{
  
  constructor(
    private todoDataService:TodoDataService,
    private router:Router
  ){}


  todos:Todo[]=[];
  message:string='';

  ngOnInit(): void {
    this.refreshTodos();
}
refreshTodos(){
  this.todoDataService.getAllTodos().subscribe(
    response=> {
      this.todos=response;
    }
  )
}

deleteTodo(id:any){
  console.log("delete clicked"+id);
  this.todoDataService.deleteTodo(id).subscribe(
    response =>{
      console.log(response);
      this.message = `Delete of Todo ${id} successful`;
      this.refreshTodos();
    }
    // error=>{

    // }
  );
}

updateTodo(id:any){
  console.log(`update ${id}`);
  this.router.navigate(['todos',id])
}

addTodo(){
  this.router.navigate(['todos',-1]);
}


  // todos=[
  //   new Todo(1,'Learn to dance',false,new Date()),
  //   new Todo(2,'Learn to sing',false,new Date()),
  //   new Todo(3,'Learn to write',false,new Date())
  // ]
}

export class Todo{

  constructor(
    public id:number,
    public description:string,
    public done:boolean,
    public targetDate:Date
  ){}
  
}

