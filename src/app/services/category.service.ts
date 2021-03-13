import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { ListResponseModel } from '../models/ListResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  apiUrl = 'https://localhost:44326/api/categories/getall';
  constructor(private htppClient: HttpClient) {}

  //serviceden istek atabilmek için observable işlemi yapılması gerekir
  //Observable subscrib yapısını yapmamızı sağlar

  getCategories(): Observable<ListResponseModel<Category>> {
    return this.htppClient.get<ListResponseModel<Category>>(this.apiUrl);
  }
}
