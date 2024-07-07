import { Component, OnInit } from '@angular/core';
import { IProductos } from '../../Interface/productos';
import { VinosService } from '../vinos.service';
import { ICategoria } from '../../Interface/categoria';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  
  products: IProductos[] = [];
  filteredProducts: any[] = [];
  categorias: ICategoria[] = [];
  selectedCategories: string[] = [];
  searchQuery: string = '';
  filered: IProductos[] = [];

  constructor(private service: VinosService){
    this.service.getCat().subscribe(res=>{
      this.categorias = res;
    });

    this.service.getProducts().subscribe(res=>{
      this.products = res;
      this.filered = this.products;
    });    
  }  

  filterByCategory(category: string, event: any) {
    const inputElement = event.target as HTMLInputElement;
    const isChecked = inputElement.checked;

    if (isChecked) {      
      this.selectedCategories.push(category)
    } else {
      const index = this.selectedCategories.indexOf(category);
      if (index > -1) {
        this.selectedCategories.splice(index, 1);
      }
    }
    this.applyFilters()
  }

  getValue(query: string) {
    this.searchQuery = query;
    this.filered = this.products.filter(prod => {
      const matchesSearch = this.searchQuery === '' || prod.nombre.toLowerCase().includes(this.searchQuery.toLowerCase());
      return matchesSearch;
    });
  }

  applyFilters() {    
    this.filered = this.products.filter(prod => {
      const matchesCategory = this.selectedCategories.length === 0 || this.selectedCategories.includes(prod.categoria.nombre);
      return matchesCategory;
    });
  }

}
