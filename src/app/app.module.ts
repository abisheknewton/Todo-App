import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { FormsModule } from '@angular/forms';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ErrorComponent } from './components/error/error.component';
import { ListToDoComponent } from './components/list-to-do/list-to-do.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoutComponent } from './components/logout/logout.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import {WelcomeDataService} from './services/data/welcome-data.service'
import {TodoComponent} from './components/todo/todo.component'
import {HttpIntercepterBasicAuthService} from './services/http/http-intercepter-basic-auth.service'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    WelcomeComponent,
    ErrorComponent,
    ListToDoComponent,
    MenuComponent,
    FooterComponent,
    LogoutComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:HttpIntercepterBasicAuthService,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
