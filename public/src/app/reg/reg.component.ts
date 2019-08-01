import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { $ } from 'protractor';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {
  err:any;
  isDisabled:boolean=false;
  confirm={
    pass:''
  }
  new_user= {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  }
  constructor(
    private _httpService:HttpService,
    private _router: Router,
    private _route: ActivatedRoute
    
    ) { }

  ngOnInit() {
    this.isDisabled
    this.new_user= {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    }
  }

  createUser() {
    console.log(this.new_user);
    console.log(this.confirm.pass);
    if (this.confirm.pass===this.new_user.password){
      this._httpService.createOneUser(this.new_user).subscribe(data => {
        console.log('data returned from create: ',data);
        console.log("data['message']: ",data['message'])
        console.log("data[error]: ", data['error'])
        if(data['message']==='Error'){
          this.err = data['error']['errors'];
          console.log("This.err: ",this.err);
        }
        else {
          this._router.navigate([''])
        }
      })
      
    }else{
      this.isDisabled=true;
      
      console.log('Password does not match')
    }
  }
  
}
