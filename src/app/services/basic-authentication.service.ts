import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {API_URL} from './../app.constants'

export const TOKEN = 'token';
export const AUTHENTICATED_USER = 'authenticatedUser';

@Injectable({
  providedIn: 'root',
})


export class BasicAuthenticationService {
  constructor(private httpclient: HttpClient) {}

  authenticate(uname: string, passw: string) {
    // console.log("Before "+this.isUserLoggedIn());

    if (uname === 'pred' && passw === 'passw') {
      sessionStorage.setItem(AUTHENTICATED_USER, uname);
      // console.log("After "+this.isUserLoggedIn());
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user === null);
  }

  executeHelloWorldBeanService() {
    // console.log("Executing hello bean service")
    // return this.httpclient.get<HelloWorldBean>('http://localhost:8080/hello-bean');
    return this.httpclient.get(`${API_URL}/hello-bean`);
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser()) {
      return sessionStorage.getItem(TOKEN);
    }
    return null;
  }


  executeJWTAuthenticationService(username: string, password: string) {

    return this.httpclient
      .post<any>(`${API_URL}/authenticate`, {
         username, 
         password
        })
      .pipe(
        map((data) => {
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
          return data;
        })
      );
    // return this.httpclient.get('http://localhost:8080/hello-bean');
  }


  // executeHAuthenticationService(username: string, password: string) {
  //   let basicAuthHeaderString =
  //     'Basic ' + window.btoa(username + ':' + password);

  //   // let basicAuthHeaderString = this.createBasicAuthenrticationHttpHeader();

  //   let headers = new HttpHeaders({
  //     Authorization: basicAuthHeaderString,
  //   });

  //   // console.log("Executing hello bean service")
  //   return this.httpclient
  //     .get<AuthenticationBean>(`${API_URL}/basicAuth`, { headers })
  //     .pipe(
  //       map((data) => {
  //         sessionStorage.setItem(AUTHENTICATED_USER, username);
  //         sessionStorage.setItem(TOKEN, basicAuthHeaderString);
  //         return data;
  //       })
  //     );
  //   // return this.httpclient.get('http://localhost:8080/hello-bean');
  // }
}
export class AuthenticationBean {
  constructor(public message: string) {}
}
