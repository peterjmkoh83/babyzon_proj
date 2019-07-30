import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  clothes = [];
  strollers = [];
  constructor(private _httpService: HttpService, private _route:ActivatedRoute,private _router:Router) { }

  ngOnInit() {
    //Calling the functions
    this.getClothes();
    this.getStrollers();
  }

  // Get all clothes by the category of 'clothes'
  getClothes(){
    // const clothes:string = 'clothes';
    this._httpService.getCategory('clothes').subscribe(data=>{
      this.clothes=data['data'];
      console.log(this.clothes);
    });
  }
  // Get all strollers by the category of 'strollers'
  getStrollers(){
     const strollers:string = 'stroller';
     this._httpService.getCategory(strollers).subscribe(data=>{
       this.strollers=data['data'];
       console.log(this.strollers);
     })
  }

}
