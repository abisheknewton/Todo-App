import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class WelcomeDataService {

  constructor(private httpclient:HttpClient) { }


createBasicAuthenrticationHttpHeader(){
  let username='newton';
  let password='passw'; 
  let basicAuthHeaderString='Basic '+window.btoa(username+':'+password);
  return basicAuthHeaderString;
}

  executeHelloWorldBeanService(){
    let basicAuthHeaderString = this.createBasicAuthenrticationHttpHeader();

    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    });

    // console.log("Executing hello bean service")
    return this.httpclient.get<HelloWorldBean>('http://localhost:8080/hello-bean',{headers});
    // return this.httpclient.get('http://localhost:8080/hello-bean');
  }
}


export class HelloWorldBean{
  constructor(public msg:String){}
}
