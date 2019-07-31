import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.css']
})
export class ClothesComponent implements OnInit {
  clothes = [];
  constructor(private _httpService: HttpService,private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.getClothes();
    this.getName();
  }

  getClothes(){
    
    this._httpService.getCategory('clothes').subscribe(data=>{
      console.log("From clothes: ",data);
    })
  }
  getName(){
    this._httpService.getName('Summer Infant 3Dmini Convenience Stroller').subscribe(data=>{
      console.log('Get product by name:')
    });
  }
}
