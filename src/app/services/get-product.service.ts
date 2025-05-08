import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
HttpClient

@Injectable({
  providedIn: 'root'
})
export class GetProductService {
  baseUrl: string = `https://ecommerce.routemisr.com/api/v1/`
  constructor(private _HttpClient: HttpClient) {

  }
  getProduct(): Observable<any> {
    return this._HttpClient.get(this.baseUrl + 'products')
  }
  getSpecProduct(proId: string): Observable<any> {
    return this._HttpClient.get(this.baseUrl + `products/${proId}`)
  }

}








