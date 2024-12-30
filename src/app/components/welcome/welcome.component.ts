import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {WelcomeDataService} from '../../services/data/welcome-data.service'
// import {HelloWorldBean} from '../../services/data/welcome-data.service'
import {HardcodedAuthenticationService} from '../../services/hardcoded-authentication.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit{

  name = '';
  message = 'some welcome message';
  messageForCustom = '';
  constructor(
    private route:ActivatedRoute,
    public service:WelcomeDataService
    // public service:HardcodedAuthenticationService
  ){}

  ngOnInit(): void {
      console.log(this.message);
      console.log(this.route.snapshot.params['name']);
      this.name=this.route.snapshot.params['name'];
  }

  getWelcomeMessage(){
    console.log(this.service.executeHelloWorldBeanService().subscribe(
      response=>this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    ));
    console.log('last line');
  }

  handleErrorResponse(error:any){
    console.log(error);
    this.messageForCustom = error.error.message;
  }


  handleSuccessfulResponse(response:any){
    console.log(response);
    console.log(response.message);
    this.messageForCustom = response.message;
  }  
}

