import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductResponseModel } from '../models/productResponseModel';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'https://localhost:44326/api/products/getall';
  constructor(private htppClient: HttpClient) {}

  //serviceden istek atabilmek için observable işlemi yapılması gerekir
  //Observable subscrib yapısını yapmamızı sağlar

  getProducts(): Observable<ProductResponseModel> {
    return this.htppClient.get<ProductResponseModel>(this.apiUrl);
  }
}
