import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HardcodedAuthenticationService} from '../../services/hardcoded-authentication.service';
import {BasicAuthenticationService} from '../../services/basic-authentication.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.css'
})
export class LoginComponentComponent implements OnInit{

  ngOnInit(){
      
  }

  constructor(public hardcodedAuthenticationService:HardcodedAuthenticationService,
              public basicAuthenticationService:BasicAuthenticationService,
              private router:Router
  ){}

  valid:boolean = true;
  uname:string="";
  pw:string="";
  errorMessage:string="invalid";
  handleLogin(){
    if(this.hardcodedAuthenticationService.authenticate(this.uname,this.pw)){
    // if(this.uname==="pred" && this.pw === "passw"){
      this.router.navigate(['welcome',this.uname]);
      this.valid = true;
    }
    else{
      this.valid = false;
    }
  }

  // handleBasicAuthLogin(){
  //   this.basicAuthenticationService.executeHAuthenticationService(this.uname,this.pw).subscribe(
  //       data=>{
  //         console.log(data)
  //         this.router.navigate(['welcome',this.uname]);
  //         this.valid = true;
  //       },
  //       error=>{
  //         console.log(error);
  //         this.valid = false;
  //       }
  //     )
  // }

  handleJWTAuthLogin(){
    this.basicAuthenticationService.executeJWTAuthenticationService(this.uname,this.pw).subscribe(
        data=>{
          console.log(data)
          this.router.navigate(['welcome',this.uname]);
          this.valid = true;
        },
        error=>{
          console.log(error);
          this.valid = false;
        }
      )
  }

}

