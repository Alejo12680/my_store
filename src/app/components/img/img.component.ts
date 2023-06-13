import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent {
  
  //Variable que optiene la información
  @Input() img: string = ""; 
  @Output() loaded = new EventEmitter<string>(); //instancia que se declara con la variable para emitir al padre

  public imagenDefault = "https://img.freepik.com/vector-gratis/panda-lindo-trabajando-ilustracion-icono-vector-dibujos-animados-portatil-concepto-icono-tecnologia-animal-aislado-vector-premium-estilo-dibujos-animados-plana_138676-3487.jpg?w=2000"

  imgError() {
    this.img = this.imagenDefault
  }

  imgeLoagind() {
    console.log('log hijo imagen cargada correctamente');
    this.loaded.emit(this.img); /* Este evento se emite para el padre datos*/
  }
}
