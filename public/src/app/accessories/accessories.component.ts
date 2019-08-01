import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent implements OnInit {

  bottles = [];
  toys = [];
  hats = [];

  constructor(private _httpService: HttpService,private _route: ActivatedRoute,
    private _router: Router) { }

    ngOnInit() {
      this.getBottles();
      this.getToys();
      this.getHats();
    }

    getBottles(){
      this._httpService.getName('bottle').subscribe(data=>{
        console.log("From bottle: ", data['data']);
        this.bottles = data['data'];
      })
    }
  
    getToys(){
      this._httpService.getName('toy').subscribe(data=>{
        console.log("From toys: ", data);
        this.toys = data["data"];
      })
    }
  
    getHats(){
      this._httpService.getName('hat').subscribe(data=>{
        console.log("From hats: ", data);
        this.hats = data["data"];
      })
    }
}
