import { Component, Input, OnInit } from '@angular/core';
import { IProductos } from '../../Interface/productos';
import { VinosService } from '../vinos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  
  products: IProductos[] = [];
  randomProducts: IProductos[] = [];

  constructor(private service: VinosService){}  

  ngOnInit(): void {
    this.service.getProducts().subscribe(res=>{
      this.products = res;
      this.randomProducts = this.getRandomProducts(this.products, 3);
    })
    
  }

  getRandomProducts(arr: any[], num: number) {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  }

  

}
