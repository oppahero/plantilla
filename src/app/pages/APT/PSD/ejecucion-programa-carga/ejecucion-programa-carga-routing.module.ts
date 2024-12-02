import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { EjecucionProgramaCargaComponent } from './ejecucion-programa-carga.component'
import { AutCargaComponent } from './aut-carga/aut-carga.component'
import { AutCargaDetComponent } from './aut-carga-det/aut-carga-det.component'

const routes: Routes = [
  // {
  //   path: '',
  //   component: EjecucionProgramaCargaComponent,
  //   children: [
  //     {
  //       path: '',
  //       redirectTo: 'aut-carga',
  //       pathMatch: 'full',
  //     },
  //     {
  //       path: 'aut-carga',
  //       children: [
  //         {
  //           path: '',
  //           component: AutCargaComponent,
  //         },
  //         {
  //           path: 'detalle/:autCarga',
  //           component: AutCargaDetComponent,
  //         },
  //       ],
  //     },
  //   ],
  // },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EjecProgCargaLargoRouting {}
