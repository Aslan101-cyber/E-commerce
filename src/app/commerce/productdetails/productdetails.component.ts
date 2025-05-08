import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetProductService } from '../../services/get-product.service';

@Component({
  selector: 'app-productdetails',
  standalone: false,
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent {
  proId:string='';
  product:any;
  constructor( private _ActivatedRoute:ActivatedRoute, private _GetProductService:GetProductService){
    _ActivatedRoute.params.subscribe({
      next:(res)=>{
        this.proId=res['id'];
        console.log(this.proId);
        this.getproduct(this.proId);
        console.log(res);
      }
    })
  }

  getproduct(id:string){
    this._GetProductService.getSpecProduct(id).subscribe({
      next: (res)=>{
        this.product = res.data;
        console.log(this.product)
        console.log(res)
      }
    })
  }

}
