import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
HttpClient
@Injectable({
  providedIn: 'root'
})
export class PaginationService {
baseUrl:string = `https://ecommerce.routemisr.com/api/v1/`
  constructor(private _HttpClient:HttpClient) { 
  }
  // get-product.service.ts
getProduct(page: number = 1, limit: number = 10): Observable<any> {
  const url = `${this.baseUrl}products?page=${page}&limit=${limit}`;
  return this._HttpClient.get(url);
}

}
