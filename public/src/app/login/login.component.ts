import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  err: any;
  user = {
    login_email: "",
    login_password: ""
  }


  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.user = {
      login_email: "",
      login_password: ""
    }

  }


  loginUser() {
    console.log('this.user: ',this.user);
    
    this._httpService.LogInUser(this.user).subscribe(data => {
      console.log('data back from login: ',data);

      if(data['message'] === 'Error'){
        this.err = data['error'];
        console.log(this.err)
        
      }else{
        console.log('success', data)
      }
    })
  
  }
}
