import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product_id:string;
  product={
    name: '',
    img: '',
    qty:0.,
    category:'',
    price:0,
    desc:''
  }
  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.product={
      name: '',
      img: '',
      qty:0.,
      category:'',
      price:0,
      desc:''
    }
    this._route.params.subscribe((params:Params)=>{
      this.product_id=params['id'];
      console.log(this.product_id);
    });
    this.getOnePro();
  }
  getOnePro(){
    this._httpService.getOne(this.product_id).subscribe(data=>{
      console.log("Got one product", data);
      this.product=data['data'];
    })
  }
}
  