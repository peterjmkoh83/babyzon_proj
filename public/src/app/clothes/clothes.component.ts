import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.css']
})
export class ClothesComponent implements OnInit {
  shirts = [];
  pants= [];

  constructor(private _httpService: HttpService,private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.getShirts();
    this.getPants();
  }

  getShirts(){
    this._httpService.getName('shirt').subscribe(data=>{
      console.log("From shirts: ", data['data']);
      this.shirts = data['data'];
    })
  }

  getPants(){
    this._httpService.getName('pants').subscribe(data=>{
      console.log("From pants: ", data);
      this.pants = data["data"];
    })
  }
}
