import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { CommonModule } from '@angular/common'

import { EjecucionProgramaCargaComponent } from './ejecucion-programa-carga.component'
import { AutCargaComponent } from './aut-carga/aut-carga.component'
import { EjecProgCargaLargoRouting } from './ejecucion-programa-carga-routing.module'
import { SharedModule } from '../../../../shared/shared.module'
import { AutCargaDetComponent } from './aut-carga-det/aut-carga-det.component'
import { HelpsAptModule } from '../../../../helps/APT/helps-apt.module'
import { AccordionModule } from 'primeng/accordion'
@NgModule({
  declarations: [
    EjecucionProgramaCargaComponent,
    AutCargaComponent,
    AutCargaDetComponent,
    // AutCargaAltComponent,
    // AutCargaDespCentExtComponent,
    // AutCargaDevFrentComponent,
    // AutCargaReimpComponent,
    // AutCargaReoComponent,
    // AutCargaSegComponent,
    // FrentDespDetComponent,
    // FrentDespResComponent,
    // FrentDespComponent,
    // OrdProgDetComponent,
    // OrdProgComponent,
  ],
  imports: [
    CommonModule,
    EjecProgCargaLargoRouting,
    SharedModule,
    HelpsAptModule,
    AccordionModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    EjecucionProgramaCargaComponent,
    AutCargaComponent,
    AutCargaDetComponent,
  ]
})
export class EjecProgCargaLargosModule {}
