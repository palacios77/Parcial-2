
import { Component } from '@angular/core';
import { Registro } from '../registro';

@Component({
  selector: 'app-procesos',
  imports: [],
  templateUrl: './procesos.html',
  styleUrl: './procesos.css'
})
export class Procesos {

  registros: any[] = [];

  constructor(private registroService: Registro) {
    this.registros = this.registroService.consultarRegistros();
  }

  agregarRegistro() {
    const nuevoRegistro = {
      id: 3,
      nombre: 'Nuevo proceso',
      estado: 'Pendiente'
    };

    this.registroService.agregarRegistro(nuevoRegistro);
    this.registros = this.registroService.consultarRegistros();
  }

  modificarRegistro() {
    this.registroService.modificarRegistro(
      1,
      'Registro de usuarios actualizado',
      'En revisión'
    );

    this.registros = this.registroService.consultarRegistros();
  }
}

