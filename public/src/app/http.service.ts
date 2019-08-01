import { element } from 'protractor';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  
  // Get all products
  getAll=()=>{
    return this._http.get('/api/products');
  };
  // Get products by category
  getCategory=(product_category:string)=>{
    return this._http.get(`/api/products/${product_category}`);
  };
  //Get products by name
  getName=(product_name:string)=>{
    console.log('product name from http: ', product_name);
    return this._http.get( `/api/products/name/${product_name}`);
  };
  // Get one product by product id
  getOne=(product_id:string)=>{
    return this._http.get(`/api/products/${product_id}`);
  };
  // Create a new product 
  newProduct=(new_product:any)=>{
    this._http.post('/api/product/new',new_product);
  };
  // Update one product by product id and passing one product
  updateOne=(product_id:string,product:any)=>{
    return this._http.put(`/api/products/${product_id}`,product);
  };
  // Delete product by product id
  delete=(product_id:string)=>{
    return this._http.delete(`/api/delete/${product_id}`);
  };
  createOneUser=(user:any)=>{
    console.log("New user from http.service: ",user)
    return this._http.post('/api/users/new', user)
  }
  findOneUser=(user:any) => {
    console.log('Find one user from Http.service: ',user);
    return this._http.get('/api/users/login',user);
  }
    
}
