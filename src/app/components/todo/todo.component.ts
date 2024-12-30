import { Component,OnInit } from '@angular/core';
import {TodoDataService} from '../../services/todoData/todo-data.service'
import {Todo} from '../list-to-do/list-to-do.component';
import { ActivatedRoute } from '@angular/router';
import { NgModule } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit{


  constructor(
    private todoDataService:TodoDataService,
    private route:ActivatedRoute,
    private router:Router
  ){
    this.todo=new Todo(0,'',false,new Date());
  }

  // name:string="jh";
  id:number=1;
  todo:Todo;
  ngOnInit(){
    this.id=this.route.snapshot.params['id'];

    if(this.id!=-1){
    this.todoDataService.getTodoById(this.id)
    .subscribe(
      data=>this.todo=data
    );
  }  
}

  saveTodo(){

    if(this.id==-1){
      this.todoDataService.createTodo('Newton',this.todo)
    .subscribe(
      data=>{
        console.log(data);
        this.router.navigate(['todos']);
      }
    )
    }
    else{
    this.todoDataService.updateTodo('Newton',this.id,this.todo)
    .subscribe(
      data=>{
        console.log(data);
        this.router.navigate(['todos']);
      }
    )
  }
}
}
