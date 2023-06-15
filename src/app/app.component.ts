import { Component } from '@angular/core';
import { Products } from 'src/app/models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = '';

  //renderizado los productos para enviarcelos al hijo, desde app a products
  public productos: Products[] = [
    {
      id: '1',
      name: 'EL mejor juguete',
      price: 56500,
      image: './assets/producto.jpg'
    },
    {
      id: '2',
      name: 'Bicicleta casi nueva',
      price: 35600,
      image: './assets/producto.jpg'
    },
    {
      id: '3',
      name: 'Colleción de albumnes',
      price: 34000,
      image: './assets/producto.jpg'
    },
    {
      id: '4',
      name: 'Mis libros',
      price: 23000,
      image: './assets/producto.jpg'
    },
  ];

  onLoaded(img: string) {
    console.log('aviso que llego mensaje del hijo al padre', img);    
  }
}
