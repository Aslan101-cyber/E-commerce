import { Component, OnInit } from '@angular/core';

import { PaginationService } from '../../services/pagination.service';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})

export class ProductsComponent implements OnInit {
  products: any[] = [];
  currentPage = 1;
  limit = 40;
  hasMore = true;
  constructor(private _PaginationService: PaginationService) {}

  ngOnInit(): void {
    this.getproducts();
  }

  getproducts() {
    this._PaginationService.getProduct(this.currentPage, this.limit).subscribe({
      next: (res) => {
        this.products = res.data; 
        console.log(this.products);
      }
    });
  }

  nextPage() {
    this.currentPage++;
    this.getproducts();
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.getproducts();
    }
  }
}
