import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-proceso-detalle',
  imports: [],
  templateUrl: './proceso-detalle.html',
  styleUrl: './proceso-detalle.css'
})
export class ProcesoDetalle {
  proceso: string = '';

  constructor(private ruta: ActivatedRoute) {
    this.proceso = this.ruta.snapshot.paramMap.get('proceso') || '';
  }
}



