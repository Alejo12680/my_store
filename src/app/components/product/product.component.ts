import { Component, Input } from '@angular/core';
import { Products } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  //La forma de inicializar la variable del input para que no marque un error, porque no se permite en vacio, este objeto lo resibimos del padre App-components para utilizarlo en el html
  @Input() product!: Products;

}
