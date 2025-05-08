import { Component, OnInit } from '@angular/core';
import { GetProductService } from '../../services/get-product.service';
@Component({
  selector: 'app-music',
  standalone: false,
  templateUrl: './music.component.html',
  styleUrl: './music.component.css'
})
export class MusicComponent implements OnInit{
 
    constructor(private _GetProductService:GetProductService){}
  products:any[]=[];
  getproducts(){
  this._GetProductService.getProduct().subscribe({
    next:(res)=>{
      this.products=res.data;
      setTimeout(()=>{
        
      this.getSpecCatogry()
      },3000)
    
      
      
      console.log(this.products);
    }
  })
  }
  getSpecCatogry(){
  this.products = this.products.filter((pro:any) =>{
  return pro.category._id =='6439d58a0049ad0b52b9003f';
  })
  console.log(this.products);
  
  }
    ngOnInit(): void{
      this.getproducts();
    }
  }
  
 




