import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Registro {

  registros: any[] = [
    {
      id: 1,
      nombre: 'Registro de usuarios',
      estado: 'Activo'
    },
    {
      id: 2,
      nombre: 'Control de procesos',
      estado: 'En proceso'
    }
  ];

  consultarRegistros() {
    return this.registros;
  }

  agregarRegistro(registro: any) {
    this.registros.push(registro);
  }

  modificarRegistro(id: number, nombre: string, estado: string) {
    for (let i = 0; i < this.registros.length; i++) {
      if (this.registros[i].id === id) {
        this.registros[i].nombre = nombre;
        this.registros[i].estado = estado;
      }
    }
  }
}
