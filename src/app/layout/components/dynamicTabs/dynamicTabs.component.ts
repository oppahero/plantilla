import { Component, Input, Type } from '@angular/core'
import { TabSelected } from 'src/app/models/tab-selected'
import { AutCargaDetComponent } from 'src/app/pages/APT/PSD/ejecucion-programa-carga/aut-carga-det/aut-carga-det.component'
import { EjecucionProgramaCargaComponent } from 'src/app/pages/APT/PSD/ejecucion-programa-carga/ejecucion-programa-carga.component'

interface Tab {
  title: string
  component: Type<any>
  isOpen: boolean
}

@Component({
  selector: 'app-dynamic-tabs',
  templateUrl: './dynamicTabs.component.html',
})
export class DynamicTabsComponent {

  tabs: Tab[] = []

  private componentMap: { [key: string]: Type<any> } = {
    EjecucionProgramaCargaComponent,
    AutCargaDetComponent
  }

  @Input() set add( selection: TabSelected ) {

    if(!selection) return

    const { label, componentName } = selection

    const component = this.getComponentByName(componentName)

    if(component)
      this.openTab(label, component)
  }

  closeTab(tab: Tab) {
    this.tabs = this.tabs.filter(t => t !== tab)
  }

  openTab(title: string, component: Type<any>) {
    const existingTab = this.tabs.find(t => t.title === title)

    if (!existingTab) {
      this.tabs.push({ title, component, isOpen: true })
    } else {
      existingTab.isOpen = true
    }
  }

  getComponentByName(name: string): Type<any> | null {
    return this.componentMap[name] || null
  }

}
