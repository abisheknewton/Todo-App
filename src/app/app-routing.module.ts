import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { ErrorComponent } from './components/error/error.component';
import {ListToDoComponent} from './components/list-to-do/list-to-do.component'
import {LogoutComponent} from './components/logout/logout.component'
import {RouteGuardService} from './services/route-guard.service';
import {TodoComponent} from './components/todo/todo.component'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const routes: Routes = [
  {path:'welcome/:name',component: WelcomeComponent,canActivate:[RouteGuardService]},
  {path:'login',component: LoginComponentComponent},
  {path:'todos',component: ListToDoComponent,canActivate:[RouteGuardService]},
  {path:'logout',component: LogoutComponent,canActivate:[RouteGuardService]},
  {path:'',component: LoginComponentComponent},
  {path:'todos/:id',component: TodoComponent,canActivate:[RouteGuardService]},
  {path:'**',component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


