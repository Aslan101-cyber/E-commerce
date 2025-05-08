import { Component, OnInit } from '@angular/core';
import { GetProductService } from '../../services/get-product.service';

@Component({
  selector: 'app-tech',
  standalone: false,
  templateUrl: './tech.component.html',
  styleUrl: './tech.component.css'
})
export class TechComponent implements OnInit {
constructor(private _GetProductService:GetProductService){}
  productsss:any[]=[];
  getproducts(){
  this._GetProductService.getProduct().subscribe({
    next:(res)=>{
      this.productsss=res.data;
      setTimeout(()=>{
        
      this.getSpecCatogry()
      },3000)
    
      
      
      console.log(this.productsss);
    }
  })
  }
  getSpecCatogry(){
  this.productsss = this.productsss.filter((pro:any) =>{
  return pro.category._id =='6439d2d167d9aa4ca970649f';
  })
  console.log(this.productsss);
  
  }
    ngOnInit(): void{
      this.getproducts();
    }
}
