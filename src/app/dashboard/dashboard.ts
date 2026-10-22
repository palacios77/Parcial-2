import { Component } from '@angular/core';
import { ItemListComponent } from '../item-list-component/item-list-component';
import { ItemDetailComponent } from '../item-detail-component/item-detail-component';
import { Registro } from '../registro';

@Component({
  selector: 'app-dashboard',
  imports: [ItemListComponent, ItemDetailComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  elementos = [
    {
      id: 1,
      nombre: 'Registro de usuarios',
      descripcion: 'Permite administrar los usuarios del sistema.',
      estado: 'Activo'
    },
    {
      id: 2,
      nombre: 'Control de procesos',
      descripcion: 'Permite consultar y gestionar los procesos.',
      estado: 'En proceso'
    },
    {
      id: 3,
      nombre: 'Generación de reportes',
      descripcion: 'Permite generar reportes del sistema.',
      estado: 'Activo'
    }
  ];

  elementoSeleccionado: any = null;

  seleccionarElemento(elemento: any) {
    this.elementoSeleccionado = elemento;
  }

  registrosCompartidos: any[] = [];

constructor(private registroService: Registro) {
  this.registrosCompartidos = this.registroService.consultarRegistros();
}
}
