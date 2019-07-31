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
<<<<<<< HEAD
    console.log('http.service by name: ',product_name);
    return this._http.get( `/api/products/${product_name}`);
=======
    console.log('product name from http: ', product_name);
    return this._http.get( `/api/products/name/${product_name}`);
>>>>>>> 52e4ceea3cba4c3695fa5ac8834f6a1a69b7f54d
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
}
