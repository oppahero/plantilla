import { Component, OnInit } from '@angular/core'
import { MenuItem } from 'primeng/api'

@Component({
  selector: 'app-ejecucion-programa-carga',
  templateUrl: './ejecucion-programa-carga.component.html',
})
export class EjecucionProgramaCargaComponent implements OnInit {
  items: MenuItem[]
  activeItem: MenuItem

  // component: Type<any>

  // componentMap: { [key: string]: Type<any> } = {
  //   AutCargaComponent,
  //   AutCargaDetComponent,
  // }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Autorización Carga',
        // command: () => {
        //   this.selectComponent('AutCargaComponent')
        // },
      },
      { label: 'Ord. Programadas' },
      { label: 'Frente de Despacho'},
    ]

    this.activeItem = this.items[0]

    // this.component = this.componentMap['AutCargaComponent']
  }

  // selectComponent(type: string) {
  //   const components = this.componentMap[type]
  //   if (components !== this.component) {
  //     this.component = components
  //   }
  // }
}
