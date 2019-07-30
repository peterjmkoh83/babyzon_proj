import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.css']
})
export class ClothesComponent implements OnInit {

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }
  clothes=[];
  ngOnInit() {
    this.getProducts();
    this.getAll();
  }

  getAll(){
    this._httpService.getAll().subscribe(data=>{
      console.log('all: ',data);
    })
  }
  getProducts(){
    this._httpService.getCategory('clothes').subscribe(data=>{
      console.log(data['data']);
    })
  }
}
