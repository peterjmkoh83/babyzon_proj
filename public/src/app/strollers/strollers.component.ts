import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-strollers',
  templateUrl: './strollers.component.html',
  styleUrls: ['./strollers.component.css']
})
export class StrollersComponent implements OnInit {
  full = [];
  travel = [];
  double = [];
  
  constructor(private _httpService: HttpService,private _route: ActivatedRoute,
    private _router: Router) { }

   ngOnInit() {
    this.getFull();
    this.getTravel();
    this.getDouble();
  }

  getFull(){
    this._httpService.getName('full').subscribe(data=>{
      console.log("From full: ", data['data']);
      this.full = data['data'];
    })
  }

  getTravel(){
    this._httpService.getName('travel').subscribe(data=>{
      console.log("From travel: ", data);
      this.travel = data["data"];
    })
  }

  getDouble(){
    this._httpService.getName('double').subscribe(data=>{
      console.log("From double: ", data);
      this.double = data["data"];
    })
  }

}
