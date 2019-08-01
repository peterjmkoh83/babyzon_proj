import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user_id: string;
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
    
    this._httpService.findOneUser(this.user).subscribe(data => {
      console.log(data)
      this.user = data['data'];
    })
    
    // if (this.user.login_email === ) {

    // }
    
  }
}
