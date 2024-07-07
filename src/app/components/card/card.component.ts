import { Component, Input } from '@angular/core';
import { IProductos } from '../../Interface/productos';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() prod: IProductos = {
    id: 0,
    nombre: '',
    descripcion: '',
    precio: 0,
    imagenBase64: '',
    categoriaId: 0,
    categoria: {
      id: 0,
      nombre: '',
      descripcion: ''
    }
  }

  @Input() show: boolean = false;
  @Input() width: string = "100%";
  
}
