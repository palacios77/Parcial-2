
import { Routes } from '@angular/router';

import { Dashboard } from './dashboard/dashboard';
import { Inicio } from './inicio/inicio';
import { Procesos } from './procesos/procesos';
import { Reportes } from './reportes/reportes';
import { ProcesoDetalle } from './proceso-detalle/proceso-detalle';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
  { path: '', component: Inicio },
  { path: 'dashboard', component: Dashboard },
  { path: 'procesos', component: Procesos },
  { path: 'reportes', component: Reportes },
  { path: 'proceso/:proceso', component: ProcesoDetalle },
  { path: '**', component: NotFound }
];
