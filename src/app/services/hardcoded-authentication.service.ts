import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor(private httpclient:HttpClient) { }

  authenticate(uname:string,passw:string){
    // console.log("Before "+this.isUserLoggedIn());
    
    if(uname==="pred" && passw === "passw"){
      sessionStorage.setItem('authenticatedUser',uname);
      // console.log("After "+this.isUserLoggedIn());
      return true;
    }
    return false;
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user===null)
  }

  executeHelloWorldBeanService(){
    // console.log("Executing hello bean service")
    // return this.httpclient.get<HelloWorldBean>('http://localhost:8080/hello-bean');
    return this.httpclient.get('http://localhost:8080/hello-bean');
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser')
  }
}

