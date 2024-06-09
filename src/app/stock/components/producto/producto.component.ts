import { Producto } from '../../interfaces/producto.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-stock-producto',
  templateUrl: './producto.component.html'
})

export class ProductoComponent {
  public producto: Producto = {
    nombre: 'Sal',
    cantidad: 10
  };
}
