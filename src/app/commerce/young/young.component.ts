import { Component, OnInit } from '@angular/core';
import { GetProductService } from '../../services/get-product.service';

@Component({
  selector: 'app-young',
  standalone: false,
  templateUrl: './young.component.html',
  styleUrl: './young.component.css'
})
export class YoungComponent implements OnInit {
  constructor(private _GetProductService:GetProductService){}
  productss:any[]=[];
  getproducts(){
  this._GetProductService.getProduct().subscribe({
    next:(res)=>{
      this.productss=res.data;
      setTimeout(()=>{
        
      this.getSpecCatogry()
      },3000)
    
      
      
      console.log(this.productss);
    }
  })
  }
  getSpecCatogry(){
  this.productss = this.productss.filter((pro:any) =>{
  return pro.category._id =='6439d5b90049ad0b52b90048';
  })
  console.log(this.productss);
  
  }
    ngOnInit(): void{
      this.getproducts();
    }
  }