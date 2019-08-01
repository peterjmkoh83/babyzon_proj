import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-bath',
  templateUrl: './bath.component.html',
  styleUrls: ['./bath.component.css']
})
export class BathComponent implements OnInit {

  baths=[];

  constructor(private _httpService: HttpService,private _route: ActivatedRoute,
    private _router: Router) {}

  ngOnInit() {
    this.getBaths();
  }

  getBaths(){
    this._httpService.getName('bath').subscribe(data=>{
      console.log("From baths: ", data['data']);
      this.baths = data['data'];
    })
  }

}
