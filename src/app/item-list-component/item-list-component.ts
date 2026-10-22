import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-list-component',
  imports: [],
  templateUrl: './item-list-component.html',
  styleUrl: './item-list-component.css'
})
export class ItemListComponent {
  @Input() elementos: any[] = [];

  @Output() elementoSeleccionado = new EventEmitter<any>();

  seleccionarElemento(elemento: any) {
    this.elementoSeleccionado.emit(elemento);
  }
}

